import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "./pages/Home.page";
import Layout from "@/components/layout/Layout";
import PrivacyPolicyPage from "@/pages/PrivacyPolicyPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <HomePage />
      </Layout>
    ),
  },
  {
    path: "/return-app-privacy",
    element: (
      <Layout>
        <PrivacyPolicyPage />
      </Layout>
    ),
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
