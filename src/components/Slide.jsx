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
    </Box>
  );
};

export default Slide;
