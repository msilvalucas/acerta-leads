import { createBrowserRouter } from 'react-router-dom';

import RegisterLead from './pages/RegisterLead';
import App from './App';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/register-lead',
    element: <RegisterLead />,
  },
]);
