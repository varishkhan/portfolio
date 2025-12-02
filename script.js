// 1. SCROLL REVEAL ANIMATION
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) {
            reveals[i].classList.add("active");
        }
    }
}
window.addEventListener("scroll", reveal);
reveal();

// 2. TYPEWRITER EFFECT
const textElement = document.querySelector(".typing-text");
const texts = ["Scalable Java Backends.", "Intelligent AI Models.", "Future-Ready Software."]; 
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
    if (count === texts.length) {
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);
    
    textElement.textContent = letter;
    
    if (letter.length === currentText.length) {
        count++;
        index = 0;
        setTimeout(type, 2000);
    } else {
        setTimeout(type, 100);
    }
})();

// 3. EMAIL COPY FUNCTION (RESTORED AS REQUESTED)
function copyEmail(btn) {
    const email = "varishkhan2002@gmail.com"; // Source: 3
    
    // Try Modern Method first
    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(email).then(() => {
            // Success! Change text temporarily
            const originalText = btn.innerText;
            btn.innerText = "✅ Email Copied!";
            setTimeout(() => {
                btn.innerText = originalText;
            }, 2000);
        }).catch(err => {
            // If blocked, fallback to prompt
            prompt("Copy this email:", email);
        });
    } else {
        // Fallback for older browsers
        prompt("Copy this email:", email);
    }
}
