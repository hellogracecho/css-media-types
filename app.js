// Force month view to have desktop styling, even when printing from mobile breakpoints
window.addEventListener("beforeprint", () => {
    console.log('before print');
    document.querySelector('body').classList.add('style-for-print');
});

window.addEventListener("afterprint", () => {
    console.log('after print');
    document.querySelector('body').classList.remove('style-for-print');
});
