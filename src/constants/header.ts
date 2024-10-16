import { subFeaturesNames } from "@/db";

export const headerNavLinks = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Features",
    subPages: subFeaturesNames,
  },
  {
    title: "Prijzen",
    url: "/#pricing",
  },
  // {
  //   title: 'Resources',
  //   url: '/resources',
  // },
  // {
  //   title: 'Roadmap',
  //   url: '/roadmap',
  // },
];
