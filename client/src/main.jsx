import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store/store.js";
import {
  SignUp,
  Login,
  AuthLayout,
  AllTemplates,
  InputForm,
  MyResumes,
  ResumeView,
  UserProfile,
  StepsPage,
} from "./components/index.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: (
          <AuthLayout authentication={false}>
            <Login />
          </AuthLayout>
        ),
      },
      {
        path: "/signup",
        element: (
          <AuthLayout authentication={false}>
            <SignUp />
          </AuthLayout>
        ),
      },
      {
        path: "/userProfile",
        element: (
          <AuthLayout authentication>
            <UserProfile />
          </AuthLayout>
        ),
      },
      {
        path: "/steps",
        element: (
          <AuthLayout authentication>
            <StepsPage />
          </AuthLayout>
        ),
      },
      {
        path: "/allTemplates",
        element: (
          <AuthLayout authentication>
            <AllTemplates />
          </AuthLayout>
        ),
      },
      {
        path: "/inputForm",
        element: (
          <AuthLayout authentication>
            <InputForm />
          </AuthLayout>
        ),
      },
      {
        path: "/myResumes",
        element: (
          <AuthLayout authentication>
            <MyResumes />
          </AuthLayout>
        ),
      },
      {
        path: "/resumeView/:resumeId",
        element: (
          <AuthLayout authentication>
            <ResumeView />
          </AuthLayout>
        ),
      },
    ],
  },
]);

// createRoutesFromElements(
//   <Route path="/" element={<Layout />}>
//     <Route path="/" element={<App />} />
//     <Route path="/signup" element={<SignUp />} />
//     <Route path="/login" element={<Login />} />
//   </Route>
// )

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
