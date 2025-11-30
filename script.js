// 1. SCROLL REVEAL ANIMATION
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 100;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}
window.addEventListener("scroll", reveal);
reveal();

// 2. EMAIL COPY FUNCTION
function copyEmail(btn) {
    [cite_start]// [cite: 3]
    const email = "varishkhan2002@gmail.com";
    
    // Try to copy to clipboard
    navigator.clipboard.writeText(email).then(() => {
        // Success feedback
        const originalText = btn.innerText;
        btn.innerText = "✅ Email Copied!";
        
        // Reset text after 2 seconds
        setTimeout(() => {
            btn.innerText = originalText;
        }, 2000);
    }).catch(err => {
        // Fallback: Just open mailto if copy fails
        window.location.href = "mailto:" + email;
    });
}