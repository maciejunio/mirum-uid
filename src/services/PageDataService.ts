import PageData from '@/mocks/PageData';
import { IPageData } from '@/interfaces/PageDataInferface';

export default class PageDataService {
  pageData: IPageData | {};

  constructor() {
    this.pageData = PageData;
  }

  public getPageData() {
    return this.pageData;
  }
}
