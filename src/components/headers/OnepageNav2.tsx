import { useEffect, useState, type MouseEvent } from "react";

const navItems = [
  {
    id: 1,
    href: "#who-i-am",
    text: "Who I Am",
    isCurrent: true,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-home"
      >
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    id: 2,
    href: "#research",
    text: "Research",
    isCurrent: false,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-book-open"
      >
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
  },
  {
    id: 3,
    href: "#engineering",
    text: "Engineering",
    isCurrent: false,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-cpu"
      >
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
    id: 4,
    href: "#deployment",
    text: "Deployment",
    isCurrent: false,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-briefcase"
      >
        <rect x={2} y={7} width={20} height={14} rx={2} ry={2} />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
  },
  {
    id: 5,
    href: "#journey",
    text: "Origin",
    isCurrent: false,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-compass"
      >
        <circle cx={12} cy={12} r={10} />
        <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
      </svg>
    ),
  },
  {
    id: 6,
    href: "#education",
    text: "Education",
    isCurrent: false,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-award"
      >
        <circle cx={12} cy={8} r={7} />
        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
      </svg>
    ),
  },
  {
    id: 7,
    href: "#skills-vision",
    text: "Skills & Vision",
    isCurrent: false,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-pie-chart"
      >
        <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
        <path d="M22 12A10 10 0 0 0 12 2v10z" />
      </svg>
    ),
  }
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
    document
      .querySelector(id)
      ?.scrollIntoView({ behavior: "smooth", block: "center" });
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
