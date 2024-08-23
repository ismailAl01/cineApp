import React from 'react';
import { BsStarFill } from 'react-icons/bs';
import Button from '@/shared/components/Button';

type MovieSearchCardProps = {
  id: number;
  title: string;
  originalTitle: string;
  overview: string;
  vote_count: number;
  popularity: number;
  vote_average: number;
  releaseDate: string;
  imageUrl: string;
  onClickDetail: (id: number) => void;
};

const MovieSearchCard: React.FC<MovieSearchCardProps> = ({
  id,
  title,
  originalTitle,
  releaseDate,
  vote_count = 0,
  popularity = 0,
  vote_average = 0,
  imageUrl,
  onClickDetail,
  overview = "Film overview"
}) => (
  <div key={id} className="search__card" onClick={() => onClickDetail(id)}>
    <picture className="search__card--image">
      <img
        alt="movie poster"
        src={imageUrl}
      />
    </picture>
    <div className="search__card--details">

      <h3 className="search__card--title">{title}</h3>

      <ul className="search__card--list">
        <li className="item">
          <span className="key">Date: </span>
          <span className="value">{releaseDate}</span>
        </li>
        <li className="item">
          <span className="key">De :</span>
          <span className="value">Steven Spielberg</span>
        </li>
        <li className="item">
          <span className="key">Avec</span>
          <span className="value">Henry Thomas, Drew Barrymore, Dee Wallace</span>
        </li>
        <li className="item">
          <span className="key">Titre original </span>
          <span className="value">{originalTitle}</span>
        </li>
      </ul>
      <div className="search__card--counts">
        <div className="item">
          <span>average</span>
          <strong>{vote_average}</strong>
          <BsStarFill size={24} />
        </div>
        <div className="item">
          <span>vote</span>
          <strong>{vote_count}</strong>
          <BsStarFill size={24} />
        </div>
        <div className="item">
          <span>popularity</span>
          <strong>{popularity}</strong>
          <BsStarFill size={24} />
        </div>
      </div>
      <p className="search__card--description">{overview}</p>
      <Button
        size="medium"
        mode="primary"
        label="See details"
        onClick={() => onClickDetail(id)}
      />
    </div>
  </div>
);

export default MovieSearchCard;
