import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css';
import backgroundImage from '../images/wallpaper.png';

const Home = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/secondPage');
    };

    return (
        <div className="homepage" style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            color: 'white',
        }}>
            <p style={{ fontStyle: 'italic', fontWeight: 'bold', margin: '10px 0' }}>
                Bu sitede tüm sorularınızın cevabını bulabilirsiniz.
            </p>
            <p style={{ fontStyle: 'italic', margin: '10px 0' }}>
                Soracağınız soruya on-on beş saniye boyunca yoğunlaşın.
            </p>
            <p style={{ fontStyle: 'italic', margin: '10px 0' }}>
                Sorularınız açık ve net olmalıdır.
            </p>

            <button onClick={handleClick} style={{
                padding: '10px 20px',
                fontSize: '18px',
                backgroundColor: '#6F9DAC',
                color: 'black',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                fontWeight: 'bold',
                marginTop: '20px',
            }}>
                Hazırım
            </button>
        </div>
    );
};

export default Home;
