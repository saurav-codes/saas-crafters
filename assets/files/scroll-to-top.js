document.addEventListener('DOMContentLoaded', () => {
    const scrollButton = document.getElementById('scroll-to-top');
    
    // Show/hide button based on scroll position
    const toggleScrollButton = () => {
        const scrolled = window.scrollY;
        const viewportHeight = window.innerHeight;
        const fullHeight = document.documentElement.scrollHeight;
        
        // Calculate scroll percentage
        const scrollPercent = (scrolled / (fullHeight - viewportHeight)) * 100;
        
        // Update progress indicator
        scrollButton.style.setProperty('--scroll-percent', `${scrollPercent}%`);
        
        // Show/hide button
        if (scrolled > viewportHeight * 0.3) {
            scrollButton.classList.add('visible');
        } else {
            scrollButton.classList.remove('visible');
        }
    };
    
    // Smooth scroll to top
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    
    // Event listeners
    window.addEventListener('scroll', toggleScrollButton);
    scrollButton.addEventListener('click', scrollToTop);
    
    // Initial check
    toggleScrollButton();
}); 