import React, { useEffect, useState } from 'react';
import seaImage from '../images/bgImages/sea.png';
import { styled } from '@mui/material/styles';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { numberArray } from '../numberUtils';
import { sentences } from '../sentences';

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

const Image = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
}));

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

const ImageMarked = styled('span')(({ theme }) => ({
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
}));

function SecondPage() {
    const navigate = useNavigate();
    const [shuffledImages, setShuffledImages] = useState([]);

    useEffect(() => {
        const shuffled = shuffleArray([...numberArray]);
        setShuffledImages(shuffled.slice(0, 3)); // Shuffle and take only the first 3 images
    }, []);

    const handleClick = () => {
        // Randomly select a sentence
        const randomSentence = sentences[Math.floor(Math.random() * sentences.length)];
        navigate('/answer', { state: { sentence: randomSentence } });
    };

    return (
        <div className='secondpage' style={{
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
                        {/*<Image>
                            <Typography
                                component="span"
                                //variant="subtitle1"
                                color="inherit"
                                sx={{
                                    position: 'relative',
                                    p: 4,
                                    pt: 2,
                                    pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                                }}
                            >
                                <ImageMarked className="MuiImageMarked-root" />
                            </Typography>
                        </Image>*/}
                    </ImageButton>
                ))}
            </Box>
        </div>
    );
}

export default SecondPage;
