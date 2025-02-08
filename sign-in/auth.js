// Selecting elements
const loginBox = document.getElementById("login-box");
const signupBox = document.getElementById("signup-box");
const showSignup = document.getElementById("show-signup");
const showLogin = document.getElementById("show-login");

const signupForm = document.getElementById("signup-form");
const loginForm = document.getElementById("login-form");

const signupPassword = document.getElementById("signup-password");
const loginPassword = document.getElementById("login-password");

const toggleSignupPassword = document.getElementById("toggle-signup-password");
const toggleLoginPassword = document.getElementById("toggle-login-password");

const logoutBtn = document.getElementById("logout-btn");

// Function to show/hide password
const togglePassword = (inputField, toggleButton) => {
    if (inputField.type === "password") {
        inputField.type = "text";
        toggleButton.innerHTML = "🙈"; // Change to hide icon
    } else {
        inputField.type = "password";
        toggleButton.innerHTML = "👁️"; // Change to show icon
    }
};

// Prevent form submission when clicking password toggle
toggleSignupPassword?.addEventListener("click", (e) => {
    e.preventDefault();
    togglePassword(signupPassword, toggleSignupPassword);
});

toggleLoginPassword?.addEventListener("click", (e) => {
    e.preventDefault();
    togglePassword(loginPassword, toggleLoginPassword);
});

// Ensure password fields are editable
const enablePasswordFields = () => {
    signupPassword.removeAttribute("disabled");
    loginPassword.removeAttribute("disabled");
    signupPassword.value = ""; // Clear previous input
    loginPassword.value = "";  // Clear previous input
};

// Show Signup Form & Hide Login Form
showSignup?.addEventListener("click", (e) => {
    e.preventDefault();
    loginBox.style.display = "none";
    signupBox.style.display = "block";
    signupForm.reset();
    enablePasswordFields();
});

// Show Login Form & Hide Signup Form
showLogin?.addEventListener("click", (e) => {
    e.preventDefault();
    signupBox.style.display = "none";
    loginBox.style.display = "block";
    loginForm.reset();
    enablePasswordFields();
});

// Handle Signup Form Submission
signupForm?.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("signup-name").value.trim();
    const email = document.getElementById("signup-email").value.trim();
    const password = signupPassword.value.trim();

    if (!name || !email || !password) {
        alert("Please fill in all fields.");
        return;
    }

    if (!email.includes("@")) {
        alert("Please enter a valid email.");
        return;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters.");
        return;
    }

    const hashedPassword = btoa(password); // Base64 encoding

    localStorage.setItem("user", JSON.stringify({ name, email, password: hashedPassword }));
    alert("Signup successful! You can now log in.");

    signupBox.style.display = "none";
    loginBox.style.display = "block";
    signupForm.reset();
    enablePasswordFields();
});

// Handle Login Form Submission
loginForm?.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("login-email").value.trim();
    const password = loginPassword.value.trim();
    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (!savedUser) {
        alert("No account found. Please sign up.");
        return;
    }

    if (email !== savedUser.email || btoa(password) !== savedUser.password) {
        alert("Invalid email or password.");
        loginForm.reset();
        enablePasswordFields();
        return;
    }

    localStorage.setItem("isLoggedIn", "true");
    alert("Login successful!");
    window.location.href = "../index.html";
});

// Auto Redirect if Logged In
if (localStorage.getItem("isLoggedIn") === "true" && window.location.pathname.includes("login.html")) {
    window.location.href = "../index.html";
}

// Logout Functionality
logoutBtn?.addEventListener("click", () => {
    localStorage.removeItem("isLoggedIn");
    alert("Logged out successfully!");
    window.location.href = "login.html";
});
