import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
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

export default function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const navigate = useNavigate();
  const location = useLocation();

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleItemClick = (item) => {
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

  // Tạo hàm lấy route tương ứng với item
  const getPathFromItem = (item) => {
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
  };

  const currentPath = location.pathname;

  return (
    <AppBar position="fixed" sx={{ backgroundColor: '#000000' }}>
      <Toolbar sx={{ height: '60px' }}>
        <Box
          sx={{
            width: '100%',
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
                        currentPath === getPathFromItem(item)
                          ? '2px solid #FFE656'
                          : 'none',
                      color:
                        currentPath === getPathFromItem(item)
                          ? '#ffffff'
                          : '#848383',
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
                      currentPath === getPathFromItem(item)
                        ? '2px solid #FFE656'
                        : '2px solid transparent',
                    color:
                      currentPath === getPathFromItem(item)
                        ? '#ffffff'
                        : '#848383',
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
