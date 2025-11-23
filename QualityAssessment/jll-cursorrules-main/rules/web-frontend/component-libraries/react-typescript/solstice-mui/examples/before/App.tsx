// Before: Basic MUI App with simple component
import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import ContactForm from './components/ContactForm';

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ContactForm />
    </ThemeProvider>
  );
}

export default App;
