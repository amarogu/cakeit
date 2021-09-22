function validate() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;
    const nameContainer = document.getElementById("contact-us__name");
    const emailContainer = document.getElementById("contact-us__email");
    const phoneContainer = document.getElementById("contact-us__phone");
    const subjectContainer = document.getElementById("contact-us__subject");
    const messageContainer = document.getElementById("contact-us__message");
    const contactForm = document.getElementById("contact-us__form");

    if(name === "") {
        nameContainer.classList.add("contact-us__input-is-invalid");
        emailContainer.classList.remove("contact-us__input-is-invalid");
        phoneContainer.classList.remove("contact-us__input-is-invalid");
        subjectContainer.classList.remove("contact-us__input-is-invalid");
        messageContainer.classList.remove("contact-us__input-is-invalid");
        return false;
    }

    if(email === "") {
        emailContainer.classList.add("contact-us__input-is-invalid");
        nameContainer.classList.remove("contact-us__input-is-invalid");
        phoneContainer.classList.remove("contact-us__input-is-invalid");
        subjectContainer.classList.remove("contact-us__input-is-invalid");
        messageContainer.classList.remove("contact-us__input-is-invalid");
        return false;
    }

    if(phone === "") {
        phoneContainer.classList.add("contact-us__input-is-invalid");
        emailContainer.classList.remove("contact-us__input-is-invalid");
        nameContainer.classList.remove("contact-us__input-is-invalid");
        subjectContainer.classList.remove("contact-us__input-is-invalid");
        messageContainer.classList.remove("contact-us__input-is-invalid");
        return false;
    }

    if(subject === "") {
        subjectContainer.classList.add("contact-us__input-is-invalid");
        phoneContainer.classList.remove("contact-us__input-is-invalid");
        emailContainer.classList.remove("contact-us__input-is-invalid");
        nameContainer.classList.remove("contact-us__input-is-invalid");
        messageContainer.classList.remove("contact-us__input-is-invalid");
        return false;
    }

    if(message === "") {
        messageContainer.classList.add("contact-us__input-is-invalid");
        phoneContainer.classList.remove("contact-us__input-is-invalid");
        emailContainer.classList.remove("contact-us__input-is-invalid");
        nameContainer.classList.remove("contact-us__input-is-invalid");
        subjectContainer.classList.remove("contact-us__input-is-invalid");
        return false;
    }

    contactForm.submit();
    contactForm.reset();
}