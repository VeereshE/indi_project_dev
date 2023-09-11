'use client'
import * as React from 'react';
import { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils'; 
import './page.css';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: 'Stella Fantasy',
    rating_review : "5.0 | 1.3k reviews",
    para : "Immerse yourself in the world of Stella fantasy, where you battle enemiea, explore different regions, grow alongside captivating anime-style characters.",
    imgPath:
      'https://res.cloudinary.com/dgvec2ipx/image/upload/v1694155263/image_4_ycnmbb.png',
  },
  {
    label: 'The Fabled',
    rating_review : "5.0 | 1.3k reviews",
    para : "The Fabled is an action-RPG where players overcome tremendous challenges, explore various worlds and collect rare items",
    imgPath:
      'https://res.cloudinary.com/dgvec2ipx/image/upload/v1694156075/Slider_Main_image_2_fulcab.png',
  },
  {
    label: 'Gods Unchained',
    rating_review : "5.0 | 1.3k reviews",
    para : "Gods Unchained is an action-RPG where players overcome tremendous challenges,explore various worlds and collect rare items",
    imgPath:
      'https://res.cloudinary.com/dgvec2ipx/image/upload/v1694156142/Domi_Online_classes_ej5xq1.png',
  },
];


function SwipeableTextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <div className='home_section_container'>
      <Box sx={{ maxWidth: '100%', position: 'relative' }}>
        <Paper square elevation={0} sx={{ position: 'relative', zIndex: 1 }}>
        <Typography
          variant="h5"
          sx={{
            position: 'absolute',
            top: '30%', 
            left: '2%', 
            color: '#ffff',
            padding: '50px',
            paddingTop: "450px",
            lineHeight: "130%",
            fontWeight: "500",
            fontSize: '24.85px',
            fontFamily: 'Poppins',
            textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
            margin: '20px',
            textAlign:'start',
          }}
        >
          {images[activeStep].rating_review}
        </Typography>
        <Typography
          variant="h6"
          sx={{
            position: 'absolute',
            top: '30%', 
            left: '2%', 
            color: 'white',
            padding: '50px',
            paddingTop: "450px",
            margin:'50px',
            textAlign:'start',
            lineHeight: "130%",
            fontWeight: "300",
            fontSize: '16.85px',
            fontFamily: 'Poppins',
            textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
          }}
        >
          {images[activeStep].para}
        </Typography>
        <Typography
          variant="h1"
          sx={{
            position: 'absolute',
            top: '30%', 
            left: '2%', 
            color: 'var(--text-white-100, #FFF)',
            fontWeight: "500",
            fontFamily: "Poppins",
            padding: '50px',
            paddingTop: "400px", 
            fontSize: '63.762px',
            fontStyle: 'normal',
            textAlign:'start',
            lineHeight:'105%',
          }}
        >
          {images[activeStep].label}
        </Typography>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: '100vh',
                  display: 'block',
                  maxWidth: '100%',
                  overflow: 'hidden',
                  width: '100%',
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
        <MobileStepper
           sx={{ backgroundColor: 'rgba(18, 18, 18, 1)' }}
           steps={maxSteps}
            position="static"
           activeStep={activeStep}
           nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button
            size="small"
            onClick={handleBack}
            disabled={activeStep === 0}
            sx={{ backgroundColor: 'rgba(18, 18, 18, 1)' }}
          >
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
          </Button>
        }
      />
    </Box>
    </div>
  );
}

export default SwipeableTextMobileStepper;
