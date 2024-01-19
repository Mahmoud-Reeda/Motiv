import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./Pages/RootLayout";
import ErrorPage from "./Pages/ErrorPage";
import Loading from "./Components/Loading";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

// import i18n from "./i18n";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import { I18nextProvider } from "react-i18next";

import store from "./Store/index";
import { Provider } from "react-redux";

const Dashboard = React.lazy(() => import("./Pages/Dashboard"));
const Cars = React.lazy(() => import("./Pages/Cars"));

const Energy = React.lazy(() => import("./Pages/DashboardPages/Energy"));
const Range = React.lazy(() => import("./Pages/DashboardPages/Range"));
const BreakFluid = React.lazy(() =>
  import("./Pages/DashboardPages/Break_Fluid")
);
const TireWear = React.lazy(() => import("./Pages/DashboardPages/TireWear"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "dashboard",
        element: <Suspense fallback={<Loading />}>{<Dashboard />}</Suspense>,
        children: [
          {
            path: "/dashboard/energy",
            element: <Suspense fallback={<Loading />}>{<Energy />}</Suspense>,
          },
          {
            path: "/dashboard/range",
            element: <Suspense fallback={<Loading />}>{<Range />}</Suspense>,
          },
          {
            path: "/dashboard/break_fluid",
            element: (
              <Suspense fallback={<Loading />}>{<BreakFluid />}</Suspense>
            ),
          },
          {
            path: "/dashboard/tire_wear",
            element: <Suspense fallback={<Loading />}>{<TireWear />}</Suspense>,
          },
        ],
      },
      {
        path: "cars",
        element: <Suspense fallback={<Loading />}>{<Cars />}</Suspense>,
      },
    ],
  },
]);

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      en: {
        translation: {
          "Welcome to React": "Welcome to React and react-i18next",
        },
      },
      ar: {
        translation: {
          "Welcome to React": "مرحبا بك في motiv",
        },
      },
    },
    lng: "en", // if you're using a language detector, do not define the lng option
    fallbackLng: "en",

    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
  });
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <I18nextProvider i18n={i18n}>
      <RouterProvider router={router} />
    </I18nextProvider>
  </Provider>
);
