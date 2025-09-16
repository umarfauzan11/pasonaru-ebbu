// Simple script to handle form submission
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message! I will get back to you soon.');
        form.reset();
    });
});

// Preloader script
window.addEventListener('load', () => {
    setTimeout(() => {
        const preloader = document.getElementById('preloader');
        if (preloader) {
            preloader.style.opacity = '0';
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 500); // match transition duration
        }
    }, 1000); // 1 second delay after load
});

// Development notice script
document.addEventListener('DOMContentLoaded', () => {
    const closeBtn = document.getElementById('close-notice');
    const overlay = document.getElementById('development-overlay');
    if (closeBtn && overlay) {
        closeBtn.addEventListener('click', () => {
            overlay.style.display = 'none';
        });
    }
});
