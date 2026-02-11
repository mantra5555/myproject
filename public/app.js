// app.js
if (window.location.pathname === '/inbox.html') {
  document.addEventListener('DOMContentLoaded', async function() {
    try {
      const response = await fetch('/api/inbox');
      const data = await response.json();
      
      let inboxHTML = '<ul>';
      if (data.length > 0) {
        data.forEach(email => {
          inboxHTML += `<li><strong>From:</strong> ${email.sender} <br> <strong>Subject:</strong> ${email.subject}</li>`;
        });
      } else {
        inboxHTML = '<p>No emails found.</p>';  // Message when no emails are in the inbox
      }
      inboxHTML += '</ul>';
      
      document.getElementById('inbox').innerHTML = inboxHTML;
    } catch (error) {
      console.error('Error loading inbox:', error);
    }
  });
}
