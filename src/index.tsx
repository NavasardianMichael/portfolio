import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { MobileMenuProvider } from 'Providers/MobileMenu';
import { AppThemeProvider } from 'Providers/Theme';
import App from './App';
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <StrictMode>
    <AppThemeProvider>
      {/* <LocaleProvider> */}
        <MobileMenuProvider>
          <App />
        </MobileMenuProvider>
      {/* </LocaleProvider> */}
    </AppThemeProvider>
  </StrictMode>,
);
