import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

// write functional test for app.js

test('renders App', () => {
  render(
    <BrowserRouter initialEntries={['/']}>
      <App />
    </BrowserRouter>
  );
});

