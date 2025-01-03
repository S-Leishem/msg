document.getElementById('submitButton').addEventListener('click', function() {
    const nameInput = document.getElementById('nameInput').value.trim();
    const messageElement = document.getElementById('message');

    if (nameInput.toLowerCase() === 'leishem') {
        messageElement.textContent = 'You are the owner, welcome!';
        messageElement.style.color = '#28a745'; // Green for owner
    } else if (nameInput.toLowerCase() === 'nicky') {
        messageElement.textContent = 'You are gay.';
        messageElement.style.color = '#dc3545'; // Red for gay
    } else if (nameInput.toLowerCase() === 'thoithoi') {
        messageElement.textContent = 'You are a human being.';
        messageElement.style.color = '#007bff'; // Blue for human
    } else if (nameInput) {
        // Randomly choose between the two messages
        const randomMessage = Math.random() < 0.5 ? 'You are gay.' : 'You are a human being.';
        messageElement.textContent = randomMessage;
        messageElement.style.color = randomMessage === 'You are gay.' ? '#dc3545' : '#007bff'; // Set color based on message
    } else {
        messageElement.textContent = '';
    }
});
