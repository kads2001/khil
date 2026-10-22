document.addEventListener('DOMContentLoaded', function () {
    const viewport = document.getElementById('galleryViewport');
    const track = document.getElementById('galleryTrack');
    const section = document.getElementById('gallery');
    if (!viewport || !track || !section) return;

    // Clone set twice to ensure an infinite seamless loop in both directions
    const originalCards = Array.from(track.querySelectorAll('.khil-gallery-card'));
    const numOriginal = originalCards.length;
    if (numOriginal === 0) return;

    // Clone set 1
    originalCards.forEach(c => track.appendChild(c.cloneNode(true)));
    // Clone set 2
    originalCards.forEach(c => track.appendChild(c.cloneNode(true)));

    const allCards = Array.from(track.querySelectorAll('.khil-gallery-card'));
    const allInners = Array.from(track.querySelectorAll('.gallery-card-inner'));

    let cardCenters = [];
    let loopWidth = 0;

    function measure() {
        if (!allCards.length) return;
        const cardWidth = allCards[0].offsetWidth;
        loopWidth = cardWidth * numOriginal; // Exact repeat distance
        cardCenters = allCards.map((c, idx) => (idx + 0.5) * cardWidth);
    }
    measure();
    window.addEventListener('resize', measure);

    // Start centered so nice cards are visible immediately
    let currentX = -loopWidth * 0.5;
    let targetX = currentX;
    let isDragging = false;
    let isHovered = false;
    let startDragX = 0;
    let dragOriginX = 0;
    let lastScrollY = window.scrollY;

    const autoSpeed = 0.9; // Butter smooth auto pace (pixels per frame normalized)

    // Pure GPU transform scale calculation (Zero layout reflow!)
    function updateTransforms() {
        const viewportCenter = window.innerWidth / 2;
        const radius = window.innerWidth * 0.38; // Radius of center magnification

        for (let i = 0; i < allCards.length; i++) {
            const cardCenter = cardCenters[i] + currentX;
            const dist = Math.abs(viewportCenter - cardCenter);

            let s = 0.67; // Minimum side scale (~360px height)
            let z = 1;

            if (dist < radius) {
                const norm = dist / radius;
                const intensity = 0.5 + 0.5 * Math.cos(norm * Math.PI);
                s = 0.67 + intensity * 0.33; // Scales smoothly up to 1.0 (hero size: 540px!)
                z = Math.round(intensity * 10) + 1;
            }

            if (allInners[i]) {
                allInners[i].style.transform = `scale(${s.toFixed(4)})`;
            }
            allCards[i].style.zIndex = z;

            if (s > 0.88) {
                allCards[i].classList.add('is-center');
            } else {
                allCards[i].classList.remove('is-center');
            }
        }
    }

    // Page scroll acceleration: smoothly moves right-to-left as user scrolls down
    function onScroll() {
        const scrollY = window.scrollY;
        const delta = scrollY - lastScrollY;
        lastScrollY = scrollY;

        if (isDragging) return;

        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            targetX -= delta * 1.35;
        }
    }
    window.addEventListener('scroll', onScroll, { passive: true });

    let lastTime = performance.now();

    // 60-120 FPS high-performance animation loop
    function loop(now) {
        const dt = Math.min((now - lastTime) / 16.666, 2.0); // Delta time normalized to 60fps
        lastTime = now;

        // Auto move right-to-left when not hovering or dragging
        if (!isDragging && !isHovered) {
            targetX -= autoSpeed * dt;
        }

        // Smooth Lerp (high responsiveness, zero jitter)
        currentX += (targetX - currentX) * 0.1;

        // Mathematical seamless infinite wrapping
        if (loopWidth > 0) {
            while (currentX <= -loopWidth * 1.5) {
                currentX += loopWidth;
                targetX += loopWidth;
            }
            while (currentX >= -loopWidth * 0.5) {
                currentX -= loopWidth;
                targetX -= loopWidth;
            }
        }

        // Hardware-accelerated GPU translation
        track.style.transform = `translate3d(${currentX.toFixed(2)}px, 0, 0)`;
        updateTransforms();

        requestAnimationFrame(loop);
    }
    requestAnimationFrame(loop);

    // Hover pause so user can inspect details
    viewport.addEventListener('mouseenter', () => isHovered = true);
    viewport.addEventListener('mouseleave', () => { isHovered = false; isDragging = false; });

    // Drag / Swipe support for mouse
    viewport.addEventListener('mousedown', (e) => {
        isDragging = true;
        startDragX = e.pageX;
        dragOriginX = targetX;
    });

    window.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        targetX = dragOriginX + (e.pageX - startDragX);
    });

    window.addEventListener('mouseup', () => isDragging = false);

    // Touch support for mobile devices
    viewport.addEventListener('touchstart', (e) => {
        isDragging = true;
        startDragX = e.touches[0].pageX;
        dragOriginX = targetX;
    }, { passive: true });

    viewport.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        targetX = dragOriginX + (e.touches[0].pageX - startDragX);
    }, { passive: true });

    viewport.addEventListener('touchend', () => isDragging = false);
});
