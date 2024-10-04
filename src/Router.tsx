import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "./pages/Home.page";
import Layout from "@/components/layout/Layout";
import SubFeaturePage from "./pages/SubFeature.page";
import TrackingView from "./pages/features/TrackingView";
import Retourverwerking from "./pages/features/Retourverwerking";
import Voorgestelde from "./pages/features/Voorgestelde";
import Orderverwerking from "./pages/features/Orderverwerking";
import CasehubAndKlantvragen from "./pages/features/CasehubAndKlantvragen";
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
  {
    path: "/features",
    children: [
      {
        path: "voorgestelde-acties",
        element: (
          <Layout>
            <Voorgestelde />
          </Layout>
        ),
      },
      {
        path: "orderverwerking",
        element: (
          <Layout>
            <Orderverwerking />
          </Layout>
        ),
      },
      {
        path: "tracking-view",
        element: (
          <Layout>
            <TrackingView />
          </Layout>
        ),
      },
      {
        path: "retourverwerking-and-scan-app",
        element: (
          <Layout>
            <Retourverwerking />
          </Layout>
        ),
      },
      {
        path: "casehub-and-klantvragen",
        element: (
          <Layout>
            <CasehubAndKlantvragen />
          </Layout>
        ),
      },
      {
        path: "facturatie",
        element: (
          <Layout>
            <SubFeaturePage />
          </Layout>
        ),
      },
    ],
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
