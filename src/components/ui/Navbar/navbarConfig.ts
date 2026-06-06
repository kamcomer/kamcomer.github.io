import { NavItem } from "./types";

const navLinks: NavItem[] = [{ to: "/", label: "Home" }];

if (import.meta.env.VITE_DEV) {
  navLinks.push(
    { to: "/projects", label: "Projects" },
    { to: "/blog", label: "Blog" },
    { to: "/about", label: "About" },
    {
      to: "/dev",
      label: "Dev",
      children: [
        { to: "/demo/terminal", label: "Terminal" },
        { to: "/demo/github-activity", label: "Activity" },
        { to: "/demo/code-playground", label: "Playground" },
        { to: "/demo/ascii-art", label: "ASCII" },
        { to: "/demo/achievements", label: "Badges" },
        { to: "/demo/effects", label: "Effects" },
      ],
    },
  );
}

export { navLinks };