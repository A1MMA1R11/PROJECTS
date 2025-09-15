document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault(); // prevent normal form submission

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // Replace with your actual Gmail address
            const gmailAddress = "a1mma1r@gmail.com";

            const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${gmailAddress}&su=${encodeURIComponent("Message from " + name)}&body=${encodeURIComponent("Name: " + name + "\nEmail: " + email + "\n\nMessage: " + message)}`;

            window.open(mailtoLink, '_blank'); // opens Gmail compose in new tab
        });
    }
});
