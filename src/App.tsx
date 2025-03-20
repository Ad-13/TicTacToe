import { BrowserRouter } from 'react-router-dom';
import { AppProviders } from '@providers/AppProviders';
import { AppRoutes } from '@routes/AppRoutes';

const App: React.FC = () => {
  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <AppProviders>
        <AppRoutes />
      </AppProviders>
    </BrowserRouter>
  );
};

export default App;
