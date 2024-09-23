import React from 'react';
import backgroundVideo from '../images/videos/sea2.mp4';

const VideoButton = () => {
    return (
        <div style={{
            position: 'relative',
            display: 'inline-block',
            overflow: 'hidden',
            borderRadius: '5px',
        }}>
            <video
                src={backgroundVideo}
                autoPlay
                loop
                muted
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    zIndex: -1,
                }}
            />
            <button style={{
                position: 'absolute', // Değişiklik burada
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                padding: '10px 20px',
                backgroundColor: 'rgba(0, 0, 0, 0.5)', // Yarı saydam arka plan
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                fontSize: '16px',
                zIndex: 1,
                position: 'relative'
            }}>
                Daha fazla cevap için çimen ablaya dfsdgsdfgdsfg
            </button>
        </div>
    );
};

export default VideoButton;
