/* Select the button element
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
});*/

// Toggle navbar on smaller screen 
const toggleBtn = document.getElementById('toggle-btn');
const navbar = document.querySelector('nav ul');

toggleBtn.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

//Testimonial Slider
const testimonials =document.querySelectorAll('.testimonial');
let currentTestimonial = 0;

function nextTestinonial() {
    testimonials[currentTestimonial].classList.remove('active');
    currentTestimonial = (currentTestimonial + 1)/ testimonials.length;
    testimonials[currentTestimonial].classList.add('active');
}

setInterval(nextTestinonial, 5000); //Change Testimonial every 5 seconds

// Contact Form Submission
const contactForm = document.getElementById('contact');

contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message =document.getElementById('message');

    if (name && email && message) {
        alert(`Thank you, ${name}! Your message has been sent.` );
        //message for form data sending to server

        //
        contactForm.reset();//clear the form field
    } else {
        alert(`Please fill out all fields.`);
    }
});

//Scroll to top button
const scrollToTopBtn = document.querySelector('.scroll-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.computedStyleMap.display = 'block';
    } else {
        scrollToTopBtn.computedStyleMap.display = 'none';
    }
}) ;

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth'});
});

//Modal
const modal = document.getElementById('myModal');
const btn = document.getElementById(showModal);
const span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
    modal.style.display = 'block';
}
span.onclick = function() {
    modal.style.display = 'none';
}

window.onclick = function (event){
    if (event.target == modal) {
        modal.style.display = "none";
    }
}