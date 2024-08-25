import { FaLocationDot as IconLocation } from 'react-icons/fa6';
import { IoMail as IconMail, IoCall as IconCall } from 'react-icons/io5';

export const footerNaveMenu = {
  links: [
    { title: 'Home', url: '/' },
    { title: 'Features', url: '/' },
    { title: 'Roadmap', url: '/' },
  ],
  overeenkonsten: [
    { title: 'Algemene voorwaarde', url: '/' },
    { title: 'Privacy statement', url: '/' },
    { title: 'Verwerkingsovereenkomst', url: '/' },
  ],
  contact: [
    { title: 'Meerlandenweg 65-b 1187ZR Amstelveen', icon: IconLocation },
    { title: 'info@blueengine.nl', icon: IconMail },
    { title: '+316 1254 0315', icon: IconCall },
  ],
};
