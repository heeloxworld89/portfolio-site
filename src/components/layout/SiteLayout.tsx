import { useEffect, type ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import MobileNav from './MobileNav';
import Footer from './Footer';
import { metaFor } from '@/data/routes';

/** Keeps the tab title in step with client-side navigation. The full head is written at build time. */
function useTitle() {
  const { pathname } = useLocation();
  useEffect(() => {
    document.title = metaFor(pathname === '' ? '/' : pathname.replace(/\/$/, '') || '/').title;
  }, [pathname]);
}

/** On route change, go to the top — or to the #anchor when the link names one. */
function useScrollOnNavigate() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView();
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
}

export default function SiteLayout({ children }: { children: ReactNode }) {
  useTitle();
  useScrollOnNavigate();
  return (
    <>
      <Sidebar />
      <MobileNav />
      <div className="page-with-left-header">
        <main className="pg">{children}</main>
        <Footer />
      </div>
    </>
  );
}
