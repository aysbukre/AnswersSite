import React from 'react';
import seaImage from '../images/sea.png'

const Answer = () => {


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
            <h1>Bu sorunun cevabı  kalbinde.</h1>

        </div>
    );
};

export default Answer;
