// Function to extract and normalize emails
function extractEmails(text) {
    const emailPatterns = [
        /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g, // Normal email
        /\b[A-Za-z0-9._%+-]+(?:\[AT\]|\[at\])[A-Za-z0-9.-]+\.(?:[DOT]|dot)\b/g, // [AT] or [at] and [DOT] or [dot]
        /\b[A-Za-z0-9._%+-]+(?:@|at)[A-Za-z0-9.-]+\.(?:dot|DOT)\b/g // @ or at and dot or DOT
    ];

    let emails = [];
    emailPatterns.forEach(pattern => {
        const matches = text.match(pattern);
        if (matches) {
            emails = emails.concat(matches);
        }
    });

    // Normalize email patterns
    emails = emails.map(email => email
        .replace(/\[AT\]/gi, '@')
        .replace(/\[dot\]|\[DOT\]/gi, '.')
        .replace(/at/g, '@')
    );

    return [...new Set(emails)]; // Remove duplicates
}

// Listen for messages from popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'scrapeEmails') {
        // Extract emails from the page
        const text = document.body.innerText;
        const emails = extractEmails(text);

        // Send emails back to popup
        sendResponse({ emails });
    }
});
