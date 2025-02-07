document.addEventListener("DOMContentLoaded", function () {
    const chatBody = document.getElementById("chat-body");
    const chatInput = document.getElementById("chat-input");
    const sendBtn = document.getElementById("send-btn");
    const quickButtons = document.querySelectorAll(".quick-btn");

    sendBtn.addEventListener("click", sendMessage);
    chatInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") sendMessage();
    });

    quickButtons.forEach(button => {
        button.addEventListener("click", function () {
            sendQuickMessage(this.innerText);
        });
    });

    function sendMessage() {
        const userMessage = chatInput.value.trim();
        if (userMessage === "") return;

        appendMessage("You", userMessage);
        chatInput.value = "";

        fetchNykaaResponse(userMessage);
    }

    function sendQuickMessage(message) {
        appendMessage("You", message);
        fetchNykaaResponse(message);
    }

    function appendMessage(sender, message) {
        const messageElement = document.createElement("p");
        messageElement.classList.add(sender === "You" ? "user-message" : "bot-message");
        messageElement.textContent = `${sender}: ${message}`;
        chatBody.appendChild(messageElement);
        chatBody.scrollTop = chatBody.scrollHeight;
    }

    function fetchNykaaResponse(userMessage) {
        const responses = {
            "hii": "Hello! How can I assist you today?",
            "hello": "Hi there! What can I help you with?",
            "hey": "Hey! Need help with something?",
            "payment related concerns": "For payment issues, visit the Nykaa Payment Help Center.",
            "check nykaa policies": "You can read Nykaa's return and refund policies on our website.",
            "manage my account": "To manage your account, go to 'My Profile' in the Nykaa app or website.",
            "track my order": "Please provide your order ID, and I’ll check the status for you.",
            "best skincare products": "Nykaa offers top skincare brands like The Ordinary, Cetaphil, and Minimalist.",
            "best lipstick": "Nykaa has a wide range of lipsticks, including brands like Maybelline, MAC, and Lakme.",
            "offers and discounts": "Nykaa regularly offers discounts. Check the 'Offers' section on our website!",
            "customer support": "You can contact Nykaa customer support at support@nykaa.com.",
            "check nykaa policies": "You can read Nykaa's return and refund policies on our website.",
            "manage my account": "To manage your account, go to 'My Profile' in the Nykaa app or website.",
            "track my order": "Please provide your order ID, and I’ll check the status for you.",
            "best skincare products": "Nykaa offers top skincare brands like The Ordinary, Cetaphil, and Minimalist.",
            "best lipstick": "Nykaa has a wide range of lipsticks, including brands like Maybelline, MAC, and Lakme."
        };

        const userQuery = userMessage.toLowerCase();
        let botResponse = responses[userQuery] || "I'm not sure about that. Please visit Nykaa's official site for more details.";

        setTimeout(() => {
            appendMessage("Bot", botResponse);
        }, 500);
    }
});
