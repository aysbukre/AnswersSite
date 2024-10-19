import React, { useState, useEffect } from 'react';  
const MessagePage = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const storedMessages = JSON.parse(localStorage.getItem('messages')) || [];
    setMessages(storedMessages);
  }, []);
 
  const handleSubmit = (e) => {
    e.preventDefault();
    if (message) {
      const updatedMessages = [...messages, message];
      setMessages(updatedMessages);
      localStorage.setItem('messages', JSON.stringify(updatedMessages));  
      setMessage('');
    }
  };

  return (
    <div style={{
      position: 'relative',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'white',
      textAlign: 'center',
      overflow: 'hidden', 
    }}>
       
      <div style={{
          zIndex: 1,
          padding: '40px',
          background: 'rgba(0, 0, 0, 0.5)',
          borderRadius: '10px',
          width: '90%',  
          maxWidth: '600px',  
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
          overflowY: 'auto',  
          maxHeight: '80vh' 
      }}>
        <h2>Mesaj Kutusu</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Mesajınızı yazın"
            style={{ 
              width: '96%',
              padding: '10px',
              borderRadius: '5px',
              border: '1px solid #ccc',
              marginBottom: '10px',    background: 'rgba(255, 255, 255, 0.2)'
            }}
          />
          <button type="submit" style={{
        padding: '10px 20px',
        fontSize: '18px',
        backgroundColor: '#6F9DAC',
        color: 'black',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontWeight: 'bold',
        marginTop: '20px',
            border: 'none',  
            cursor: 'pointer',
            width: '100%'
          }}>Gönder</button>
        </form>
        <div>
          <h3>Gönderdiğiniz Mesajlar</h3>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {messages.map((msg, index) => (
              <li key={index} style={{
                background: 'rgba(255, 255, 255, 0.2)',
                padding: '10px',
                margin: '5px 0',
                borderRadius: '5px'
              }}>
                {msg}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MessagePage;
