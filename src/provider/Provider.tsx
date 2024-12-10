import { ThemeProvider } from '@emotion/react';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';
import theme from '../assets/theme/theme';
import { CssBaseline } from '@mui/material';

const Provider = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default Provider;
