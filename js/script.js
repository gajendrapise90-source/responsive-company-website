
// Contact Form Validation

const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name");
        const email = document.getElementById("email");
        const subject = document.getElementById("subject");
        const message = document.getElementById("message");
        const formMessage = document.getElementById("formMessage");

        let isValid = true;

        // Reset previous validation
        [name, email, subject, message].forEach(field => {
            field.classList.remove("is-invalid", "is-valid");
        });

        formMessage.textContent = "";
        formMessage.className = "mt-3";

        // Validate name
        if (name.value.trim().length < 2) {
            name.classList.add("is-invalid");
            isValid = false;
        } else {
            name.classList.add("is-valid");
        }

        // Validate email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email.value.trim())) {
            email.classList.add("is-invalid");
            isValid = false;
        } else {
            email.classList.add("is-valid");
        }

        // Validate subject
        if (subject.value.trim() === "") {
            subject.classList.add("is-invalid");
            isValid = false;
        } else {
            subject.classList.add("is-valid");
        }

        // Validate message
        if (message.value.trim().length < 10) {
            message.classList.add("is-invalid");
            isValid = false;
        } else {
            message.classList.add("is-valid");
        }

        if (!isValid) {
            formMessage.textContent =
                "Please correct the highlighted fields.";
            formMessage.classList.add("text-danger");
            return;
        }

        formMessage.textContent =
            "Form validation successful! Demo form submitted.";

        formMessage.classList.add("text-success");

        contactForm.reset();

        [name, email, subject, message].forEach(field => {
            field.classList.remove("is-valid", "is-invalid");
        });
    });
}
