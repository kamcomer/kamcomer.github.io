export interface NavItem {
  to: string;
  label: string;
  children?: NavItem[];
}

export interface NavbarProps {
  isAlwaysVisible?: boolean;
}