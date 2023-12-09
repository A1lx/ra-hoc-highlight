interface IVideoProps {
  url: string;
  views: number;
}

export const Video = (props: IVideoProps) => {
  return (
    <div className="item item-video">
      <iframe src={props.url} /*frameborder="0"*/ allow="autoplay; encrypted-media" /*allowfullscreen*/></iframe>
      <p className="views">Просмотров: {props.views}</p>
    </div>
  )
}