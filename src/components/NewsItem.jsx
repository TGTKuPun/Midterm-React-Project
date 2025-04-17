import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useNavigate } from 'react-router-dom';

import logo from '/assets/images/logo.png';

export default function New({ id, image, title, subtitle }) {
  const navigate = useNavigate();

  return (
    <Box
      sx={{ width: '100%', p: 2, cursor: 'pointer' }}
      onClick={() => navigate(`/news/${id}`)}
    >
      <Grid container spacing={4} alignItems="flex-start">
        {/* Left */}
        <Grid item xs={4}>
          <img
            src={image}
            alt="image"
            style={{ width: '100%', borderRadius: 5, objectFit: 'cover' }}
          />
        </Grid>

        {/* Right */}
        <Grid item size="grow">
          <Box
            sx={{
              width: '100%',
              maxWidth: '100%',
              textAlign: 'left',
            }}
          >
            <img
              src={logo}
              alt=""
              style={{ marginBottom: '26px', objectFit: 'cover' }}
            />
            {/* Title */}
            <Typography
              variant="h4"
              sx={{
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                fontWeight: 'bold',
                ml: '10px',
              }}
            >
              {title}
            </Typography>

            {/* Subtitile */}
            <Typography variant="body2" sx={{ color: '#FFE656', ml: '10px' }}>
              {subtitle}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
