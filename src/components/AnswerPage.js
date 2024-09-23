import React from 'react';
import { useLocation } from 'react-router-dom';
import backgroundVideo from '../images/videos/sea1.mp4';
import sentences from '../sentences.js'; 
import VideoButton from './VideoButton.js';
import { useNavigate } from 'react-router-dom';

const AnswerPage = () => {
    
    const navigate = useNavigate();
    const location = useLocation(); 
    const randomSentence = location.state?.sentences || sentences[Math.floor(Math.random() * sentences.length)];
     
    return (
        <div className="answer" style={{
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
     
            <h3 style={{ zIndex: 1, position: 'relative' }}>{randomSentence}</h3>

            <VideoButton/>
            

        </div>
    );
};

export default AnswerPage;
