import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ReviewCard from '../components/ReviewCard';
import Typography from '@mui/material/Typography';
import cardsJson from '../../data/cards.json';

export default function Products() {
  // State để lưu danh sách các cards
  const [cards, setCards] = useState([]);

  // Load image from 'images folder'
  const images = import.meta.glob('../assets/images/card[0-9]+.webp', {
    eager: true,
    import: 'default',
  });

  useEffect(() => {
    // Chuyển đổi dữ liệu từ cardsJson và ánh xạ ảnh vào
    const parsedCards = cardsJson.map((item) => ({
      ...item,
      image: images[`../assets/images/${item.image}`], // Lấy ảnh từ glob
    }));

    // Cập nhật state với dữ liệu mới
    setCards(parsedCards);
  }, []);

  return (
    <Box sx={{ pt: '90px' }}>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Box sx={{ px: 2, maxWidth: '1200px', width: '100%' }}>
          <Typography variant="h6" sx={{ fontWeight: 400, textAlign: 'left' }}>
            All Games
          </Typography>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Box sx={{ paddingTop: '20px', px: 2, maxWidth: '1200px' }}>
          <Grid container spacing={2} justifyContent="flex-start">
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
