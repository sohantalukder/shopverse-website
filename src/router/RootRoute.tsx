import { Route, Routes } from 'react-router-dom';
import authRoutes from './modules/auth.routes';
import otherRoutes from './modules/other.routes';
import { RouteProps } from './interface/routeProps.i';

const RootRoute = () => {
  return (
    <Routes>
      {/* auth routes */}
      {authRoutes.map((route: RouteProps) => {
        const { routeName, Component } = route;
        return <Route key={routeName} path={routeName} element={<Component />} />;
      })}
      {/* other routes */}
      {otherRoutes.map((route: RouteProps) => {
        const { routeName, Component } = route;
        return <Route key={routeName} path={routeName} element={<Component />} />;
      })}
    </Routes>
  );
};

export default RootRoute;
