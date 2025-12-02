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
const texts = ["Robust Java Systems.", "Generative AI Models.", "Scalable Software."];
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
        setTimeout(type, 2000); // Wait 2 seconds before next word
    } else {
        setTimeout(type, 100); // Speed of typing
    }
})();


// 3. EMAIL COPY FUNCTION
// This is used for the footer link
function copyEmail(btn) {
    const email = "varishkhan2002@gmail.com";
    
    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(email).then(() => {
            const originalText = btn.innerText;
            btn.innerText = "✅ Email Copied!";
            setTimeout(() => {
                btn.innerText = originalText;
            }, 2000);
        }).catch(err => {
            prompt("Copy this email:", email);
        });
    } else {
        prompt("Copy this email:", email);
    }
}


