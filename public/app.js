// app.js
document.getElementById('load-inbox').addEventListener('click', async function() {
  try {
    const response = await fetch('/api/inbox');  // Fetches the inbox from the serverless function
    const data = await response.json();
    
    let inboxHTML = '<ul>';
    data.forEach(email => {
      inboxHTML += `<li><strong>From:</strong> ${email.sender} <br> <strong>Subject:</strong> ${email.subject}</li>`;
    });
    inboxHTML += '</ul>';
    
    document.getElementById('inbox').innerHTML = inboxHTML;
  } catch (error) {
    console.error('Error loading inbox:', error);
  }
});
