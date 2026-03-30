import { createRouter, createRoute, createRootRoute, RouterProvider, Outlet } from '@tanstack/react-router';
import { HomePage } from './pages/Home';
import { AdminPage } from './pages/Admin';
import { I18nProvider } from './hooks/useI18n';

// Setup TanStack Router
const rootRoute = createRootRoute({
  component: () => (
    <I18nProvider>
      <Outlet />
    </I18nProvider>
  )
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage
});

const adminRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/admin',
  component: AdminPage
});

const routeTree = rootRoute.addChildren([indexRoute, adminRoute]);
const router = createRouter({ routeTree });

// Register for type-safe hooks
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
