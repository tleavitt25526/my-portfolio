import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'; // Ensure you're using 'react-dom/client' for React 18
import App from './App.jsx'; // Ensure the path is correct and matches your project structure
import './index.css'; // Import your CSS (tailwind or other styles)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
