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
  CreateResume,
  MyResumes,
  ResumeView,
  UserProfile,
  StepsPage,
} from "./components/index.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home.jsx";
import EditResume from "./components/EditResume.jsx";
import About from "./pages/About.jsx";
import { HelmetProvider } from "react-helmet-async";

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
        path: "/about",
        element: <About />,
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
        path: "/user-profile",
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
        path: "/all-templates",
        element: (
          <AuthLayout authentication>
            <AllTemplates />
          </AuthLayout>
        ),
      },
      {
        path: "/createResume/:templateId",
        element: (
          <AuthLayout authentication>
            <CreateResume />
          </AuthLayout>
        ),
      },
      {
        path: "/editResume/:resumeId",
        element: (
          <AuthLayout authentication>
            <EditResume />
          </AuthLayout>
        ),
      },
      {
        path: "/my-resumes",
        element: (
          <AuthLayout authentication>
            <MyResumes />
          </AuthLayout>
        ),
      },
      {
        path: "/resumeView/:templateId/:resumeId",
        element: (
          <AuthLayout authentication>
            <ResumeView />
          </AuthLayout>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <HelmetProvider> {/* Add HelmetProvider here */}
        <RouterProvider router={router} />
      </HelmetProvider>
    </Provider>
  </React.StrictMode>
);
