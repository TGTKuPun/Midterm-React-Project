import React from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // thêm useNavigate
import product_detailJson from '../../data/products_detail.json';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Container, Chip, Stack } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import StarIcon from '@mui/icons-material/Star';

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate(); // khởi tạo điều hướng

  const product_item = product_detailJson.products.find(
    (item) => item.id === id,
  );

  if (!product_item) {
    return (
      <Box sx={{ padding: '20px' }}>
        <Typography variant="h4" color="error">
          Product not found
        </Typography>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        pt: '345px',
        maxWidth: '1200px',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: 'auto',
        boxSizing: 'border-box',
      }}
    >
      <Box>
        <Container sx={{ position: 'relative' }}>
          <Avatar
            src={`/assets/images/${product_item.image}`}
            alt={product_item.title}
            sx={{
              width: 220,
              height: 'auto',
              borderRadius: 2,
              border: '4px solid white',
              position: 'absolute',
              objectFit: 'cover',
              bottom: -50,
              left: -90,
            }}
            variant="square"
          />
        </Container>
      </Box>

      <Container sx={{ mt: 8 }}>
        {/* Title and Info */}
        <Typography variant="h4" fontWeight="bold">
          {product_item.title}
        </Typography>
        <Typography variant="body2" color="#FFD700">
          NEXON Company
        </Typography>
        <Typography variant="caption" color="#858595">
          In-app purchases
        </Typography>

        {/* Stats */}
        <Stack
          direction="row"
          spacing={4}
          divider={<Divider flexItem />}
          sx={{ mt: 2 }}
        >
          <Box textAlign="center">
            <Typography
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 0.5,
              }}
            >
              <StarIcon fontSize="small" sx={{ color: '#FFD700' }} />
              {product_item.rating}
            </Typography>
            <Typography variant="caption" color="#858595">
              {product_item.reviews} reviews
            </Typography>
          </Box>

          <Box textAlign="center">
            <Typography>{product_item.downloads}</Typography>
            <Typography variant="caption" color="#858595">
              Downloads
            </Typography>
          </Box>

          <Box textAlign="center">
            <Typography>{product_item.age}</Typography>
            <Typography variant="caption" color="#858595">
              Rated for
            </Typography>
          </Box>
        </Stack>

        {/* Tags */}
        <Stack direction="row" spacing={1} sx={{ mt: 2, flexWrap: 'wrap' }}>
          {product_item.tags?.map((tag, index) => (
            <Chip
              key={index}
              label={tag}
              variant="outlined"
              sx={{ backgroundColor: '#000', color: '#fff' }}
            />
          ))}
        </Stack>

        {/* Description */}
        <Typography
          variant="h6"
          sx={{ mt: 3, textAlign: 'left', fontWeight: 'bold' }}
        >
          <strong>About this game</strong>
        </Typography>
        <Typography sx={{ mt: 3, textAlign: 'left', color: '#858595' }}>
          <strong>{product_item.desc.part1}</strong>
        </Typography>
        <Typography sx={{ mt: 1, textAlign: 'left', color: '#858595' }}>
          {product_item.desc.part2}
        </Typography>
        <Typography sx={{ mt: 1, textAlign: 'left', color: '#858595' }}>
          {product_item.desc.part3}
        </Typography>

        {/* Download */}
        <Box textAlign="start" sx={{ mt: 2 }}>
          <Button
            variant="contained"
            size="large"
            sx={{ backgroundColor: '#000' }}
          >
            Download
          </Button>
        </Box>

        {/* Go Back */}
        <Button
          variant="outlined"
          onClick={() => navigate(-1)}
          sx={{ mb: 2, color: '#FFD700', border: '1px solid #FFD700', ps: 2 }}
        >
          ← Go Back
        </Button>
      </Container>
    </Box>
  );
}

export default ProductDetail;
