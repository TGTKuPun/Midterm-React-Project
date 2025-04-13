// images
import about_title from '../assets/images/about-en-title.png';
import about_bg from '../assets/images/about.png';
import about_bg_mobile from '../assets/images/about-phone.png';

// Material-UI
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

export default function About() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Kiểm tra màn hình nhỏ hơn 'sm'

  return (
    <Box
      sx={{
        width: '100%',
        minHeight: '100vh',
        pt: '60px',
        backgroundColor: '#fff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxSizing: 'border-box',
      }}
    >
      <Container maxWidth="xl">
        <Grid
          container
          spacing={4}
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'stretch',
          }}
        >
          {/* Cột bên trái chứa nội dung văn bản */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                margin: 'auto',
                px: 4,
              }}
            >
              {/* Title */}
              <Box display="flex" justifyContent="flex-start" mb={4}>
                <img
                  src={about_title}
                  alt="About Title"
                  style={{ width: '240px' }}
                />
              </Box>
              <Box
                sx={{
                  flexGrow: 1,
                  overflowY: 'auto',
                  pr: 1,
                  pl: 6,
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: '0.9rem',
                    lineHeight: 2,
                    textAlign: 'justify',
                    color: '#000',
                  }}
                >
                  Yostar Games has been a pioneer in game development,
                  publishing, investment, and
                  <br />
                  intellectual property management since its foundation in 2014.
                  <br />
                  Together with our offices in Seoul, Korea, and Tokyo, Japan,
                  we have brought to
                  <br />
                  players around the globe multiple renowned products including{' '}
                  <i>Azur Lane</i>,
                  <br />
                  <i>Arknights</i>, and <i>Blue Archive</i>. To create varied
                  experiences for our fans, we have
                  <br />
                  also expanded our business into the animation industry and
                  established studio Y
                  <br />
                  Pictures and studio Arcus, offering more engaging content
                  outside our games.
                  <br />
                  We are motivated to maintain the current momentum in the
                  future and provide our
                  <br />
                  high-quality service and innovative gaming experiences to
                  players worldwide.
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* Cột bên phải chứa ảnh */}
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                width: '80%',
                height: '100%',
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'center',
                margin: 'auto',
              }}
            >
              <img
                src={isMobile ? about_bg_mobile : about_bg}
                alt="About Background"
                style={{
                  width: '100%',
                  height: 'auto',
                  maxHeight: '100%',
                  objectFit: 'contain',
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
