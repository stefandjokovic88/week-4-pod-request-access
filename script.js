document.addEventListener("DOMContentLoaded", () => {

    const emailField = document.getElementById("emailField");
    const btn = document.getElementById("button");
    const response = document.getElementById("response");

    btn.addEventListener("click", function () {
    const email = emailField.value;
    if (validateEmail(email)) {
        response.innerHTML = "Your email is valid";
        response.style.color = "#54E6AF";
    } else {
        response.innerHTML = "Oops! Please check your email";
        response.style.color = "#FB3E3E";
    }
    });

    function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
    }

});