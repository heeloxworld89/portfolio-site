import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="container">
      <section className="sec" style={{ paddingTop: 40 }}>
        <span className="k">404</span>
        <h1 className="h1">That page doesn’t exist.</h1>
        <p className="lead">It may have moved when the site was reorganised.</p>
        <div className="btns">
          <Link className="btn-x is-p" to="/">Go to the home page</Link>
          <Link className="btn-x" to="/research">The research</Link>
        </div>
      </section>
    </div>
  );
}
