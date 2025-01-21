import { text } from 'stream/consumers';
import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: '#'
    },
    {
      text: 'About Us',
      href: '#About',
    },
    {
      text: 'Portfolio',
      href: '#Portfolio',
    },
    {
      text: 'Kontak',
      href: '#Kontak',
    },
    
  ],
};

export const footerData = {
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://x.com/Zdevloper1125' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/zdevloper/' },
    { ariaLabel: 'Threads', icon: 'tabler:brand-threads', href: '#https://www.threads.net/@zdevloper' },
    { ariaLabel: 'Github', icon: 'tabler:brand-tiktok', href: 'https://www.tiktok.com/@zdevloper' },
  ],
  footNote: `Copyright @GenZDeveloper. All rights reserved.
  `,
};
