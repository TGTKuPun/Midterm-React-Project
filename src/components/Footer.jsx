import { Box } from '@mui/material';
import { Stack } from '@mui/material';
import Typography from '@mui/material/Typography';

// images
import logo from '/assets/images/yostar-icon.png';

export default function Footer() {
  return (
    <>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          p: '60px',
          pt: '40px',
          pb: '20px',
          borderTop: '1px solid black',
        }}
      >
        <Stack direction="row" spacing={2} sx={{ justifyContent: 'center' }}>
          <Typography
            variant="body2"
            sx={{
              fontSize: { xs: '0.7rem', sm: '0.9rem', md: '1rem' },
            }}
          >
            SUPPORT
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontSize: { xs: '0.7rem', sm: '0.9rem', md: '1rem' },
            }}
          >
            ABOUT YOSTAR
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontSize: { xs: '0.7rem', sm: '0.9rem', md: '1rem' },
            }}
          >
            OUR TEAM
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontSize: { xs: '0.7rem', sm: '0.9rem', md: '1rem' },
            }}
          >
            CAREERS
          </Typography>
        </Stack>
        <Stack
          direction="row"
          spacing={2}
          sx={{
            mt: 2,
            color: '#7E7E7F',
            justifyContent: 'center',
          }}
        >
          <Typography
            variant="body2"
            sx={{
              fontSize: { xs: '0.7rem', sm: '0.9rem', md: '1rem' },
            }}
          >
            PRESS
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontSize: { xs: '0.7rem', sm: '0.9rem', md: '1rem' },
            }}
          >
            INVESTOR RELATIONS
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontSize: { xs: '0.7rem', sm: '0.9rem', md: '1rem' },
            }}
          >
            PRIVACY POLICY
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontSize: { xs: '0.7rem', sm: '0.9rem', md: '1rem' },
            }}
          >
            PRIVACY POLICY MATRIX
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontSize: { xs: '0.7rem', sm: '0.9rem', md: '1rem' },
            }}
          >
            LEGAL DOCUMENTATION
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontSize: { xs: '0.7rem', sm: '0.9rem', md: '1rem' },
            }}
          >
            COOKIE POLICY
          </Typography>
        </Stack>
        <Box sx={{ mt: 2 }}>
          <img
            src={logo}
            alt="Logo"
            style={{ width: '120px', objectFit: 'contain' }}
          />
        </Box>
      </Box>
      <Box sx={{ backgroundColor: '#191A1C', p: '20px' }}>
        <Typography
          variant="body2"
          sx={{
            color: '#7E7E7F',
            fontSize: { xs: '0.7rem', sm: '0.9rem', md: '1rem' },
          }}
        >
          © 2025, Yostar Official Store Powered by Shopify
        </Typography>
      </Box>
    </>
  );
}
