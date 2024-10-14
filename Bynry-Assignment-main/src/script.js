document.querySelectorAll('.summary-button').forEach(button => {
    button.addEventListener('click', () => {
        const summaryContainer = document.querySelector('.summary-container');
        summaryContainer.style.display = 'block'; // Show the summary
        summaryContainer.innerHTML = 'Summary Content Here'; // Replace with actual summary content
        document.querySelector('.profile-container').style.display = 'none'; // Hide profile cards
    });
});
