import { NavItem } from "../../../types";

const publicNavLinks: NavItem[] = [
  { to: "/", label: "Home" },
  { to: "/resume", label: "Resume" },
  { to: "/#projects", label: "Projects" },
  { to: "/#contact", label: "Contact" },
];

const devNavLinks: NavItem[] = import.meta.env.VITE_DEV
  ? [
      {
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
      },
    ]
  : [];

export { publicNavLinks, devNavLinks };
