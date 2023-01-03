import { createBrowserRouter } from 'react-router-dom';
import App, { loader } from './App';
import ErrorPage from './error-page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    loader,
  },
]);

export default router;
