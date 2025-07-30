
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('.letter-date').forEach(dateEl => {
        dateEl.addEventListener('click', () => {
            const entry = dateEl.closest('.love-entry');
            entry.classList.toggle('open');
        });
    });
});