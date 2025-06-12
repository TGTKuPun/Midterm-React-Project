import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import NewsItem from '../components/NewsItem';

import newsJson from '../../data/news.json'; // JSON data

export default function News() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const parsedNews = newsJson.news.map((item) => ({
      ...item,
      image: `/assets/images/${item.image}`, // sử dụng ảnh từ public
    }));
    setNews(parsedNews);
  }, []);

  return (
    <Box
      sx={{
        maxWidth: '1200px',
        height: '100vh',
        pt: '0px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        mx: 'auto',
      }}
    >
      <Typography
        variant="h6"
        sx={{ fontWeight: 400, textAlign: 'left', ml: '20px', mb: '10px' }}
      >
        All News
      </Typography>
      <Box sx={{ width: '100%', mx: 'auto' }}>
        <Grid container spacing={2}>
          {news.map((item, index) => (
            <Grid item xs={12} key={index}>
              <NewsItem
                id={item.id}
                image={item.image}
                title={item.title}
                subtitle={item.subtitle}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
