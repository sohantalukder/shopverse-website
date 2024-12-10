import React from 'react';
import routeName from '../routeName';

interface RouteProps {
  routeName: routeName;
  Component: React.FC;
  isAdmin?: boolean;
  isPrivate?: boolean;
}

export type { RouteProps };
