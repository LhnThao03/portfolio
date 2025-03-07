// Smooth scrolling for navigation links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        const headerOffset = 80; // Điều chỉnh offset để tránh header che mất nội dung
        const elementPosition = targetSection.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});

// Header background change on scroll (existing code)
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Active link highlight
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 150) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});

// Section slide in animation
function checkSlide() {
    const sections = document.querySelectorAll('.slide-section');
    
    sections.forEach(section => {
        const slideInAt = (window.scrollY + window.innerHeight) - section.offsetHeight / 4;
        const sectionBottom = section.offsetTop + section.offsetHeight;
        const isHalfShown = slideInAt > section.offsetTop;
        const isNotScrolledPast = window.scrollY < sectionBottom;
        
        if (isHalfShown && isNotScrolledPast) {
            section.classList.add('show');
        }
    });
}

window.addEventListener('scroll', checkSlide);
// Check on load
window.addEventListener('load', checkSlide); 