export interface NavItem {
  to: string;
  label: string;
  children?: NavItem[];
}
