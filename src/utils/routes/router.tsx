import { createBrowserRouter } from "react-router-dom";
// import { ProtectedRoutes } from "@utils/routes/protected-routes";

import { RootLayout } from "@pages/Root";
import { HomePage } from "@pages/Home";
import { SignInPage } from "@pages/SignIn";
import { SignUpPage } from "@pages/SignUp";

export const router = createBrowserRouter([
  {
    path: "/aprendi/",
    element: <RootLayout />,
    // errorElement: <ErrorPage/>,
    children: [
      { index: true, element: <HomePage /> },
      { path: "signin", element: <SignInPage /> },
      { path: "signup", element: <SignUpPage /> },
      {
        // element: <ProtectedRoutes/>,
        // children: [
        //     {
        //         path: '',
        //         element:
        //     }
        // ]
      },
    ],
  },
]);
