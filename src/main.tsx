import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import App from './App.tsx';
import DeepfakeImageDetector from './components/ui/DeepfakeImageDetector';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
      {/* <DeepfakeImageDetector /> */}
    </BrowserRouter>
  </StrictMode>
);