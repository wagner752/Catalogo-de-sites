// Simple animation for fun
document.querySelectorAll('.link-button').forEach(button => {
    button.addEventListener('mouseenter', function () {
        this.style.transform = 'translate(-2px, -2px)';
        this.style.boxShadow = '12px 12px 0px rgba(0, 0, 0, 0.3)';
    });

    button.addEventListener('mouseleave', function () {
        this.style.transform = '';
        this.style.boxShadow = '8px 8px 0px rgba(0, 0, 0, 0.3)';
    });
});