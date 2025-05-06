import React from 'react';
import { Box } from '@mui/material';

const Slide = ({ backgroundImage, altText, titleImage }) => {
  return (
    <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
      {/* Background Image */}
      <img
        src={backgroundImage}
        alt={altText}
        style={{
          width: '100%',
          height: '100vh',
          objectFit: 'cover',
          objectPosition: 'center',
          transition: 'background-image 0.5s ease',
        }}
      />

      {/* Title Image */}
      <Box
        sx={{
          position: 'absolute',
          bottom: '120px',
          left: '0px',
          display: { xs: 'none', sm: 'block' },
        }}
      >
        <img
          src={titleImage}
          alt="Title Image"
          className="fade-in-title"
          style={{
            width: '90%',
            height: 'auto',
            objectFit: 'contain',
          }}
        />
      </Box>

      {/* Responsive Background Image for Mobile */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: { xs: 'block', sm: 'none' },
          height: '100vh',
        }}
      />
    </Box>
  );
};

export default Slide;
