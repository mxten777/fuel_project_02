
import App from './App'
import { ThemeProvider } from './components/ThemeProvider';
import './index.css'
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
