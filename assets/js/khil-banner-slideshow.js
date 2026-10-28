/**
 * ==========================================================================
 * KHIL HERO BANNER BACKGROUND SLIDESHOW CONTROLLER
 * Kamat Hotels (India) Limited (KHIL)
 * 
 * Features:
 * - Smooth Lenis-grade continuous sliding between banner backgrounds
 * - Zero zoom / scale effect on imagery (pristine aspect ratio)
 * - Two arrow buttons in the bottom-right corner (Prev / Next)
 * - Numerical slide counter (01 / 04)
 * - Auto-advances every 5.5s with hover pause
 * - Touch swipe & keyboard arrow navigation
 * ==========================================================================
 */

(function () {
    'use strict';

    function initBannerSlideshow() {
        const track = document.getElementById('heroBgTrack');
        const prevBtn = document.getElementById('heroBannerPrevBtn');
        const nextBtn = document.getElementById('heroBannerNextBtn');
        const currentCounter = document.getElementById('heroBannerCurrent');
        const section = document.getElementById('wheelBanner');

        if (!track) return;

        const originalSlides = Array.from(track.querySelectorAll('.khil-hero-bg-slide'));
        const totalRealSlides = originalSlides.length;
        if (totalRealSlides <= 1) return;

        // Clone first slide to end and last slide to start for infinite seamless sliding
        const firstClone = originalSlides[0].cloneNode(true);
        const lastClone = originalSlides[totalRealSlides - 1].cloneNode(true);
        firstClone.setAttribute('aria-hidden', 'true');
        lastClone.setAttribute('aria-hidden', 'true');

        track.appendChild(firstClone);
        track.insertBefore(lastClone, originalSlides[0]);

        // Track now contains: [lastClone, slide1, slide2, slide3, slide4, firstClone]
        // Indices:             0          1       2       3       4       5
        let currentIndex = 1;
        let isTransitioning = false;
        let autoPlayTimer = null;
        const slideDuration = 5500;

        function updateCounter(realIndex) {
            if (currentCounter) {
                const formatted = (realIndex + 1).toString().padStart(2, '0');
                currentCounter.textContent = formatted;
            }
        }

        function setTrackPosition(index, animate = true) {
            if (animate) {
                track.style.transition = 'transform 0.85s cubic-bezier(0.22, 1, 0.36, 1)';
            } else {
                track.style.transition = 'none';
            }
            track.style.transform = `translate3d(-${index * 100}%, 0, 0)`;
        }

        // Initialize position at first real slide
        setTrackPosition(currentIndex, false);
        updateCounter(0);

        function goToSlide(newIndex) {
            if (isTransitioning) return;
            isTransitioning = true;
            currentIndex = newIndex;
            setTrackPosition(currentIndex, true);

            // Compute real slide index for counter
            let realIndex = currentIndex - 1;
            if (realIndex >= totalRealSlides) realIndex = 0;
            if (realIndex < 0) realIndex = totalRealSlides - 1;
            updateCounter(realIndex);
        }

        function nextSlide() {
            goToSlide(currentIndex + 1);
        }

        function prevSlide() {
            goToSlide(currentIndex - 1);
        }

        // Handle seamless loop reset when transition ends
        track.addEventListener('transitionend', () => {
            isTransitioning = false;
            // Wrapped to end clone -> jump to real first slide
            if (currentIndex === totalRealSlides + 1) {
                currentIndex = 1;
                setTrackPosition(currentIndex, false);
            }
            // Wrapped to start clone -> jump to real last slide
            if (currentIndex === 0) {
                currentIndex = totalRealSlides;
                setTrackPosition(currentIndex, false);
            }
        });

        // 3. Arrow Navigation
        if (nextBtn) {
            nextBtn.addEventListener('click', (e) => {
                e.preventDefault();
                nextSlide();
                restartAutoPlay();
            });
        }

        if (prevBtn) {
            prevBtn.addEventListener('click', (e) => {
                e.preventDefault();
                prevSlide();
                restartAutoPlay();
            });
        }

        // 4. Auto-Play functionality
        function startAutoPlay() {
            stopAutoPlay();
            autoPlayTimer = setInterval(nextSlide, slideDuration);
        }

        function stopAutoPlay() {
            if (autoPlayTimer) {
                clearInterval(autoPlayTimer);
                autoPlayTimer = null;
            }
        }

        function restartAutoPlay() {
            stopAutoPlay();
            startAutoPlay();
        }

        startAutoPlay();

        // Pause autoplay on mouse enter / resume on leave
        if (section) {
            section.addEventListener('mouseenter', stopAutoPlay, { passive: true });
            section.addEventListener('mouseleave', startAutoPlay, { passive: true });
        }

        // 5. Touch / Swipe Support
        let touchStartX = 0;
        let touchEndX = 0;

        if (section) {
            section.addEventListener('touchstart', (e) => {
                touchStartX = e.changedTouches[0].screenX;
            }, { passive: true });

            section.addEventListener('touchend', (e) => {
                touchEndX = e.changedTouches[0].screenX;
                handleSwipe();
            }, { passive: true });
        }

        function handleSwipe() {
            const swipeThreshold = 50;
            if (touchEndX < touchStartX - swipeThreshold) {
                nextSlide();
                restartAutoPlay();
            } else if (touchEndX > touchStartX + swipeThreshold) {
                prevSlide();
                restartAutoPlay();
            }
        }

        // 6. Keyboard Navigation
        window.addEventListener('keydown', (e) => {
            const rect = section ? section.getBoundingClientRect() : null;
            const inView = rect && rect.top < window.innerHeight && rect.bottom > 0;
            if (!inView) return;

            if (e.key === 'ArrowRight') {
                nextSlide();
                restartAutoPlay();
            } else if (e.key === 'ArrowLeft') {
                prevSlide();
                restartAutoPlay();
            }
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initBannerSlideshow);
    } else {
        initBannerSlideshow();
    }
})();

