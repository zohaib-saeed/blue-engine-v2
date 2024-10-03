interface INavLinkItem {
  title: string;
  url?: string;
  subPages?: {
    title: string;
    url: string;
    active: boolean;
  }[];
}

interface ISubFeatureSectionDataType {
  data: {
    title: string;
    subText: string;
    name?: string;
    image?: string;
  };
  index: number;
}
