document.addEventListener('DOMContentLoaded', () => {
    const toggleButtons = document.querySelectorAll('.toggle-button');
    const formContainers = document.querySelectorAll('.form-container');

    toggleButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons and containers
            toggleButtons.forEach(btn => btn.classList.remove('active'));
            formContainers.forEach(container => container.classList.remove('active'));

            // Add active class to clicked button
            button.classList.add('active');

            // Show corresponding form container
            const formType = button.dataset.form;
            document.getElementById(`${formType}-container`).classList.add('active');
        });
    });
}); 