import { Resolver, Arg, Query } from 'type-graphql';

import { Movie } from '../utils/types';
import { BASIC_FILTER } from '../utils/constants';
import { moviesDiscoverAPI, moviesSearchAPI, movieDetail } from '../services/tmdb';


@Resolver()
export class MovieResolver {
  @Query(() => [Movie])
  async popularMovies(): Promise<[Movie]> {
    const query = `${BASIC_FILTER}&sort_by=popularity.desc`;
    const popularResult = await moviesDiscoverAPI(query);
    return popularResult.results;
  }

  @Query(() => [Movie])
  async topRatedMovies(): Promise<[Movie]> {
    const query = `${BASIC_FILTER}&sort_by=vote_average.desc&without_genres=99,10755&vote_count.gte=200`;
    const topRatedResult = await moviesDiscoverAPI(query);
    return topRatedResult.results;
  }

  @Query(() => [Movie])
  async upcomingMovies(): Promise<[Movie]> {
    const query = `${BASIC_FILTER}&sort_by=popularity.desc&with_release_type=2|3&release_date.gte={min_date}&release_date.lte={max_date}`;
    const upcomingResult = await moviesDiscoverAPI(query);
    return upcomingResult.results;
  }

  @Query(() => [Movie])
  async searchMovies(@Arg('query') query: string): Promise<[Movie]> {
    const filter = `${BASIC_FILTER}&query=${query}`;
    const searchResult = await moviesSearchAPI(filter);
    return searchResult.results;
  }

  @Query(() => Movie, { nullable: true })
  async detailMovie(@Arg('id') id: number): Promise<Movie | null> {
    const details = await movieDetail(id);
    return details;
  }
}
