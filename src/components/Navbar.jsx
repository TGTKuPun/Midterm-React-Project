import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import logo from '../assets/images/yostar-icon.png';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [activeItem, setActiveItem] = useState('Home');

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const navigate = useNavigate();

  const handleItemClick = (item) => {
    setActiveItem(item);
    handleCloseMenu();

    const path = (() => {
      switch (item) {
        case 'Home':
          return '/';
        case 'About':
          return '/about';
        case 'Products':
          return '/products';
        case 'News':
          return '/news';
        case 'Join':
          return '/join';
        default:
          return '/';
      }
    })();
    navigate(path);
  };

  const menuItems = ['Home', 'About', 'Products', 'News', 'Join'];

  return (
    <AppBar position="fixed" sx={{ backgroundColor: '#000000' }}>
      <Toolbar sx={{ height: '50px' }}>
        <Box
          sx={{
            width: '100%',
            maxWidth: '100%',
            px: '20px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          {/* Logo */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <img
              src={logo}
              alt="Logo"
              style={{
                maxHeight: '35px',
                objectFit: 'contain',
              }}
            />
          </Box>

          {/* Menu */}
          {isMobile ? (
            <>
              <IconButton color="inherit" onClick={handleMenuClick}>
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleCloseMenu}
                PaperProps={{ sx: { width: 200, backgroundColor: '#000000' } }}
              >
                {menuItems.map((item, index) => (
                  <MenuItem
                    key={index}
                    onClick={() => handleItemClick(item)}
                    disableRipple
                    sx={{
                      borderBottom:
                        activeItem === item ? '2px solid #FFE656' : 'none',
                      color: activeItem === item ? '#ffffff' : '#848383',
                      '&:hover': {
                        borderBottom: '2px solid #FFE656',
                        backgroundColor: 'transparent',
                        color: '#ffffff',
                      },
                      outline: 'none',
                      transition: 'border-bottom 0.2s ease, color 0.2s ease',
                    }}
                  >
                    {item}
                  </MenuItem>
                ))}
              </Menu>
            </>
          ) : (
            <Box sx={{ display: 'flex', gap: 2 }}>
              {menuItems.map((item, index) => (
                <Button
                  key={index}
                  onClick={() => handleItemClick(item)}
                  disableRipple
                  sx={{
                    borderRadius: 0,
                    borderBottom:
                      activeItem === item
                        ? '2px solid #FFE656'
                        : '2px solid transparent',
                    color: activeItem === item ? '#ffffff' : '#848383',
                    '&:hover': {
                      borderBottom: '2px solid #FFE656',
                      backgroundColor: 'transparent',
                      color: '#ffffff',
                    },
                    outline: 'none',
                    transition: 'border-bottom 0.2s ease, color 0.2s ease',
                  }}
                >
                  <Typography
                    variant="button"
                    sx={{
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      maxWidth: '150px',
                    }}
                  >
                    {item}
                  </Typography>
                </Button>
              ))}
            </Box>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
