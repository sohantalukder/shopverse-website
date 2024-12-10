import ForgotPassword from '../../modules/auth/forgot-password';
import Login from '../../modules/auth/login';
import OTP from '../../modules/auth/otp';
import SignUp from '../../modules/auth/signup';
import { RouteProps } from '../interface/routeProps.i';
import routeName from '../routeName';

const authRoutes: RouteProps[] = [
  {
    routeName: routeName.login,
    Component: Login,
    isAdmin: false,
    isPrivate: false
  },
  {
    routeName: routeName.signUp,
    Component: SignUp,
    isAdmin: false,
    isPrivate: false
  },
  {
    routeName: routeName.forgotPassword,
    Component: ForgotPassword,
    isAdmin: false,
    isPrivate: false
  },
  {
    routeName: routeName.otp,
    Component: OTP,
    isAdmin: false,
    isPrivate: true
  }
];

export default authRoutes;
