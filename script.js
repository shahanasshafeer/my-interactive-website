document.addEventListener('DOMContentLoaded', () => {
    // Initialize EmailJS with your user ID
    emailjs.init("AtHQucxvv4E3QD7wU");

    const quoteDisplay = document.getElementById('quoteDisplay');
    const newQuoteButton = document.getElementById('newQuoteButton');
    const contactForm = document.getElementById('contactForm');

    const quotes = [
        "The only limit to our realization of tomorrow is our doubts of today. – Franklin D. Roosevelt",
        "In the end, we will remember not the words of our enemies, but the silence of our friends. – Martin Luther King Jr.",
        "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. – Ralph Waldo Emerson",
        "Life is what happens when you're busy making other plans. – John Lennon",
        "The purpose of our lives is to be happy. – Dalai Lama"
    ];

    function getRandomQuote() {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        return quotes[randomIndex];
    }

    newQuoteButton.addEventListener('click', () => {
        quoteDisplay.innerHTML = `<p>"${getRandomQuote()}"</p>`;
    });

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        emailjs.sendForm('service_tuxgslo', 'template_syq3leq', this)
            .then(function() {
                alert('Message sent successfully!');
                contactForm.reset(); // Reset the form fields
            }, function(error) {
                alert('Failed to send message: ' + JSON.stringify(error));
            });
    });
});
