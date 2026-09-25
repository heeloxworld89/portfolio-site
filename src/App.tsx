import "../public/assets/scss/main.scss";
import "./styles/site.scss";
import { Route, Routes } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import SiteLayout from "./components/layout/SiteLayout";
import Home from "./pages/Home";
import Research from "./pages/Research";
import Recognition from "./pages/Recognition";
import Work from "./pages/Work";
import About from "./pages/About";
import Press from "./pages/Press";
import NotFound from "./pages/NotFound";

function Fallback() {
  return (
    <div className="container" style={{ padding: "120px 0", textAlign: "center" }}>
      <h1 className="h2">Something went wrong loading this page.</h1>
      <p className="p">Please refresh. If it keeps happening, email raadxbusiness9@gmail.com.</p>
    </div>
  );
}

export default function App() {
  return (
    <SiteLayout>
      <ErrorBoundary FallbackComponent={Fallback}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/research" element={<Research />} />
          <Route path="/recognition" element={<Recognition />} />
          <Route path="/work" element={<Work />} />
          <Route path="/about" element={<About />} />
          <Route path="/press" element={<Press />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ErrorBoundary>
    </SiteLayout>
  );
}
