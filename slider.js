// Tools Slider Functionality
(function(){
    const slider = document.getElementById('tools-slider');
    const prev = document.getElementById('tools-prev');
    const next = document.getElementById('tools-next');
    const dotsContainer = document.getElementById('tools-dots');

    const cards = slider.querySelectorAll('.snap-start');

    // Create dots (handlers use CARD_WIDTH at click time)
    cards.forEach((c, i) => {
        const btn = document.createElement('button');
        btn.className = 'w-2 h-2 rounded-full bg-gray-300';
        btn.setAttribute('aria-label', 'Go to slide ' + (i + 1));
        btn.addEventListener('click', () => slider.scrollTo({ left: i * CARD_WIDTH, behavior: 'smooth' }));
        dotsContainer.appendChild(btn);
    });

    const computeCardWidth = () => {
        if (!cards.length) return 320;
        const cardRect = cards[0].getBoundingClientRect();
        const style = getComputedStyle(slider);
        const gap = parseFloat(style.gap) || parseFloat(style.columnGap) || 24;
        return Math.round(cardRect.width + gap);
    };

    let CARD_WIDTH = computeCardWidth();
    window.addEventListener('resize', () => { 
        CARD_WIDTH = computeCardWidth(); 
    });

    const updateDots = () => {
        const idx = Math.round(slider.scrollLeft / CARD_WIDTH);
        [...dotsContainer.children].forEach((d, i) => 
            d.className = i === idx ? 'w-3 h-3 rounded-full bg-orange-500' : 'w-2 h-2 rounded-full bg-gray-300'
        );
    };

    // Initialize
    updateDots();

    slider.addEventListener('scroll', () => {
        if (window.requestAnimationFrame) {
            window.requestAnimationFrame(updateDots);
        } else {
            updateDots();
        }
    });

    prev && prev.addEventListener('click', () => slider.scrollBy({ left: -CARD_WIDTH, behavior: 'smooth' }));
    next && next.addEventListener('click', () => slider.scrollBy({ left: CARD_WIDTH, behavior: 'smooth' }));
})();
