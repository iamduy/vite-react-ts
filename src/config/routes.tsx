import { lazy } from 'react';

const LazyHome = lazy(() => import('@/layouts/pages/Home'));
const LazyAbout = lazy(() => import('@/layouts/pages/About'));
const LazyLogin = lazy(() => import('@/layouts/pages/Login'));
const LazyAboutDetail = lazy(() => import('@/layouts/pages/AboutDetail'));

export const RouterPaths = {
  home: '/',
  about: '/about',
  login: '/login',
  aboutDetail: '/about/:id',
};

export const PrivateRoutes = [
  RouterPaths.about,
  RouterPaths.aboutDetail,
  RouterPaths.home,
];

export const PublicRoutes = [RouterPaths.login];

export const PrivateRoutesTree = [
  {
    path: RouterPaths.home,
    element: <LazyHome />,
  },
  {
    path: RouterPaths.about,
    element: <LazyAbout />,
  },
  {
    path: RouterPaths.aboutDetail,
    element: <LazyAboutDetail />,
  },
];

export const PublicRoutesTree = [
  {
    path: RouterPaths.login,
    element: <LazyLogin />,
  },
];
