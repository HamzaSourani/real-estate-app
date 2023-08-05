import React, { lazy, Suspense } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "../App";
import Loading from "@/components/other/loading";

const Routes = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App />}>
        <Route path="/login" element={<></>} />

        <Route path="/" element={<></>}>
          {" "}
          <Route index element={<></>} />
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
