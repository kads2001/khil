/**
 * ==========================================================================
 * KHIL 3D CURVED HORIZON GALLERY CONTROLLER
 * Kamat Hotels (India) Limited (KHIL)
 * 
 * Recreates the 3D Concave Cylindrical Horizon Carousel from reference design.
 * Features:
 * - Concave panoramic arc: Outer cards large & prominent, middle cards progressively smaller
 * - Subtle inward tilt (rotateY) and perspective depth (translateZ)
 * - Ultra-smooth delta-time critically damped physics (60-120fps stutter-free)
 * - Pure transform on .gallery-card-inner to preserve stable flexbox layout
 * - Synchronized with Lenis smooth scrolling (no duplicate instances)
 * - Mathematical seamless loop of all 12 properties in exact sequence
 * - Touch swipe, mouse drag with momentum, and wheel navigation
 * - Prev / Next navigation arrow controls
 * ==========================================================================
 */

(function () {
    'use strict';

    function initKhilGallery() {
        const section = document.getElementById('gallery');
        const viewport = document.getElementById('galleryViewport');
        const track = document.getElementById('galleryTrack');
        const prevBtn = document.getElementById('galleryPrevBtn');
        const nextBtn = document.getElementById('galleryNextBtn');

        if (!section || !viewport || !track) return;

        // Prevent double initialization
        if (track.dataset.khilGalleryInitialized === 'true') return;
        track.dataset.khilGalleryInitialized = 'true';

        // 1. Prepare Cards and Seamless Clones
        const originalCards = Array.from(track.querySelectorAll('.khil-gallery-card'));
        const numOriginals = originalCards.length;
        if (numOriginals === 0) return;

        // Ensure all images load eagerly and decode asynchronously
        originalCards.forEach(card => {
            card.querySelectorAll('img').forEach(img => {
                img.loading = 'eager';
                img.decoding = 'async';
            });
        });

        // Set 0: Left clone
        const cloneFragment1 = document.createDocumentFragment();
        originalCards.forEach(card => {
            const clone = card.cloneNode(true);
            clone.setAttribute('aria-hidden', 'true');
            clone.querySelectorAll('img').forEach(img => {
                img.loading = 'eager';
            });
            cloneFragment1.appendChild(clone);
        });
        track.appendChild(cloneFragment1);

        // Set 2: Right clone
        const cloneFragment2 = document.createDocumentFragment();
        originalCards.forEach(card => {
            const clone = card.cloneNode(true);
            clone.setAttribute('aria-hidden', 'true');
            clone.querySelectorAll('img').forEach(img => {
                img.loading = 'eager';
            });
            cloneFragment2.appendChild(clone);
        });
        track.appendChild(cloneFragment2);

        // Query all cards and inner wrappers (total 36 items)
        const allCards = Array.from(track.querySelectorAll('.khil-gallery-card'));
        const allInners = Array.from(track.querySelectorAll('.gallery-card-inner'));
        const totalCards = allCards.length;

        // 2. Metrics & Layout Measurement
        let cardWidth = 240;
        let cardGap = 12;
        let cardStep = 252;
        let singleSetWidth = numOriginals * cardStep;
        let trackPaddingLeft = 30;
        let viewportWidth = viewport.offsetWidth || window.innerWidth;
        let centerBaseX = 0;

        function measure() {
            if (!allCards.length) return;
            viewportWidth = viewport.offsetWidth || window.innerWidth;

            const measuredWidth = allCards[0].offsetWidth;
            if (measuredWidth > 40) {
                cardWidth = measuredWidth;
            }

            const style = window.getComputedStyle(track);
            const computedGap = parseFloat(style.columnGap || style.gap);
            cardGap = !isNaN(computedGap) ? computedGap : 12;

            const computedPad = parseFloat(style.paddingLeft);
            trackPaddingLeft = !isNaN(computedPad) ? computedPad : 30;

            cardStep = cardWidth + cardGap;
            singleSetWidth = numOriginals * cardStep;

            // Center of the middle set (starts at index numOriginals = 12)
            centerBaseX = (viewportWidth * 0.5) - (trackPaddingLeft + (numOriginals * cardStep) + (cardWidth * 0.5));
        }

        measure();
        window.addEventListener('resize', measure, { passive: true });
        window.addEventListener('load', measure, { passive: true });

        // Center initially on Card 1 of middle set
        let currentX = centerBaseX;
        let targetX = currentX;
        let isDragging = false;
        let isHovered = false;
        let startX = 0;
        let dragOriginX = 0;
        let dragVelocity = 0;
        let lastDragX = 0;
        let lastDragTime = performance.now();
        let lastScrollY = window.scrollY;

        // 3. Lenis Smooth Scrolling Integration
        function hookLenis() {
            if (window.lenis && typeof window.lenis.on === 'function') {
                window.lenis.on('scroll', (e) => {
                    handlePageScroll(e.velocity || 0);
                });
            } else if (typeof Lenis !== 'undefined' && !window.lenis) {
                try {
                    window.lenis = new Lenis({
                        duration: 1.2,
                        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                        orientation: 'vertical',
                        smoothWheel: true,
                    });
                    function raf(time) {
                        window.lenis.raf(time);
                        requestAnimationFrame(raf);
                    }
                    requestAnimationFrame(raf);
                    window.lenis.on('scroll', (e) => {
                        handlePageScroll(e.velocity || 0);
                    });
                } catch (err) {
                    console.warn('Lenis init skipped:', err);
                }
            }
        }

        function handlePageScroll(velocity) {
            if (isDragging) return;
            const rect = section.getBoundingClientRect();
            const inView = rect.top < window.innerHeight && rect.bottom > 0;
            if (inView) {
                targetX -= velocity * 0.7;
            }
        }

        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY;
            const deltaY = scrollY - lastScrollY;
            lastScrollY = scrollY;

            if (isDragging) return;
            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                targetX -= deltaY * 0.6;
            }
        }, { passive: true });

        hookLenis();
        setTimeout(hookLenis, 300);

        // 4. Mathematical 3D Curved Horizon Transforms (Applied to .gallery-card-inner)
        function update3DTransforms() {
            const vpCenter = viewportWidth * 0.5;
            // Radius controls the curve spread across the visible viewport (~3 cards each side)
            const radius = cardStep * 3.1;

            for (let i = 0; i < totalCards; i++) {
                const card = allCards[i];
                const inner = allInners[i];
                if (!card || !inner) continue;

                // Center of card relative to viewport left edge
                const cardCenter = trackPaddingLeft + (i * cardStep) + (cardWidth * 0.5) + currentX;
                const distFromCenter = cardCenter - vpCenter;
                const norm = distFromCenter / (radius || 1);

                // Normalization clamped to bounds
                const clampedNorm = Math.max(-1.4, Math.min(1.4, norm));
                const absNorm = Math.abs(clampedNorm);

                // Inward tilt: left cards face inward right (+deg), right cards face inward left (-deg)
                const rotY = -clampedNorm * 24; // 24 degrees inward tilt matching reference

                // Perspective depth: outer cards curve closer to camera
                const transZ = Math.pow(absNorm, 1.45) * 135;

                // Visual hierarchy: Center card is smaller (0.78), outer cards progressively larger (up to ~1.38)
                const scale = 0.78 + Math.pow(absNorm, 1.55) * 0.58;

                // Layering: outer cards layer gracefully above inner cards
                const zIndex = Math.round(absNorm * 30) + 1;

                inner.style.transform = `translate3d(0, 0, ${transZ.toFixed(2)}px) rotateY(${rotY.toFixed(2)}deg) scale(${scale.toFixed(3)})`;
                card.style.zIndex = zIndex;
            }
        }

        // 5. Ultra-Smooth Frame-Rate Independent Animation Loop
        let lastFrameTime = performance.now();

        function render(now) {
            const dt = Math.min((now - lastFrameTime) / 1000, 0.08);
            lastFrameTime = now;

            // Frame-rate independent exponential smoothing (Lenis-grade liquid glide)
            const decay = isDragging ? 18 : 8.5;
            const damping = 1 - Math.exp(-decay * dt);
            currentX += (targetX - currentX) * damping;

            // Mathematical seamless loop wrapping around centerBaseX
            if (singleSetWidth > 0) {
                while (currentX <= centerBaseX - singleSetWidth) {
                    currentX += singleSetWidth;
                    targetX += singleSetWidth;
                }
                while (currentX >= centerBaseX + singleSetWidth) {
                    currentX -= singleSetWidth;
                    targetX -= singleSetWidth;
                }
            }

            // Apply translation to track
            track.style.transform = `translate3d(${currentX.toFixed(2)}px, 0, 0)`;

            // Update 3D cylindrical concave transforms on all cards
            update3DTransforms();

            requestAnimationFrame(render);
        }

        requestAnimationFrame(render);

        // 6. User Interactions: Hover, Drag, Wheel, Navigation Buttons

        viewport.addEventListener('mouseenter', () => { isHovered = true; }, { passive: true });
        viewport.addEventListener('mouseleave', () => {
            isHovered = false;
            if (isDragging) {
                isDragging = false;
                viewport.classList.remove('is-dragging');
                targetX += dragVelocity * 8;
            }
        }, { passive: true });

        // Mouse Drag with Fluid Momentum
        viewport.addEventListener('mousedown', (e) => {
            if (e.button !== 0) return;
            isDragging = true;
            viewport.classList.add('is-dragging');
            startX = e.pageX;
            lastDragX = e.pageX;
            dragOriginX = targetX;
            dragVelocity = 0;
            lastDragTime = performance.now();
        });

        window.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            const now = performance.now();
            const dt = Math.max((now - lastDragTime) / 1000, 0.001);
            const deltaX = e.pageX - lastDragX;
            dragVelocity = (deltaX / dt) * 0.016;
            lastDragX = e.pageX;
            lastDragTime = now;

            targetX = dragOriginX + (e.pageX - startX) * 1.15;
        }, { passive: true });

        window.addEventListener('mouseup', () => {
            if (!isDragging) return;
            isDragging = false;
            viewport.classList.remove('is-dragging');
            if (Math.abs(dragVelocity) > 2) {
                targetX += dragVelocity * 10;
            }
        });

        // Touch Swipe
        viewport.addEventListener('touchstart', (e) => {
            if (e.touches.length !== 1) return;
            isDragging = true;
            startX = e.touches[0].pageX;
            lastDragX = startX;
            dragOriginX = targetX;
            dragVelocity = 0;
            lastDragTime = performance.now();
        }, { passive: true });

        viewport.addEventListener('touchmove', (e) => {
            if (!isDragging || e.touches.length !== 1) return;
            const now = performance.now();
            const dt = Math.max((now - lastDragTime) / 1000, 0.001);
            const touchX = e.touches[0].pageX;
            const deltaX = touchX - lastDragX;
            dragVelocity = (deltaX / dt) * 0.016;
            lastDragX = touchX;
            lastDragTime = now;

            targetX = dragOriginX + (touchX - startX) * 1.2;
        }, { passive: true });

        viewport.addEventListener('touchend', () => {
            if (!isDragging) return;
            isDragging = false;
            if (Math.abs(dragVelocity) > 2) {
                targetX += dragVelocity * 9;
            }
        }, { passive: true });

        // Mouse Wheel over Viewport: smooth horizontal gallery panning
        viewport.addEventListener('wheel', (e) => {
            const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
            if (Math.abs(delta) > 2) {
                targetX -= delta * 0.9;
                e.preventDefault();
            }
        }, { passive: false });

        // Prev & Next Buttons
        if (prevBtn) {
            prevBtn.addEventListener('click', (e) => {
                e.preventDefault();
                targetX += cardStep;
            });
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', (e) => {
                e.preventDefault();
                targetX -= cardStep;
            });
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initKhilGallery);
    } else {
        initKhilGallery();
    }
})();
