import React from 'react';

type MovieCardProps = {
  id: number;
  title: string;
  releaseDate: string;
  imageUrl: string;
  onClickDetail: (id: number) => void;
};

const MovieCard: React.FC<MovieCardProps> = ({
  id,
  title,
  releaseDate,
  imageUrl,
  onClickDetail,
}) => {
  return (
    <div key={id} className="movie__card" onClick={() => onClickDetail(id)}>
      <picture className="movie__card--image">
        <img alt="movie poster" src={imageUrl} />
      </picture>
      <div className="movie__card--details">
        <span className="--date">{releaseDate}</span>
        <h3 className="movie__card--title">{title}</h3>
      </div>
    </div>
  );
};

export default MovieCard;
