import * as React from 'react';
import { Card, CardMedia, Typography, Box, Button } from '@mui/material';
import AppleIcon from '@mui/icons-material/Apple';
import AndroidIcon from '@mui/icons-material/Android';
import '../css/ReviewCard.css';

export default function ReviewCard({ image, title, genre, link, price }) {
  return (
    <Box sx={{ width: 220, overflow: 'hidden' }}>
      {/* Card */}
      <Card className="review-card">
        <Box sx={{ position: 'relative' }}>
          {/* Image */}
          <CardMedia
            component="img"
            image={image}
            alt={title}
            className="review-card__image"
          />

          {/* Overlay phủ xám nhạt */}
          <Box className="review-card__overlay" />

          {/* Button Learn More */}
          <Box className="review-card__action">
            <Button
              variant="contained"
              target="_blank"
              rel="noopener noreferrer"
              href={link}
              sx={{
                width: '100%',
                backgroundColor: 'inherit',
                border: '1px solid #fff',
                color: '#fff',
                boxShadow: 'none',
                textTransform: 'none',
                paddingY: '8px',
                '&:hover': {
                  backgroundColor: 'inherit',
                  boxShadow: 'none',
                  color: '#fff !important',
                },
              }}
            >
              MORE DETAIL
            </Button>
          </Box>
        </Box>
      </Card>

      {/* Content of Image */}
      <Box sx={{ p: 2, pl: 1, textAlign: 'left' }}>
        <Typography gutterBottom variant="subtitle1" component="div">
          {title}
        </Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Typography variant="body1" sx={{ color: '#838A8B' }}>
            {genre}
          </Typography>
          <Box sx={{ display: 'flex', gap: 0.5 }}>
            <AppleIcon fontSize="small" sx={{ color: '#838A8B' }} />
            <AndroidIcon fontSize="small" sx={{ color: '#838A8B' }} />
          </Box>
        </Box>
        <Box sx={{ pt: 1 }}>
          <Typography gutterBottom variant="body1" component="div">
            {price}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
