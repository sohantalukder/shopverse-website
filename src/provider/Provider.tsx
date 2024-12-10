import { ThemeProvider } from '@emotion/react';
import { BrowserRouter } from 'react-router-dom';
import theme from '../assets/theme/theme';
import { CssBaseline } from '@mui/material';
import RootRoute from '../router/RootRoute';

const Provider = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RootRoute />
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default Provider;
