import "../public/assets/scss/main.scss";
import "odometer/themes/odometer-theme-default.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

// Only loading index-07
const HomePage7 = lazy(() => import("./pages/homes/index-07"));

import ScrollTopBehaviour from "./components/common/ScrollToTopBehaviour";
import GlobaleffectProvider from "./components/common/GlobaleffectProvider";
import { ModalUIProvider } from "./context/ModalUIContext";

function App() {
  return (
    <>
      <ToastContainer
        position="bottom-left"
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <ErrorBoundary
        fallbackRender={({ error, resetErrorBoundary }: { error: any; resetErrorBoundary: () => void }) => (
          <div
            className="d-flex flex-column align-items-center justify-content-center"
            style={{ height: "100vh" }}
          >
            <h2>Something went wrong.</h2>
            <pre style={{ color: "red" }}>{error.message}</pre>
            <button
              className="btn btn-primary mt-3"
              onClick={resetErrorBoundary}
            >
              Try again
            </button>
          </div>
        )}
      >
        <Suspense
          fallback={
            <div
              className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center bg-black"
              style={{ zIndex: 1050 }}
            >
              <div
                className="spinner-border text-primary"
                role="status"
                style={{ width: "3rem", height: "3rem" }}
              >
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          }
        >
          <ModalUIProvider>
            <Routes>
              <Route path="/">
                <Route index element={<HomePage7 />} />
              </Route>
            </Routes>
          </ModalUIProvider>
        </Suspense>

        <ScrollTopBehaviour />
        <GlobaleffectProvider />
      </ErrorBoundary>
    </>
  );
}

export default App;
