export interface RouteConfig {
  label: string;
  path: string;
}

export const ROUTE_CONFIG: RouteConfig[] = [
  {
    path: '',
    label: 'Home',
  },
  {
    path: '/characters',
    label: 'Characters',
  },
];
