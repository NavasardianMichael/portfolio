import { StrictMode } from 'react';
import { MobileMenuProvider } from 'Providers/MobileMenu';
import { AppThemeProvider } from 'Providers/Theme';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  <StrictMode>
    <AppThemeProvider>
      <MobileMenuProvider>
        <App />
      </MobileMenuProvider>
    </AppThemeProvider>
  </StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
