import React from 'react';
import { Box, Container, Typography, styled } from '@mui/material';

const clients = [
  { 
    id: 3, 
    logo: 'https://nuakguavjmrbsrynnyhd.supabase.co/storage/v1/object/sign/Our%20Clients/mmfsl.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV80MDhmNWRlNy0yZjU2LTQ4MjQtYjlhMi0zYTJiMzM3MDViMjYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJPdXIgQ2xpZW50cy9tbWZzbC5wbmciLCJpYXQiOjE3NTk2MDIxMzQsImV4cCI6MjA3NDk2MjEzNH0.QIRfQwd_RAyXOrh2y4NYVoJ20dh40CpkiLQCWTEVWgQ',
    alt: 'MMFSL'
  },
  { 
    id: 1, 
    logo: 'https://nuakguavjmrbsrynnyhd.supabase.co/storage/v1/object/sign/Our%20Clients/accenture.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV80MDhmNWRlNy0yZjU2LTQ4MjQtYjlhMi0zYTJiMzM3MDViMjYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJPdXIgQ2xpZW50cy9hY2NlbnR1cmUuanBnIiwiaWF0IjoxNzU5NjAyMTAwLCJleHAiOjIwNzQ5NjIxMDB9.P_a2RFpWwLmnwquLZFXdCao8qAFJEiyCVXXtHPpP8dY',
    alt: 'Accenture'
  },
  { 
    id: 7, 
    logo: 'https://nuakguavjmrbsrynnyhd.supabase.co/storage/v1/object/sign/Our%20Clients/practise-questions.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV80MDhmNWRlNy0yZjU2LTQ4MjQtYjlhMi0zYTJiMzM3MDViMjYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJPdXIgQ2xpZW50cy9wcmFjdGlzZS1xdWVzdGlvbnMucG5nIiwiaWF0IjoxNzU5NjAyNDExLCJleHAiOjIwNzQ5NjI0MTF9.xbRBYLudMN1RQN17YtUBY8Ix21N6vBcaNUkS1SAfjk4',
    alt: 'Practice Questions'
  },
  { 
    id: 5, 
    logo: 'https://nuakguavjmrbsrynnyhd.supabase.co/storage/v1/object/sign/Our%20Clients/Screenshot%202025-10-04%20at%2011.58.40%20PM.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV80MDhmNWRlNy0yZjU2LTQ4MjQtYjlhMi0zYTJiMzM3MDViMjYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJPdXIgQ2xpZW50cy9TY3JlZW5zaG90IDIwMjUtMTAtMDQgYXQgMTEuNTguNDAgUE0ucG5nIiwiaWF0IjoxNzU5NjAyNTQyLCJleHAiOjIwNzQ5NjI1NDJ9.Of3VuQsd0OCr1QdFiQK13J4I64Xi-IOIWxLnLkz4ZKY',
    alt: 'Client Logo'
  },
  { 
    id: 4, 
    logo: 'https://nuakguavjmrbsrynnyhd.supabase.co/storage/v1/object/sign/Our%20Clients/pandora.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV80MDhmNWRlNy0yZjU2LTQ4MjQtYjlhMi0zYTJiMzM3MDViMjYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJPdXIgQ2xpZW50cy9wYW5kb3JhLnBuZyIsImlhdCI6MTc1OTYwMjE0NiwiZXhwIjoyMDc0OTYyMTQ2fQ.hsLTDOaIuyYP6axL-I2IDvnLPx86mz5PgmDup5OD0Vc',
    alt: 'Pandora'
  },
  { 
    id: 8, 
    logo: 'https://nuakguavjmrbsrynnyhd.supabase.co/storage/v1/object/sign/Our%20Clients/saasify.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV80MDhmNWRlNy0yZjU2LTQ4MjQtYjlhMi0zYTJiMzM3MDViMjYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJPdXIgQ2xpZW50cy9zYWFzaWZ5LnBuZyIsImlhdCI6MTc1OTYwMjQyMiwiZXhwIjoyMDc0OTYyNDIyfQ.MByZpIH5gkm2SK9oPuSc-7nuQYTpgVJ_bXjU4mXsH4o',
    alt: 'SaaSify'
  },
  { 
    id: 2, 
    logo: 'https://nuakguavjmrbsrynnyhd.supabase.co/storage/v1/object/sign/Our%20Clients/infosys.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV80MDhmNWRlNy0yZjU2LTQ4MjQtYjlhMi0zYTJiMzM3MDViMjYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJPdXIgQ2xpZW50cy9pbmZvc3lzLmpwZyIsImlhdCI6MTc1OTYwMjEyNCwiZXhwIjoyMDc0OTYyMTI0fQ.yy7RGw7Zvyrc_H0T3CCc6YMhbUHxu3HhX3vD3L61NOI',
    alt: 'Infosys'
  },
  { 
    id: 6, 
    logo: 'https://nuakguavjmrbsrynnyhd.supabase.co/storage/v1/object/sign/Our%20Clients/looping.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV80MDhmNWRlNy0yZjU2LTQ4MjQtYjlhMi0zYTJiMzM3MDViMjYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJPdXIgQ2xpZW50cy9sb29waW5nLnBuZyIsImlhdCI6MTc1OTYwMjM5MCwiZXhwIjoyMDc0OTYyMzkwfQ.Vkmxj001Hi5BV1oF-PE96kJMR4kP0YHmyhn4JiZeMfk',
    alt: 'Looping'
  },
];

const ClientsContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(6, 0),
  backgroundColor: theme.palette.background.paper,
}));

const ScrollContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  overflowX: 'auto',
  scrollbarWidth: 'none', // For Firefox
  '&::-webkit-scrollbar': {
    display: 'none', // For Chrome, Safari, and Opera
  },
  gap: '0.75rem',
  padding: '1rem 0',
  scrollSnapType: 'x mandatory',
  margin: '0 -1rem',
  '& > *': {
    scrollSnapAlign: 'center',
    flex: '0 0 auto',
  },
  [theme.breakpoints.down('md')]: {
    gap: '0.5rem',
    padding: '0.75rem 0',
  },
}));

const ClientLogo = styled(Box)(({ theme }) => ({
  minWidth: '240px',
  height: '120px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(1),
  transition: 'transform 0.2s ease-in-out',
  '&:hover': {
    transform: 'scale(1.03)',
  },
  [theme.breakpoints.down('md')]: {
    minWidth: '240px',
    height: '120px',
    padding: theme.spacing(2),
  },
  '& img': {
    maxWidth: '100%',
    maxHeight: '100%',
    objectFit: 'contain',
    opacity: 1,
  },
}));

const Clients = () => {
  return (
    <ClientsContainer id="clients">
      <Container maxWidth="lg">
        <Typography variant="h4" component="h2" align="center" gutterBottom>
          Our Clients
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" paragraph>
          Trusted by leading companies worldwide
        </Typography>
        <ScrollContainer>
          {clients.map((client) => (
            <ClientLogo key={client.id}>
              <img 
                src={client.logo} 
                alt={client.alt} 
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                loading="lazy"
              />
            </ClientLogo>
          ))}
        </ScrollContainer>
      </Container>
    </ClientsContainer>
  );
};

export default Clients;
