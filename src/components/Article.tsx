interface IArticleProps {
  title: string;
  views: number;
}


export const Article = (props: IArticleProps) => {
  return (
    <div className="item item-article">
      <h3><a href="#">{props.title}</a></h3>
      <p className="views">Прочтений: {props.views}</p>
    </div>
  )
}