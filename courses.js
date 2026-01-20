// Courses Toggle Functionality
(function(){
    const btn = document.getElementById('courses-toggle');
    const more = document.getElementById('more-courses');
    
    if (!btn || !more) return;
    
    btn.addEventListener('click', () => {
        const isHidden = more.classList.toggle('hidden');
        btn.textContent = isHidden ? 'XEM THÊM' : 'THU GỌN';
        
        // Scroll into view of expanded area
        if (!isHidden) {
            more.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
})();
