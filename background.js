chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'scrapeEmails') {
        fetch(`http://localhost:8080/proxy?url=${encodeURIComponent(message.url)}`)
            .then(response => response.text())
            .then(data => {
                // Extract emails using regex (basic example)
                const emails = data.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g) || [];
                sendResponse({ emails: emails });
            })
            .catch(error => sendResponse({ error: error.message }));
        return true; // Indicate async response
    }
});
