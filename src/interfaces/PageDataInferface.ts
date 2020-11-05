interface ICopyBlockSmall {
  heading: string;
  paragraphs: string[];
}
interface ICopyBlock {
  heading: string;
  subheading: string;
  paragraphs: string[];
}
export interface IPageData {
  navBar: string[];
  heroBaner: {
    heading: string;
    subheading: string;
    paragraph: string;
  };
  aboutUs: ICopyBlock;
  careers: ICopyBlockSmall;
  news: ICopyBlock;
  contactUs: ICopyBlockSmall;
  gallery: string[];
}
