import ReactDOM from 'react-dom/client';

import App from './App';
import { ErrorBoundary } from '@components/general/ErrorBoundary';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>,
);
