import { useModalUI } from "@/context/ModalUIContext";
import { useEffect, useState, type MouseEvent } from "react";

const navItems = [
  { id: 1, href: "#who-i-am", text: "Who I Am" },
  { id: 2, href: "#research", text: "Research" },
  { id: 3, href: "#engineering", text: "Engineering" },
  { id: 4, href: "#deployment", text: "Deployment" },
  { id: 5, href: "#journey", text: "Origin" },
  { id: 6, href: "#education", text: "Education" },
  { id: 7, href: "#skills-vision", text: "Skills & Vision" }
];

export default function OnepageNavMobile({
  sectionIds = navItems,
  activeClass = "current",
}) {
  const { closeModal } = useModalUI();
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
    closeModal("mobileMenu2");
  };

  return (
    <ul className="tmp-mainmenu onepagenav-click">
      {navItems.map((item) => (
        <li
          key={item.id}
          className={
            activeSection == item.href.replace("#", "")
              ? activeClass
              : "nav-item"
          }
        >
          <a
            className="smoth-animation"
            onClick={(e) => handleClick(e, item.href)}
            href={item.href}
          >
            {item.text}
          </a>
        </li>
      ))}
    </ul>
  );
}
