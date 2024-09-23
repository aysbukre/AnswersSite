import React from 'react';
import { useLocation } from 'react-router-dom';
import seaImage from '../images/bgImages/sea.png';

const Answer = () => {
    const location = useLocation();
    const sentence = location.state?.sentence || "Cümle bulunamadı."; // Default text if no sentence is found

    return (
        <div className="answer" style={{
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            color: 'white',
        }}>
            <h2>{sentence}</h2>
        </div>
    );
};

export default Answer;

