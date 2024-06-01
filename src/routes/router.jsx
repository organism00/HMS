import { createBrowserRouter } from 'react-router-dom';
import PrivateRoute from './privateRoutes';
import { AppRoutes } from './paths';
import App from '../pages/layout';
import Home from '../pages/home';
import Login from '../pages/auth/Login';
import Register from '../pages/auth/Register';
import AppointmentBooking from '../pages/AppointmentBooking';



export const router = createBrowserRouter([
  {
    path: AppRoutes.home,
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: AppRoutes.login, element: <Login /> },
      { path: AppRoutes.register, element: <Register /> },
      {
        path: AppRoutes.appointmentBooking,
        element: <PrivateRoute element={AppointmentBooking} />,
      },
    ],
  },
]);
