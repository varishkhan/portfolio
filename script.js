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

// 2. EMAIL COPY FUNCTION
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

