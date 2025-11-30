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
// This handles the footer link. The Hire/WhatsApp buttons use standard links now.
function copyEmail(btn) {
    const email = "varishkhan2002@gmail.com";
    
    // Modern Copy
    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(email).then(() => {
            alert("Email copied to clipboard: " + email);
        });
    } else {
        // Fallback for older browsers
        window.location.href = "mailto:" + email;
    }
}
