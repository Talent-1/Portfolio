// Select the button element
const button = document.querySelector('button');

// Add event listener to the button
button.addEventListener('click', () => {
    // update the text content of the button
button.textContent = 'Clicked!';
});

// Get root element
const root = document.documentElement;

//Get the dark mode toggle button
const darkModeToggle = document.querySelector('.dark-mode-toggle');

// Add event listener to the toggle button
darkModeToggle.addEventListener('click', () => {
    //Toggle dark mode class on the root element
    root.classList.toggle('dark-mode-toggle');
});

//Scroll to the top button
const scrollTopButton = document.getElementsByClassName('scroll-to-top')[0];
window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        scrollTopButton.style.display = 'block';
    } else {
        scrollTopButton.style.display = 'none';
    }
});

scrollTopButton.addEventListener('click', () => {
    window.scrollTo( { top: 0, behavior: 'smooth'});
});

const modalTrigger = document.querySelector('.modal-trigger');
const modal = document.querySelector('.modal');
const closeButton = document.querySelector('.close');

modalTrigger.addEventListener('click', () => {
    modal.classList.add('show');
});

closeButton.addEventListener('click', () => {
    modal.classList.remove('show');
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('show');
    }
});