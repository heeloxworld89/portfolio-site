import "../public/assets/scss/main.scss";
import "odometer/themes/odometer-theme-default.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { isChunkLoadError, isReloading, recoverFromStaleChunk, untilReload } from "./utils/chunkRecovery";

// If the page chunk fails to load, Vite's preload helper (after our
// vite:preloadError handler) resolves the import to undefined. Wait for the
// recovery reload if one is running; otherwise fail with a readable message
// rather than "Cannot read properties of undefined (reading 'default')".
const PAGE_LOAD_FAILED = "This page could not finish loading. Please reload.";
const HomePage7 = lazy(() =>
  import("./pages/homes/index-07")
    .then((mod) => {
      if (mod) return mod;
      if (isReloading()) return untilReload<never>();
      throw new Error(PAGE_LOAD_FAILED);
    })
    .catch((err) => {
      if (isChunkLoadError(err) && recoverFromStaleChunk(String(err))) return untilReload<never>();
      throw err;
    })
);

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
        fallbackRender={({ error }: { error: unknown }) => (
          <div
            className="d-flex flex-column align-items-center justify-content-center"
            style={{ height: "100vh" }}
          >
            <h2>Something went wrong.</h2>
            <pre style={{ color: "red" }}>{error instanceof Error ? error.message : String(error)}</pre>
            <button
              className="btn btn-primary mt-3"
              onClick={() => window.location.reload()}
            >
              Reload
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
