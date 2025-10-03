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

    // Skill card click effect
    const skills = document.querySelectorAll('.skill');
    let expandedSkill = null;

    skills.forEach(skill => {
        // Add close button to each skill card
        const closeBtn = document.createElement('button');
        closeBtn.className = 'close-btn';
        closeBtn.innerHTML = '×';
        closeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            closeExpandedSkill();
        });
        skill.appendChild(closeBtn);

        skill.addEventListener('click', () => {
            if (expandedSkill) {
                closeExpandedSkill();
            }
            if (expandedSkill !== skill) {
                expandSkill(skill);
            }
        });
    });

    function expandSkill(skill) {
        skill.classList.add('expanded');
        expandedSkill = skill;
        const overlay = document.querySelector('.skill-overlay');
        if (overlay) {
            overlay.classList.add('active');
        }
    }

    function closeExpandedSkill() {
        if (expandedSkill) {
            expandedSkill.classList.remove('expanded');
            expandedSkill = null;
            const overlay = document.querySelector('.skill-overlay');
            if (overlay) {
                overlay.classList.remove('active');
            }
        }
    }

    // Close expanded skill when clicking outside or pressing Escape
    document.addEventListener('click', (e) => {
        if (expandedSkill && !expandedSkill.contains(e.target)) {
            closeExpandedSkill();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && expandedSkill) {
            closeExpandedSkill();
        }
    });

    // Mobile menu toggle
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuClose = document.querySelector('.mobile-menu-close');

    if (mobileMenuToggle && mobileMenu) {
        mobileMenuToggle.addEventListener('click', () => {
            const expanded = mobileMenuToggle.getAttribute('aria-expanded') === 'true' || false;
            mobileMenuToggle.setAttribute('aria-expanded', !expanded);
            mobileMenuToggle.classList.toggle('active');
            mobileMenu.classList.toggle('active');
        });
    }

    // Mobile menu close button
    if (mobileMenuClose && mobileMenu) {
        mobileMenuClose.addEventListener('click', () => {
            mobileMenuToggle.setAttribute('aria-expanded', 'false');
            mobileMenuToggle.classList.remove('active');
            mobileMenu.classList.remove('active');
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
                title.textContent = isJapanese ? 'Personal-Web' : 'パーソナルウェブ' ;
                isJapanese = !isJapanese;
                // Fade in
                title.classList.remove('fade-out');
                title.classList.add('fade-in');
            }, 910); // After fade out duration
        }, 10000); // Every 10 seconds
    }
});

// Language select handler
document.addEventListener('DOMContentLoaded', () => {
    const languageSelect = document.getElementById('language-select');
    if (languageSelect) {
        languageSelect.addEventListener('change', () => {
            window.location.href = languageSelect.value;
        });
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

// Animate percentage count from 0 to target number
document.addEventListener('DOMContentLoaded', () => {
    const percentageElement = document.querySelector('.percentage');
    if (!percentageElement) return;

    const target = parseInt(percentageElement.textContent, 10);
    percentageElement.textContent = '0%';

    let current = 0;
    const duration = 2700; // animation duration in ms
    const stepTime = Math.abs(Math.floor(duration / target));

    const timer = setInterval(() => {
        current += 1;
        percentageElement.textContent = current + '%';
        if (current >= target) {
            clearInterval(timer);
        }
    }, stepTime);
});
