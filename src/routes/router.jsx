import { createBrowserRouter } from 'react-router-dom';
import PrivateRoute from './privateRoutes';
import { AppRoutes } from './paths';
import App from '../pages/layout';
import Home from '../pages/home';
import Register from '../pages/auth/Register/Register';
import Login from '../pages/auth/Login/Login';
import BookAppointment from '../pages/bookNewAppointment';
import Overview from '../pages/account/overview';
import Patient from '../pages/account/patient';
import Schedule from '../pages/account/schedule';
import Department from '../pages/account/teams';
import Reports from '../pages/account/reports';
import Notification from '../pages/account/notification';
import Settings from '../pages/account/settings';
import NotFound from '../pages/error';

export const router = createBrowserRouter([
  {
    path: AppRoutes.home,
    element: <App />,
    children: [
      //public routes
      { index: true, element: <Home /> },
      { path: AppRoutes.login, element: <Login /> },
      { path: AppRoutes.register, element: <Register /> },
      { path: AppRoutes.bookAppointment, element: <BookAppointment /> },
      //private routes
      {path: AppRoutes.overview, element: <PrivateRoute element={Overview} />},
      {path: AppRoutes.patient, element: <PrivateRoute element={Patient} />},
      {path: AppRoutes.schedule, element: <PrivateRoute element={Schedule} />},
      {path: AppRoutes.department, element: <PrivateRoute element={Department} />},
      {path: AppRoutes.reports, element: <PrivateRoute element={Reports} />},
      {path: AppRoutes.notification, element: <PrivateRoute element={Notification} />},
      {path: AppRoutes.settings, element: <PrivateRoute element={Settings} />},
      //404 route
      { path: AppRoutes.notFound, element: <NotFound /> },
    ],
  },
]);
