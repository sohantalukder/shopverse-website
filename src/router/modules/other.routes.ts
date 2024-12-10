import NotFound from '../../modules/others/not-found';
import { RouteProps } from '../interface/routeProps.i';
import routeName from '../routeName';

const otherRoutes: RouteProps[] = [
  {
    routeName: routeName.notFound,
    Component: NotFound,
    isAdmin: false,
    isPrivate: false
  }
];

export default otherRoutes;
