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
import useAuthorization from "@/hooks/useAuthorization";
import NAVIGATION from "@/constants/navigation";
const SignIn = lazy(() => import("@/pages/auth/signIn"));
const SignUp = lazy(() => import("@/pages/auth/signUp"));
const Home = lazy(() => import("@/pages/home"));
const Forbidden = lazy(() => import("@/pages/forbidden"));
const Profile = lazy(() => import("@/pages/profile"));
const AddEditProperty = lazy(() => import("@/pages/addEditProperty"));
const Properties = lazy(() => import("@/pages/properties"));
const Routes = () => {
  const isAuthorized = useAuthorization();
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
          <Route path="properties/:propertyType" element={<Properties />} />
          <Route
            path={NAVIGATION.MAIN_PAGES.PROFILE}
            element={isAuthorized ? <Profile /> : <Forbidden />}
          />
          <Route
            path="add-property"
            element={isAuthorized ? <AddEditProperty /> : <Forbidden />}
          />
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
