import { render } from 'react-dom';
import { App } from './app/App';
import 'shared/config/i18n/i18n';
// eslint-disable-next-line import/order
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './app/providers/ThemeProvider';

render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);
