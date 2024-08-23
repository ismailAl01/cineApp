import { isNil } from 'lodash';
import { useRouter } from 'next/router';
import { BsStarFill } from 'react-icons/bs';

import { useDetailMovieQuery } from '@/generated/graphql';
import Breadcrumb from '@/shared/components/Breadcrumb';
import Container from '@/shared/components/Container';
import NoData from '@/shared/components/NoData';
import Loader from '@/shared/components/Loader';
import { IMAGE_URL } from '@/utils/constants';

const Index = () => {
  const router = useRouter()
  const { id } = router.query;
  const { data, loading } = useDetailMovieQuery({ variables: { id: Number(id) } });

  if (loading) return <Loader />
  if (isNil(data)) return <NoData message={`There's no movie 🎬 found.`} />;
  return (
    <>
      <Breadcrumb
        large={true}
        subtitle='Film'
        title={data.detailMovie.title}
        backgroundImage={`${IMAGE_URL}/${data.detailMovie.poster_path}`} />

      <section className='movies__area'>
        <Container>
          <div className="search__card">
            <picture className="search__card--image">
              <img
                alt="movie poster"
                src={`${IMAGE_URL}/${data.detailMovie.poster_path}`}
              />
            </picture>
            <div className="search__card--details">

              <h3 className="search__card--title">{data.detailMovie.title}</h3>

              <ul className="search__card--list">
                <li className="item">
                  <span className="key">Date: </span>
                  <span className="value">{data.detailMovie.release_date}</span>
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
                  <span className="value">{data.detailMovie.original_title}</span>
                </li>
              </ul>

              <div className="search__card--counts">
                <div className="item">
                  <span>average</span>
                  <strong>{data.detailMovie.vote_average}</strong>
                  <BsStarFill size={24} />
                </div>
                <div className="item">
                  <span>vote</span>
                  <strong>{data.detailMovie.vote_count}</strong>
                  <BsStarFill size={24} />
                </div>
                <div className="item">
                  <span>popularity</span>
                  <strong>{data.detailMovie.popularity}</strong>
                  <BsStarFill size={24} />
                </div>
              </div>

              <p className="search__card--description">{data.detailMovie.overview}</p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Index;
