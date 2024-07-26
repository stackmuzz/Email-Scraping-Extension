document.getElementById('check-emails').addEventListener('click', () => {
  chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
      chrome.tabs.sendMessage(tabs[0].id, { action: 'scrapeEmails' }, response => {
          const emails = response.emails || [];
          const emailList = emails.map(email => `<li>${email}</li>`).join('');
          document.getElementById('email-list').innerHTML = `<ul>${emailList}</ul>`;
      });
  });
});
