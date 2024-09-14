import React from 'react';
import { useLocation } from 'react-router-dom';
import backgroundVideo from '../images/videos/sea1.mp4';


const AnswerPage = () => {
    const location = useLocation();
    const sentence = location.state?.sentence || "Cümle bulunamadı."; // Default text if no sentence is found

    return (
        
        <div className="answerPage" style={{
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
        <video id="background-video" loop muted autoPlay>
                <source src={backgroundVideo} type="video/mp4" />
                <source src={backgroundVideo} type="video/ogg" />
                Your browser does not support the video tag.
            </video>    
            <h3 style={{ zIndex: 1, position: 'relative' }}>{sentence}</h3>
        </div>
    );
};

export default AnswerPage;
