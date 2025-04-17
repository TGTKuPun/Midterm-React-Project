import { useParams } from 'react-router-dom';
import news_detailJson from '../../data/news_detail.json';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Directions } from '@mui/icons-material';
import { Stack } from '@mui/material';

// icons
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';

export default function NewDetail() {
  const { id } = useParams();

  const news_item = news_detailJson.news_detail.find((item) => item.id === id);

  const getEmbedUrl = (url) => {
    if (!url) return '';
    return url.replace('watch?v=', 'embed/');
  };

  return (
    <Box
      sx={{
        pt: '90px',
        maxWidth: '1200px',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: 'auto',
        boxSizing: 'border-box',
      }}
    >
      <Box
        sx={{
          width: '100%',
        }}
      >
        <Typography
          variant="h3"
          sx={{
            color: 'fff',
            textAlign: 'center',
            fontSize: { xs: '1.8rem', sm: '2.5rem', md: '3rem' },
          }}
        >
          {news_item.title}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: 'fff',
            textAlign: 'left',
            p: 2,
          }}
        >
          {news_item.desc_1}
        </Typography>
        <Box
          sx={{
            p: 2,
            maxWidth: '100%',
            height: {
              xs: '300px',
              sm: '420px',
              md: '550px',
            },
            overflow: 'hidden',
          }}
        >
          <iframe
            src={getEmbedUrl(news_item.linkvideo_1)}
            title="Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              width: '100%',
              height: '100%',
            }}
          ></iframe>
        </Box>
        <Typography
          variant="body1"
          sx={{
            color: 'fff',
            textAlign: 'left',
            p: 2,
          }}
        >
          {news_item.desc_2}
        </Typography>
        <Box sx={{ p: 2 }}>
          <img
            src={`/assets/images/${news_item.image_2}`}
            alt=""
            style={{ width: '100%', maxWidth: 'inherit', height: 'auto' }}
          />
        </Box>
        <Stack direction={'column'}>
          <Typography
            variant="body1"
            sx={{
              color: '#FFE656',
              fontWeight: 'bold',
              textAlign: 'left',
              p: 2,
              pb: 0,
            }}
          >
            {news_item.sub_title_1}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              textAlign: 'left',
              p: 2,
            }}
          >
            {news_item.desc_3}
          </Typography>
        </Stack>
        <Box sx={{ p: 2 }}>
          <img
            src={`/assets/images/${news_item.image_3}`}
            alt=""
            style={{ width: '100%', maxWidth: 'inherit', height: 'auto' }}
          />
        </Box>
        <Stack direction={'column'}>
          <Typography
            variant="body1"
            sx={{
              color: '#FFE656',
              fontWeight: 'bold',
              textAlign: 'left',
              p: 2,
              pb: 0,
            }}
          >
            {news_item.sub_title_2}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              textAlign: 'left',
              p: 2,
            }}
          >
            {news_item.desc_4}
          </Typography>
        </Stack>
        <Stack direction={'column'}>
          <Typography
            variant="body1"
            sx={{
              textAlign: 'left',
              p: 2,
              pb: 0,
            }}
          >
            {news_item.follow}
          </Typography>
          <Typography
            variant="body1"
            href={news_item.link_home}
            component={'a'}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              textAlign: 'left',
              p: 2,
              pb: 0,
            }}
          >
            Visit the official site!
          </Typography>
        </Stack>
        <Stack direction={'row'} sx={{ mb: 4 }}>
          <Typography
            variant="body1"
            href={news_item.link_twiter}
            component={'a'}
            target="_blank"
            rel="noopener noreferrer"
            s
            sx={{
              textAlign: 'left',
              p: 2,
              pb: 0,
              pr: 0,
            }}
          >
            <TwitterIcon sx={{ color: '#1DA1F2' }} />
          </Typography>
          <Typography
            variant="body1"
            href={news_item.link_facebook}
            component={'a'}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              textAlign: 'left',
              p: 2,
              pb: 0,
              pr: 0,
            }}
          >
            <FacebookIcon sx={{ color: '#1877F2' }} />
          </Typography>
          <Typography
            variant="body1"
            href={news_item.link_yt}
            component={'a'}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              textAlign: 'left',
              p: 2,
              pb: 0,
              pr: 0,
            }}
          >
            <YouTubeIcon sx={{ color: '#FF0000' }} />
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
}
