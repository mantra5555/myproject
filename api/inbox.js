// /api/inbox.js
module.exports = (req, res) => {
  const emails = [
    { sender: 'John Doe', subject: 'Hello there!' },
    { sender: 'Jane Smith', subject: 'Meeting Reminder' },
    { sender: 'David Lee', subject: 'Project Update' }
  ];
  
  res.status(200).json(emails);
};
