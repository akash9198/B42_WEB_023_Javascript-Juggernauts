document.addEventListener("DOMContentLoaded", function () {
    const checkoutForm = document.getElementById("checkout-form");
    const fullName = document.getElementById("full-name");
    const email = document.getElementById("email");
    const mobile = document.getElementById("mobile");
    const address = document.getElementById("address");
    const city = document.getElementById("city");
    const state = document.getElementById("state");
    const zip = document.getElementById("zip");

    // Function to show error message
    const showError = (input, message) => {
        const errorMessage = input.nextElementSibling;
        errorMessage.textContent = message;
        input.style.borderColor = "#e63946";
    };

    // Function to clear all error messages
    const clearErrors = () => {
        document.querySelectorAll(".error-message").forEach((error) => {
            error.textContent = "";
        });
        document.querySelectorAll("input").forEach((input) => {
            input.style.borderColor = "#ddd";
        });
    };

    // Function to validate form
    const validateForm = () => {
        clearErrors();
        let isValid = true;

        // Full Name Validation
        if (fullName.value.trim() === "") {
            showError(fullName, "Full name is required.");
            isValid = false;
        }

        // Email Validation
        if (email.value.trim() === "") {
            showError(email, "Email is required.");
            isValid = false;
        } else if (!email.value.includes("@")) {
            showError(email, "Enter a valid email.");
            isValid = false;
        }

        // Mobile Number Validation (10 Digits)
        if (mobile.value.trim() === "") {
            showError(mobile, "Mobile number is required.");
            isValid = false;
        } else if (!/^\d{10}$/.test(mobile.value.trim())) {
            showError(mobile, "Enter a valid 10-digit mobile number.");
            isValid = false;
        }

        // Address Validation
        if (address.value.trim() === "") {
            showError(address, "Address is required.");
            isValid = false;
        }

        // City Validation
        if (city.value.trim() === "") {
            showError(city, "City is required.");
            isValid = false;
        }

        // State Validation
        if (state.value.trim() === "") {
            showError(state, "State is required.");
            isValid = false;
        }

        // Zip Code Validation (6 Digits)
        if (zip.value.trim() === "") {
            showError(zip, "Zip code is required.");
            isValid = false;
        } else if (!/^\d{6}$/.test(zip.value.trim())) {
            showError(zip, "Zip code must be 6 digits.");
            isValid = false;
        }

        return isValid;
    };

    // Handle Checkout Form Submission
    checkoutForm.addEventListener("submit", (e) => {
        e.preventDefault();

        if (validateForm()) {
            alert("Checkout successful! Redirecting to payment...");
            window.location.href = "payment.html";
        } else {
            alert("Please fill in all required fields correctly.");
        }
    });
});
