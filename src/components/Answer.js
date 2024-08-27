import React from 'react';
import { useLocation } from 'react-router-dom';
import seaImage from '../images/sea.png';

const Answer = () => {
    const location = useLocation();
    const sentence = location.state?.sentence || "Cümle bulunamadı."; // Default text if no sentence is found

    return (
        <div className="answer" style={{
            backgroundImage: `url(${seaImage})`,
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
            <h1>{sentence}</h1>
        </div>
    );
};

export default Answer;
