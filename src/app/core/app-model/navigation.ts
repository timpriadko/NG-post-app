export interface MenuItem {
    label: string;
    link: string;
    id: number;
  }
  
  export const MenuItems: MenuItem[] = [
    {
      label: 'Common.HOME',
      link: '/',
      id: 1,
    },
    {
      label: 'Common.POSTS',
      link: '/posts',
      id: 2,
    },
  ];
  