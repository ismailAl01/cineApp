import { useRouter } from 'next/router';

import { IMAGE_URL } from '@/utils/constants';
import Hero from '@/shared/components/Hero';
import Loader from '@/shared/components/Loader';
import Heading from '@/shared/components/Heading';
import Container from '@/shared/components/Container';
import CustomSwiper from '@/shared/components/Swiper';
import MovieCard from '@/shared/components/MovieCard';
import {
  usePopularMoviesQuery,
  useTopRatedMoviesQuery,
  useUpcomingMoviesQuery
} from '@/generated/graphql';

interface IndexProps {
  onClickDetail: (id: number) => void;
}

const Index = () => {
  const router = useRouter();
  const onClickDetail = (id: number): Promise<boolean> => router.push(`/movies/${id}`);

  return (
    <>
      <Hero />
      <UpcomingMovies onClickDetail={onClickDetail} />
      <PopularMovies onClickDetail={onClickDetail} />
      <TopRatedMovies onClickDetail={onClickDetail} />

    </>
  );
};

const UpcomingMovies: React.FC<IndexProps> = ({ onClickDetail }) => {
  const { data, loading } = usePopularMoviesQuery();

  if (loading) return <Loader />
  return (
    <section className='movies__area'>
      <Container>
        <Heading title="Upcoming Movies" short='Coming Soon' />
        <CustomSwiper items={data.popularMovies} swiperId="upcoming">
          {(item) => (
            <MovieCard
              id={item.id}
              title={item.title}
              releaseDate={item.release_date}
              imageUrl={`${IMAGE_URL}/${item.poster_path}`}
              onClickDetail={onClickDetail}
            />
          )}
        </CustomSwiper>
      </Container>
    </section>
  )
}

const PopularMovies: React.FC<IndexProps> = ({ onClickDetail }) => {
  const { data, loading } = useUpcomingMoviesQuery();

  if (loading) return <Loader />
  return (
    <section className='movies__area popular'>
      <Container>
        <Heading title="Popular Movies" short='the popular movies' />
        <CustomSwiper items={data.upcomingMovies} swiperId="popular">
          {(item) => (
            <MovieCard
              id={item.id}
              title={item.title}
              releaseDate={item.release_date}
              imageUrl={`${IMAGE_URL}/${item.poster_path}`}
              onClickDetail={onClickDetail}
            />
          )}
        </CustomSwiper>
      </Container>
    </section>
  )
}

const TopRatedMovies: React.FC<IndexProps> = ({ onClickDetail }) => {
  const { data, loading } = useTopRatedMoviesQuery();

  if (loading) return <Loader />
  return (
    <section className='movies__area '>
      <Container>
        <Heading title="Top Rated Movies" short='Discover the Top Rated movies' />
        <CustomSwiper items={data.topRatedMovies} swiperId="toprated">
          {(item) => (
            <MovieCard
              id={item.id}
              title={item.title}
              releaseDate={item.release_date}
              imageUrl={`${IMAGE_URL}/${item.poster_path}`}
              onClickDetail={onClickDetail}
            />
          )}
        </CustomSwiper>
      </Container>
    </section>
  )
}


export default Index;
