declare interface IArticleItem {
  title: string;
  keyword: string;
  tag: string[];
  description: string;
  content: string;
  state: number;
  publish: number;
  thumb: string;
  classify: string;
  _id?: string;
}

declare interface IArticleState {
  _id: string;
  state?: number;
  publish?: number;
}