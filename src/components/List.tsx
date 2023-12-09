import { Video } from "./Video";
import { Article } from "./Article";
import { HOC } from "./HOC";

interface IList {
  type: string;
  url?: string;
  title?: string;
  views: number;
}

interface IListProps {
  list: IList[]
}

export const List = ({list}: IListProps) => {
  return list.map(item => {
    if (item.type === 'video') {
      const NewVideo = HOC(Video, item.views);
      return <NewVideo key={item.views} {...item}/>
    }
    if (item.type === 'article') {
      const NewArticle = HOC(Article, item.views);
      return <NewArticle key={item.views}{...item}/>
    }
  });
}