import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import New from '../components/New';
import Typography from '@mui/material/Typography';

import newsJson from '../../data/news.json'; // json data

export default function News() {
  const images = import.meta.glob('../assets/images/new[0-9]+.png', {
    eager: true,
    import: 'default',
  });

  const [news, setNews] = useState([]);

  useEffect(() => {
    const parsedNews = newsJson.news.map((item) => ({
      ...item,
      image: images[`../assets/images/${item.image}`],
    }));
    setNews(parsedNews);
  }, []);

  return (
    <>
      <Box
        sx={{
          width: '1200px',
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
        <Box
          sx={{
            width: '100%',
            mx: 'auto',
          }}
        >
          <Grid container>
            {news.map((item, index) => (
              <Grid item xs={12} key={index}>
                <New
                  image={item.image}
                  title={item.title}
                  subtitle={item.subtitle}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </>
  );
}
