import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import ButtonBase from '@mui/material/ButtonBase';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { numberArray } from '../utils/numberUtils'; 

const shuffleArray = (array) => {
    let currentIndex = array.length, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
};

const ImageButton = styled(ButtonBase)(({ theme }) => ({
    position: 'relative',
    height: 500,
    margin: '10px',
    [theme.breakpoints.down('sm')]: {
        width: '100% !important',
        height: 100,
    },
    '&:hover, &.Mui-focusVisible': {
        zIndex: 1,
        '& .MuiImageBackdrop-root': {
            opacity: 0.15,
        },
        '& .MuiImageMarked-root': {
            opacity: 0,
        },
        '& .MuiTypography-root': {
            border: '4px solid currentColor',
        },
    },
}));

const ImageSrc = styled('span')({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
});

const ImageBackdrop = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
}));

function NumberPage() {
    const navigate = useNavigate();
    const [shuffledImages, setShuffledImages] = useState([]);

    useEffect(() => {
        const shuffled = shuffleArray([...numberArray]);
        setShuffledImages(shuffled.slice(0, 3)); 
    }, []);

    const handleClick = () => {
        navigate('/colorPage');
    }; 

    return (
        <div className='colorPage' style={{
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
            <div  style={{ position: 'relative', bottom: '-10px' }}>
            <p style={{ fontStyle: 'italic', fontWeight: 'bold', margin: '10px 0' }}>
                HATIRLATMA  
            </p>
            <p style={{ fontStyle: 'italic', fontWeight: 'bold', margin: '10px 0' }}>
            Enerjinizi en iyi yansıttığını düşündüğünüz kartı seçiniz.
            </p></div>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '60%', height: '88%' }}>
                {shuffledImages.map((image) => (
                    <ImageButton onClick={handleClick}
                        focusRipple
                        key={image.title}
                        style={{
                            width: image.width,
                        }}
                    >
                        <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
                        <ImageBackdrop className="MuiImageBackdrop-root" /> 
                    </ImageButton>
                ))}
            </Box>
        </div>
    );
}

export default NumberPage;
