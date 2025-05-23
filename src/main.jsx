/**
 * @copyright 2025 Rahul Rawat
 * @license Apache-2.0
 */

/**
 * Node Modules
 */
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';


/**
 * Components
 */
import './index.css';

/**
 * CSS link
 */
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
