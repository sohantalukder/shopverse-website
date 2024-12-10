import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Provider from './provider/Provider.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider />
  </StrictMode>
);
