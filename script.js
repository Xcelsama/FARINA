// Smooth scroll for internal navigation
document.addEventListener('click', function (e) {
    const link = e.target.closest('a[href^="#"]');
    if (!link) return;
    const href = link.getAttribute('href');
    if (href === '#' || href === '#!') return;
    const target = document.querySelector(href);
    if (target) {
        e.preventDefault();
        target.scrollIntoView({behavior: 'smooth', block: 'start'});
        history.replaceState(null, '', href);
    }
});

// Header shrink effect on scroll
const header = document.querySelector('.site-header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 60) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
});

// Header reveal on load
window.addEventListener('load', () => {
    header.classList.add('visible');
});

// Active nav link based on section in viewport
const navLinks = Array.from(document.querySelectorAll('.site-nav a'));
const sections = navLinks.map(a => document.querySelector(a.getAttribute('href'))).filter(Boolean);
const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const id = '#' + entry.target.id;
            navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === id));
        }
    });
}, {threshold: 0.45});
sections.forEach(s => sectionObserver.observe(s));

// IntersectionObserver for reveal-on-scroll
const reveals = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            io.unobserve(entry.target);
        }
    });
}, {threshold: 0.12});

reveals.forEach(r => io.observe(r));

// Lightweight DOM ready fallback
if (document.readyState === 'complete' || document.readyState === 'interactive') {
    setTimeout(() => reveals.forEach(r => io.observe(r)), 0);
} else {
    document.addEventListener('DOMContentLoaded', () => reveals.forEach(r => io.observe(r)));
}

// Show new product popup on page load
document.addEventListener('DOMContentLoaded', function() {
    const modal = new bootstrap.Modal(document.getElementById('newProductModal'));
    modal.show();

    // Handle "Check it out" button click
    document.getElementById('checkoutChinchinBtn').addEventListener('click', function() {
        modal.hide();
        const chinchinCard = document.querySelector('.card-title');
        if (chinchinCard && chinchinCard.textContent.includes('Chitu-Ka Farina Crunchies')) {
            chinchinCard.closest('.card').scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    });
});



