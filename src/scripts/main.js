// This file contains the JavaScript code for the landing page. 
// It may include functionality for interactive elements, such as form validation, animations, or event handling.

document.addEventListener('DOMContentLoaded', () => {
    // Example: Smooth scroll for anchor links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Example: Form validation
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function(e) {
            const nameInput = document.querySelector('#name');
            if (nameInput.value.trim() === '') {
                e.preventDefault();
                alert('Please enter your name.');
            }
        });
    }

    // Example: Achievements navigation
    const achievementsWrapper = document.querySelector('.achievements-wrapper');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    prevBtn.addEventListener('click', () => {
        achievementsWrapper.scrollBy({
            left: -300, // Adjust scroll distance
            behavior: 'smooth'
        });
    });

    nextBtn.addEventListener('click', () => {
        achievementsWrapper.scrollBy({
            left: 300, // Adjust scroll distance
            behavior: 'smooth'
        });
    });
});