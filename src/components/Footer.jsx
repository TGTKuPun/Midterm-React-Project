import { Box } from '@mui/material';
import { Stack } from '@mui/material';
import Typography from '@mui/material/Typography';

// images
import logo from '../assets/images/yostar-icon.png';

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
        <Stack direction="row" spacing={2}>
          <Typography variant="body2">SUPPORT</Typography>
          <Typography variant="body2">ABOUT YOSTAR</Typography>
          <Typography variant="body2">OUR TEAM</Typography>
          <Typography variant="body2">CAREERS</Typography>
        </Stack>
        <Stack direction="row" spacing={2} sx={{ mt: 2, color: '#7E7E7F' }}>
          <Typography variant="body2">PRESS</Typography>
          <Typography variant="body2">INVESTOR RELATIONS</Typography>
          <Typography variant="body2">PRIVACY POLICY</Typography>
          <Typography variant="body2">PRIVACY POLICY MATRIX</Typography>
          <Typography variant="body2">LEGAL DOCUMENTATION</Typography>
          <Typography variant="body2">COOKIE POLICY</Typography>
        </Stack>
        <Box sx={{ mt: 2 }}>
          <img
            src={logo}
            alt=""
            style={{ width: '120px', objectFit: 'contain' }}
          />
        </Box>
      </Box>
      <Box sx={{ backgroundColor: '#191A1C', p: '20px' }}>
        <Typography variant="body2" sx={{ color: '#7E7E7F' }}>
          © 2025, Yostar Official Store Powered by Shopify
        </Typography>
      </Box>
    </>
  );
}
