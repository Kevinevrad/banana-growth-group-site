import { Outlet, createRootRoute } from "@tanstack/react-router";

import { AppLayout } from "@/components/Layout";

export const Route = createRootRoute({
  component: RootLayout,
});

function RootLayout() {
  return (
    <AppLayout>
      <Outlet />
    </AppLayout>
  );
}
