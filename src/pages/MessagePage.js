import React, { useState, useEffect } from 'react'; 
import backgroundVideo from '../images/videos/sea1.mp4';

const MessagePage = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  // Local storage'dan mesajları yükle
  useEffect(() => {
    const storedMessages = JSON.parse(localStorage.getItem('messages')) || [];
    setMessages(storedMessages);
  }, []);

  // Mesaj gönderimi
  const handleSubmit = (e) => {
    e.preventDefault();
    if (message) {
      const updatedMessages = [...messages, message];
      setMessages(updatedMessages);
      localStorage.setItem('messages', JSON.stringify(updatedMessages)); // Local storage'a kaydet
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
      overflow: 'hidden', // Taşmayı engelle
    }}>
      <video style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: -1,
      }} loop muted autoPlay>
        <source src={backgroundVideo} type="video/mp4" />
        <source src={backgroundVideo} type="video/ogg" />
        Your browser does not support the video tag.
      </video>
      <div style={{
          zIndex: 1,
          padding: '40px',
          background: 'rgba(0, 0, 0, 0.5)',
          borderRadius: '10px',
          width: '90%', // Genişliği %90 yap
          maxWidth: '600px', // Maksimum genişliği 600px
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
          overflowY: 'auto', // Taşan içeriği kaydır
          maxHeight: '80vh' // Yüksekliği sınırlayın
      }}>
        <h2>Mesaj Kutusu</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Mesajınızı yazın"
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '5px',
              border: '1px solid #ccc',
              marginBottom: '10px'
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
          <h3>Gönderilen Mesajlar:</h3>
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
