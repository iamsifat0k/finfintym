document.getElementById('send-button').addEventListener('click', async () => {
    const userInput = document.getElementById('user-input');
    const message = userInput.value;

    if (message.trim() === '') return;

    // Display user's message
    addMessage(message, 'user');

    // Clear input
    userInput.value = '';

    // Send message to the server
    const response = await fetch('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/chat', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
    });

    const data = await response.json();
    const botMessage = data.choices[0].message.content;

    // Display bot's response
    addMessage(botMessage, 'bot');
});

// Function to add message to chat
function addMessage(message, sender) {
    const chatBox = document.getElementById('chat-box');
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', sender === 'user' ? 'user-message' : 'bot-message');
    messageDiv.textContent = message;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom
}
