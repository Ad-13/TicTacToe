import ReactDOM from 'react-dom/client';

import App from './App';
import { ErrorBoundary } from '@components/general/ErrorBoundary';

import './assets/styles/index.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>,
);
