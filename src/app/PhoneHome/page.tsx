'use client'
import * as React from 'react';
import { ThemeProvider, createTheme, useMediaQuery,useTheme  } from '@mui/material';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';


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
      <div className='home_section_container_1'>
          <Box sx={{ maxWidth: 1000, flexGrow: 1 }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 50,
        }}
      >
        <Typography>{images[activeStep].label}</Typography>
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
                  height: 255,
                  display: 'block',
                  maxWidth: 2000,
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
          <Button size="small" 
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

function App() {
  const theme = createTheme(); 
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); 

  return (
    <ThemeProvider theme={theme}>
      <div className={isMobile ? 'mobile-only' : 'hidden-on-mobile'}>
        {isMobile && <SwipeableTextMobileStepper />}
      </div>
    </ThemeProvider>
  );
}

export default App;
