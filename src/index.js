import React from 'react';
import { createRoot } from 'react-dom/client'; // Use destructuring to import createRoot directly
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Directly use createRoot and render in a more concise manner
const container = document.getElementById('root'); // Obtain the root container element
const root = createRoot(container); // Create a root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Comment explaining the purpose and usage of reportWebVitals
// This function is for measuring and logging performance metrics of the app.
// For more info on usage and additional configuration, visit https://bit.ly/CRA-vitals
reportWebVitals();
