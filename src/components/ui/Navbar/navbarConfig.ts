import { NavItem } from "./types";

const navLinks: NavItem[] = [
  { to: "/", label: "Home" },
  { to: "/#about", label: "About" },
  { to: "/#experience", label: "Experience" },
  { to: "/#projects", label: "Projects" },
  { to: "/#skills", label: "Skills" },
  { to: "/#contact", label: "Contact" },
];

if (import.meta.env.VITE_DEV) {
  navLinks.push({
    to: "/dev",
    label: "Dev",
    children: [
      { to: "/blog", label: "Blog" },
      { to: "/demo/terminal", label: "Terminal" },
      { to: "/demo/github-activity", label: "Activity" },
      { to: "/demo/code-playground", label: "Playground" },
      { to: "/demo/ascii-art", label: "ASCII" },
      { to: "/demo/achievements", label: "Badges" },
      { to: "/demo/effects", label: "Effects" },
    ],
  });
}

export { navLinks };