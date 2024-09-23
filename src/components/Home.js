import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css'; 
import backgroundVideo from '../images/videos/sea1.mp4';

const Home = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/cardPage');
    };

    return (

        <div>
            
        <div className="homepage" style={{
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
            <p style={{ fontStyle: 'italic', fontSize: 22, margin: '10px 0' }}>
                Enerjinizi en iyi yansıttığını düşündüğünüz kartı seçiniz.
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
        </div>

    );
};

export default Home;
