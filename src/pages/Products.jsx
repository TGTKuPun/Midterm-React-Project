import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ReviewCard from '../components/ReviewCard';
import cardsJson from '../../data/cards.json';

export default function Products() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const parsedCards = cardsJson.map((item) => ({
      ...item,
      image: `/assets/images/${item.image}`, // Dùng ảnh từ public folder
    }));
    setCards(parsedCards);
  }, []);

  return (
    <Box sx={{ pt: '110px' }}>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Box sx={{ px: 2, maxWidth: '1200px', width: '100%' }}>
          <Typography variant="h6" sx={{ fontWeight: 400, textAlign: 'left' }}>
            All Games
          </Typography>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Box sx={{ paddingTop: '20px', px: 2, maxWidth: '1200px' }}>
          <Grid
            container
            spacing={2}
            sx={{
              justifyContent: {
                xs: 'center',
                md: 'flex-start',
              },
            }}
          >
            {cards.map((card) => (
              <Grid item xs={12} sm={6} md={3} key={card.name}>
                <ReviewCard
                  image={card.image}
                  title={card.name}
                  genre={card.genre}
                  link={card.link}
                  price={card.price}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
