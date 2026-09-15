import { useEffect, useState, type MouseEvent } from "react";

const navItems = [
  {
    id: 0,
    href: "#recognition",
    text: "Recognition",
    isCurrent: true,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none"
           stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    id: 1,
    href: "#who-i-am",
    text: "Who I Am",
    isCurrent: false,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none"
           stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx={12} cy={7} r={4} />
      </svg>
    ),
  },
  {
    id: 2,
    href: "#research",
    text: "Research",
    isCurrent: false,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none"
           stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
  },
  {
    id: 3,
    href: "#oxiedo",
    text: "Business",
    isCurrent: false,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none"
           stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <rect x={2} y={7} width={20} height={14} rx={2} ry={2} />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
  },
  {
    id: 4,
    href: "#cherry",
    text: "What’s Next",
    isCurrent: false,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none"
           stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <circle cx={18} cy={18} r={3} />
        <circle cx={6} cy={6} r={3} />
        <path d="M6 21V9a9 9 0 0 0 9 9" />
      </svg>
    ),
  },
  {
    id: 5,
    href: "#oximo",
    text: "OXIMO",
    isCurrent: false,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none"
           stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <rect x={4} y={4} width={16} height={16} rx={2} ry={2} />
        <rect x={9} y={9} width={6} height={6} />
        <line x1={9} y1={1} x2={9} y2={4} />
        <line x1={15} y1={1} x2={15} y2={4} />
        <line x1={9} y1={20} x2={9} y2={23} />
        <line x1={15} y1={20} x2={15} y2={23} />
        <line x1={20} y1={9} x2={23} y2={9} />
        <line x1={20} y1={14} x2={23} y2={14} />
        <line x1={1} y1={9} x2={4} y2={9} />
        <line x1={1} y1={14} x2={4} y2={14} />
      </svg>
    ),
  },
  {
    id: 6,
    href: "#black-bloxie",
    text: "Black Bloxie",
    isCurrent: false,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none"
           stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 2v6l-5.5 9.5A2 2 0 0 0 5.2 21h13.6a2 2 0 0 0 1.7-3.5L15 8V2" />
        <line x1={9} y1={2} x2={15} y2={2} />
        <line x1={6.5} y1={15} x2={17.5} y2={15} />
      </svg>
    ),
  },
  {
    id: 7,
    href: "#ventures",
    text: "Ventures",
    isCurrent: false,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none"
           stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
  },
  {
    id: 8,
    href: "#statement",
    text: "Statement",
    isCurrent: false,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none"
           stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1={16} y1={13} x2={8} y2={13} />
        <line x1={16} y1={17} x2={8} y2={17} />
      </svg>
    ),
  },
  {
    id: 9,
    href: "#education",
    text: "Education",
    isCurrent: false,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none"
           stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <circle cx={12} cy={8} r={7} />
        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
      </svg>
    ),
  },
  {
    id: 10,
    href: "#contact",
    text: "Contact",
    isCurrent: false,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none"
           stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
];

export default function OnepageNav2({
  sectionIds = navItems,
  activeClass = "current",
}) {
  const [activeSection, setActiveSection] = useState(
    sectionIds[0].href.replace("#", "")
  );

  useEffect(() => {
    // Create an IntersectionObserver to track visibility of sections
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Update active section when the section is visible in the viewport
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-50% 0px", // Trigger when section is 50% visible
      }
    );

    // Observe each section
    setTimeout(() => {
      sectionIds.forEach((elm) => {
        const element = document.querySelector(elm.href);
        if (element) {
          observer.observe(element);
        }
      });
    });
    return () => {
      // Cleanup the observer when the component unmounts
      observer.disconnect();
    };
  }, [sectionIds]);

  const handleClick = (e: MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.querySelector(id);
    if (!el) return;
    // block:"start" — land on the section heading. "center" put the top of every
    // section above the fold, which is why sections opened mid-way.
    el.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
      block: "start",
    });
    // keep the URL in sync without triggering a second, unoffset jump
    if (history.replaceState) history.replaceState(null, "", id);
  };

  return (
    <>
      {navItems.map((item) => (
        <li
          key={item.id}
          className={`nav-item ${
            activeSection == item.href.replace("#", "") ? activeClass : ""
          }`}
        >
          <a
            className="nav-link smoth-animation"
            onClick={(e) => handleClick(e, item.href)}
            href={item.href}
          >
            {item.icon}
            {item.text}
          </a>
        </li>
      ))}
    </>
  );
}
