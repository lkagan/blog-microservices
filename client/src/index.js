import { createRoot } from 'react-dom/client';
import App from './App.js'
import { AppContextProvider } from "./appContext";

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<AppContextProvider><App /></AppContextProvider>);