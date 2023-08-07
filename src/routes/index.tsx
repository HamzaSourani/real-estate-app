import React, { lazy, Suspense } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "../App";
import Loading from "@/components/other/loading";
import AuthLayout from "@/components/other/layout/authLayout";
import MainLayout from "@/components/other/layout/mainLayout";
const SignIn = lazy(() => import("@/pages/auth/signIn"));
const SignUp = lazy(() => import("@/pages/auth/signUp"));
const Home = lazy(() => import("@/pages/home"));
const Routes = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App />}>
        <Route path="auth" element={<AuthLayout />}>
          <Route path="sign-in" element={<SignIn />} />
          <Route path="sign-up" element={<SignUp />} />
        </Route>

        <Route path="/" element={<MainLayout />}>
          {" "}
          <Route index element={<Home />} />
          <Route path="villas" element={<div>test</div>} />
          <Route path="test2" element={<div>test2</div>} />
        </Route>
      </Route>
    )
  );
  return (
    <Suspense fallback={<Loading />}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default Routes;
