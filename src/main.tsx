import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider as ReduxProvider } from 'react-redux';

import './index.css'
import App from './App.tsx'
import persistor, { store } from './store';
import { PersistGate } from 'redux-persist/integration/react';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    < ReduxProvider store={store} >
      < PersistGate persistor={persistor} >
        <App />
      </PersistGate >
    </ReduxProvider>
  </StrictMode>,
)
