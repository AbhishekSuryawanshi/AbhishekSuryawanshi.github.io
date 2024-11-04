// script.js

// Function to reveal sections when scrolling
function revealSections() {
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight - 100) {
            section.classList.add('visible');
        }
    });
}

// Event listener for scroll to reveal sections
window.addEventListener('scroll', revealSections);

// Initial check for any sections already in view
revealSections();
