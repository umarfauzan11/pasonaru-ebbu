// Simple script to handle form submission
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    if (form) { // Tambahkan pengecekan jika form ada
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for your message! I will get back to you soon.');
            form.reset();
        });
    }

    // Development notice script
    const closeBtn = document.getElementById('close-notice');
    const overlay = document.getElementById('development-overlay');
    if (closeBtn && overlay) {
        closeBtn.addEventListener('click', () => {
            overlay.style.display = 'none';
        });
    }

    // Disable right-click on images
    document.addEventListener('contextmenu', (e) => {
        if (e.target.tagName === 'IMG') {
            e.preventDefault();
        }
    });

    // Disable dragstart on images
    document.addEventListener('dragstart', (e) => {
        if (e.target.tagName === 'IMG') {
            e.preventDefault();
        }
    });

    // Navbar scroll behavior
    const header = document.querySelector('header');
    let scrollTimeout;

    const handleScroll = () => {
        if (window.scrollY > 50) { // Gunakan 50px sebagai ambang batas scroll
            header.classList.add('header-scrolled');
        } else {
            header.classList.remove('header-scrolled');
        }
    };

    // Panggil sekali saat DOMContentLoaded untuk mengatur state awal
    handleScroll();

    window.addEventListener('scroll', () => {
        // Clear previous timeout to ensure it only runs after a pause
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            handleScroll();
            scrollTimeout = null; // Reset timeout
        }, 10); // Throttle ke 10ms (bisa disesuaikan)
    });

    // Card rotation
    const aboutCard = document.getElementById('about-card');
    if (aboutCard) {
        aboutCard.addEventListener('click', function() {
            this.classList.toggle('rotated');
        });
    }
});

// Navbar title animation
document.addEventListener('DOMContentLoaded', () => {
    const title = document.querySelector('nav h1');
    if (title) {
        let isJapanese = true;
        setInterval(() => {
            // Fade out
            title.classList.add('fade-out');
            title.classList.remove('fade-in');
            setTimeout(() => {
                // Change text
                title.textContent = isJapanese ? 'Personal-Web' : 'パーソナルウェブ';
                isJapanese = !isJapanese;
                // Fade in
                title.classList.remove('fade-out');
                title.classList.add('fade-in');
            }, 1000); // After fade out duration
        }, 10000); // Every 10 seconds
    }
});

// Preloader script (Ini harus di luar DOMContentLoaded karena menunggu 'load' event)
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
