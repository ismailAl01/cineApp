import { isEmpty } from 'lodash';
import { useRouter } from 'next/router';

import { IMAGE_URL } from '@/utils/constants';
import { useSearchMoviesQuery } from '@/generated/graphql';
import Breadcrumb from '@/shared/components/Breadcrumb';
import Container from '@/shared/components/Container';
import Heading from '@/shared/components/Heading';
import NoData from '@/shared/components/NoData';
import Loader from '@/shared/components/Loader';
import MovieSearchCard from '@/shared/components/MovieSearchCard';

const Index = () => {
  const router = useRouter()
  const { name } = router.query;
  const { data, loading } = useSearchMoviesQuery({ variables: { query: String(name) } });

  const onClickDetail = (id: number): Promise<boolean> => router.push(`/movies/${id}`);

  if (loading) return <Loader />
  if (isEmpty(data?.searchMovies))
    return <NoData message={`There's no movie 🎬 with ${name} title.`} />;

  return (
    <>
      <Breadcrumb title={`Search  for "${name}"`} subtitle='Welcome to ALLOCINÉ' backgroundImage='/banner.jpg' />
      <section className='movies__area'>
        <Container>
          <Heading title="Films" short='Search result' />
          <div className='movies__area--wrapper'>
            {data.searchMovies.map(item =>
              <MovieSearchCard
                key={item.id}
                id={item.id}
                title={item.title}
                overview={item.overview}
                vote_count={item.vote_count}
                popularity={item.popularity}
                vote_average={item.vote_average}
                releaseDate={item.release_date}
                originalTitle={item.original_title}
                imageUrl={`${IMAGE_URL}/${item.poster_path}`}
                onClickDetail={onClickDetail}
              />
            )}
          </div>
        </Container>
      </section>
    </>
  );
};

export default Index;
