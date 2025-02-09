document.addEventListener("DOMContentLoaded", function () {
    const paymentForm = document.getElementById("payment-form");
    const cardName = document.getElementById("card-name");
    const cardNumber = document.getElementById("card-number");
    const expiryDate = document.getElementById("expiry-date");
    const cvv = document.getElementById("cvv");

    // Function to show error message
    const showError = (input, message) => {
        const errorMessage = input.nextElementSibling;
        errorMessage.textContent = message;
    };

    // Function to clear all error messages
    const clearErrors = () => {
        document.querySelectorAll(".error-message").forEach((error) => {
            error.textContent = "";
        });
    };

    // Function to validate form
    const validateForm = () => {
        clearErrors();
        let isValid = true;

        // Cardholder Name Validation
        if (cardName.value.trim() === "") {
            showError(cardName, "Cardholder name is required.");
            isValid = false;
        }

        // Card Number Validation
        if (!/^\d{16}$/.test(cardNumber.value.trim())) {
            showError(cardNumber, "Enter a valid 16-digit card number.");
            isValid = false;
        }

        // Expiry Date Validation
        if (!/^\d{2}\/\d{2}$/.test(expiryDate.value.trim())) {
            showError(expiryDate, "Enter expiry date in MM/YY format.");
            isValid = false;
        }

        // CVV Validation
        if (!/^\d{3}$/.test(cvv.value.trim())) {
            showError(cvv, "CVV must be 3 digits.");
            isValid = false;
        }

        return isValid;
    };

    // Handle Payment Form Submission
    paymentForm.addEventListener("submit", (e) => {
        e.preventDefault();

        if (validateForm()) {
            alert("Payment Successful! Thank you for shopping.");
            window.location.href = "../index.html"; // Redirect to confirmation page
        } else {
            alert("Please fill in all required fields correctly.");
        }
    });
});
