import { Link } from "react-router-dom";
import SiteLayout from "../SiteLayout";
import { articles, pages } from "../data";

/* /articles: every article, newest first. To publish a new one, add its page
   entry and article entry in data.ts, its route in App.tsx and its prerender
   entry in scripts/prerender.mjs. */

const Arrow = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
    <path d="M3 9L9 3M4 3h5v5" fill="none" stroke="currentColor" strokeWidth="1.3" />
  </svg>
);

export default function ArticlesPage() {
  return (
    <SiteLayout>
      <section className="rx-page-head">
        <div className="rx-field is-hero" aria-hidden="true" />
        <div className="rx-wrap" style={{ position: "relative" }}>
          <h1>Articles</h1>
          <p>Research notes by Rokib Al Dhin Raadh.</p>
        </div>
      </section>

      <section className="rx-sec" id="articles" aria-label="All articles">
        <div className="rx-wrap">
          <div className="rx-rows">
            {articles.map((a) => {
              const meta = pages[a.path];
              return (
                <article className="rx-row" key={a.path}>
                  <div className="rx-row-date">
                    <time dateTime={a.date}>{a.dateLabel}</time>
                    <span>{a.minutes} min read</span>
                  </div>
                  <div>
                    <h2><Link to={a.path}>{meta.title}</Link></h2>
                    <p>{meta.description}</p>
                  </div>
                  <Link className="rx-row-go" to={a.path} aria-label={meta.title}><Arrow /></Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
