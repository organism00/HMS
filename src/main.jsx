import React from 'react';
import ReactDOM from 'react-dom/client';
import { router } from './routes/router';
import { RouterProvider } from 'react-router-dom';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import './index.css';
import { AuthProvider } from './context/AuthContext.jsx';

const colors = {
  brand: {
    50: '#EDF9FF',
    100: '#A1C7F0',
    200: '#2C82DD',
    300: '#014377',
    400: '#DB353A',
    800: '#1a202c',
    900: '#f6f6f6',
  },
};

const theme = extendTheme({ colors });

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider
      theme={theme}
      toastOptions={{ defaultOptions: { position: 'top-right' } }}
    >
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </ChakraProvider>
  </React.StrictMode>
);
