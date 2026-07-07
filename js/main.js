// ==========================================
// HEADER SCROLL & NAVIGATION
// ==========================================

// Global DOM references and settings
const globalHeader = document.querySelector('header');
const navLinks = document.querySelectorAll('nav a');

// Unified Scroll Event Listener for Header
if (globalHeader) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            globalHeader.classList.add('pro-shadow', 'scrolled-nav', 'shadow-sm');
            globalHeader.classList.remove('bg-surface');
        } else {
            globalHeader.classList.remove('pro-shadow', 'scrolled-nav', 'shadow-sm');
            globalHeader.classList.add('bg-surface');
        }
    });
}

// Navigation active state logic
if (navLinks.length > 0) {
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.forEach(item => {
                item.classList.remove(
                    'text-primary',
                    'border-b-2',
                    'border-primary',
                    'pb-1'
                );
                item.classList.add('text-on-surface-variant');
            });

            link.classList.remove('text-on-surface-variant');
            link.classList.add(
                'text-primary',
                'border-b-2',
                'border-primary',
                'pb-1'
            );
        });
    });
}

// ==========================================
// WHY US
// ==========================================

// Micro-interaction for hover states and subtle reveal
document.querySelectorAll('.glass-card, .bg-surface-container-low').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-4px)';
        card.style.transition = 'all 0.3s ease';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0px)';
    });
});

// ==========================================
// SERVICES
// ==========================================

// Micro-interaction for service cards
document.querySelectorAll('.service-card-hover').forEach(card => {
    card.addEventListener('mouseenter', () => {
        const icon = card.querySelector('.material-symbols-outlined');
        if (icon) {
            icon.style.transform = 'scale(1.1)';
            icon.style.transition = 'transform 0.3s ease';
        }
    });

    card.addEventListener('mouseleave', () => {
        const icon = card.querySelector('.material-symbols-outlined');
        if (icon) {
            icon.style.transform = 'scale(1)';
        }
    });
});

// ==========================================
// ORIGINAL PARTS
// ==========================================

// Subtle button interactivity (Empty logic preserved as requested)
const interactiveButtons = document.querySelectorAll('.active\\:scale-\\[0\\.98\\]');

if (interactiveButtons.length > 0) {
    interactiveButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Add your click logic here
        });
    });
}

// ==========================================
// CONTACT US
// ==========================================

// Simple form interaction
const contactForm = document.querySelector('form');

if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const btn = e.target.querySelector('button');
        if (!btn) return;

        const originalText = btn.textContent;

        btn.textContent = 'Sending...';
        btn.disabled = true;

        setTimeout(() => {
            btn.textContent = 'Message Sent!';
            btn.classList.replace('bg-primary', 'bg-tertiary-container');

            contactForm.reset();

            setTimeout(() => {
                btn.textContent = originalText;
                btn.classList.replace('bg-tertiary-container', 'bg-primary');
                btn.disabled = false;
            }, 3000);
        }, 1500);
    });
}

// ==========================================
// COLLECTION
// ==========================================

// Product card interaction
const productCards = document.querySelectorAll('.product-card');

if (productCards.length > 0) {
    productCards.forEach(card => {
        card.addEventListener('mousedown', () => {
            card.style.transform = 'scale(0.98) translateY(-4px)';
        });

        card.addEventListener('mouseup', () => {
            card.style.transform = 'translateY(-4px)';
        });

        // Mouse exit triggers transform reset
        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
        });
    });
}

// ==========================================
// ABOUT US
// ==========================================

// Scroll Animation (Intersection Observer)
const observerOptions = {
    threshold: 0.1
};

const bentoObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0', 'translate-y-10');
            entry.target.classList.add('opacity-100', 'translate-y-0');
            
            // Stop observing after the animation completes once
            bentoObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

// Initialize and animate Bento Cards
document.querySelectorAll('.bento-card').forEach(card => {
    card.classList.add(
        'transition-all',
        'duration-700',
        'opacity-0',
        'translate-y-10'
    );

    bentoObserver.observe(card);
});