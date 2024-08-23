import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Movie = {
  __typename?: 'Movie';
  adult: Scalars['Boolean']['output'];
  backdrop_path?: Maybe<Scalars['String']['output']>;
  genre_ids?: Maybe<Array<Scalars['Float']['output']>>;
  id: Scalars['Float']['output'];
  original_language?: Maybe<Scalars['String']['output']>;
  original_title?: Maybe<Scalars['String']['output']>;
  overview?: Maybe<Scalars['String']['output']>;
  popularity?: Maybe<Scalars['Float']['output']>;
  poster_path?: Maybe<Scalars['String']['output']>;
  release_date?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  video: Scalars['Boolean']['output'];
  vote_average?: Maybe<Scalars['Float']['output']>;
  vote_count?: Maybe<Scalars['Float']['output']>;
};

export type Query = {
  __typename?: 'Query';
  detailMovie?: Maybe<Movie>;
  popularMovies: Array<Movie>;
  searchMovies: Array<Movie>;
  topRatedMovies: Array<Movie>;
  upcomingMovies: Array<Movie>;
};


export type QueryDetailMovieArgs = {
  id: Scalars['Float']['input'];
};


export type QuerySearchMoviesArgs = {
  query: Scalars['String']['input'];
};

export type RegularMovieFragment = { __typename?: 'Movie', id: number, title?: string | null, original_title?: string | null, poster_path?: string | null, adult: boolean, overview?: string | null, release_date?: string | null, genre_ids?: Array<number> | null, original_language?: string | null, backdrop_path?: string | null, popularity?: number | null, vote_count?: number | null, video: boolean, vote_average?: number | null };

export type PopularMoviesQueryVariables = Exact<{ [key: string]: never; }>;


export type PopularMoviesQuery = { __typename?: 'Query', popularMovies: Array<{ __typename?: 'Movie', id: number, title?: string | null, original_title?: string | null, poster_path?: string | null, adult: boolean, overview?: string | null, release_date?: string | null, genre_ids?: Array<number> | null, original_language?: string | null, backdrop_path?: string | null, popularity?: number | null, vote_count?: number | null, video: boolean, vote_average?: number | null }> };

export type TopRatedMoviesQueryVariables = Exact<{ [key: string]: never; }>;


export type TopRatedMoviesQuery = { __typename?: 'Query', topRatedMovies: Array<{ __typename?: 'Movie', id: number, title?: string | null, original_title?: string | null, poster_path?: string | null, adult: boolean, overview?: string | null, release_date?: string | null, genre_ids?: Array<number> | null, original_language?: string | null, backdrop_path?: string | null, popularity?: number | null, vote_count?: number | null, video: boolean, vote_average?: number | null }> };

export type UpcomingMoviesQueryVariables = Exact<{ [key: string]: never; }>;


export type UpcomingMoviesQuery = { __typename?: 'Query', upcomingMovies: Array<{ __typename?: 'Movie', id: number, title?: string | null, original_title?: string | null, poster_path?: string | null, adult: boolean, overview?: string | null, release_date?: string | null, genre_ids?: Array<number> | null, original_language?: string | null, backdrop_path?: string | null, popularity?: number | null, vote_count?: number | null, video: boolean, vote_average?: number | null }> };

export type SearchMoviesQueryVariables = Exact<{
  query: Scalars['String']['input'];
}>;


export type SearchMoviesQuery = { __typename?: 'Query', searchMovies: Array<{ __typename?: 'Movie', id: number, title?: string | null, original_title?: string | null, poster_path?: string | null, adult: boolean, overview?: string | null, release_date?: string | null, genre_ids?: Array<number> | null, original_language?: string | null, backdrop_path?: string | null, popularity?: number | null, vote_count?: number | null, video: boolean, vote_average?: number | null }> };

export type DetailMovieQueryVariables = Exact<{
  id: Scalars['Float']['input'];
}>;


export type DetailMovieQuery = { __typename?: 'Query', detailMovie?: { __typename?: 'Movie', id: number, title?: string | null, original_title?: string | null, poster_path?: string | null, adult: boolean, overview?: string | null, release_date?: string | null, genre_ids?: Array<number> | null, original_language?: string | null, backdrop_path?: string | null, popularity?: number | null, vote_count?: number | null, video: boolean, vote_average?: number | null } | null };

export const RegularMovieFragmentDoc = gql`
    fragment RegularMovie on Movie {
  id
  title
  original_title
  poster_path
  adult
  overview
  release_date
  genre_ids
  original_language
  backdrop_path
  popularity
  vote_count
  video
  vote_average
}
    `;
export const PopularMoviesDocument = gql`
    query popularMovies {
  popularMovies {
    ...RegularMovie
  }
}
    ${RegularMovieFragmentDoc}`;

/**
 * __usePopularMoviesQuery__
 *
 * To run a query within a React component, call `usePopularMoviesQuery` and pass it any options that fit your needs.
 * When your component renders, `usePopularMoviesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePopularMoviesQuery({
 *   variables: {
 *   },
 * });
 */
export function usePopularMoviesQuery(baseOptions?: Apollo.QueryHookOptions<PopularMoviesQuery, PopularMoviesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PopularMoviesQuery, PopularMoviesQueryVariables>(PopularMoviesDocument, options);
      }
export function usePopularMoviesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PopularMoviesQuery, PopularMoviesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PopularMoviesQuery, PopularMoviesQueryVariables>(PopularMoviesDocument, options);
        }
export function usePopularMoviesSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<PopularMoviesQuery, PopularMoviesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<PopularMoviesQuery, PopularMoviesQueryVariables>(PopularMoviesDocument, options);
        }
export type PopularMoviesQueryHookResult = ReturnType<typeof usePopularMoviesQuery>;
export type PopularMoviesLazyQueryHookResult = ReturnType<typeof usePopularMoviesLazyQuery>;
export type PopularMoviesSuspenseQueryHookResult = ReturnType<typeof usePopularMoviesSuspenseQuery>;
export type PopularMoviesQueryResult = Apollo.QueryResult<PopularMoviesQuery, PopularMoviesQueryVariables>;
export const TopRatedMoviesDocument = gql`
    query topRatedMovies {
  topRatedMovies {
    ...RegularMovie
  }
}
    ${RegularMovieFragmentDoc}`;

/**
 * __useTopRatedMoviesQuery__
 *
 * To run a query within a React component, call `useTopRatedMoviesQuery` and pass it any options that fit your needs.
 * When your component renders, `useTopRatedMoviesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTopRatedMoviesQuery({
 *   variables: {
 *   },
 * });
 */
export function useTopRatedMoviesQuery(baseOptions?: Apollo.QueryHookOptions<TopRatedMoviesQuery, TopRatedMoviesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TopRatedMoviesQuery, TopRatedMoviesQueryVariables>(TopRatedMoviesDocument, options);
      }
export function useTopRatedMoviesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TopRatedMoviesQuery, TopRatedMoviesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TopRatedMoviesQuery, TopRatedMoviesQueryVariables>(TopRatedMoviesDocument, options);
        }
export function useTopRatedMoviesSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<TopRatedMoviesQuery, TopRatedMoviesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<TopRatedMoviesQuery, TopRatedMoviesQueryVariables>(TopRatedMoviesDocument, options);
        }
export type TopRatedMoviesQueryHookResult = ReturnType<typeof useTopRatedMoviesQuery>;
export type TopRatedMoviesLazyQueryHookResult = ReturnType<typeof useTopRatedMoviesLazyQuery>;
export type TopRatedMoviesSuspenseQueryHookResult = ReturnType<typeof useTopRatedMoviesSuspenseQuery>;
export type TopRatedMoviesQueryResult = Apollo.QueryResult<TopRatedMoviesQuery, TopRatedMoviesQueryVariables>;
export const UpcomingMoviesDocument = gql`
    query upcomingMovies {
  upcomingMovies {
    ...RegularMovie
  }
}
    ${RegularMovieFragmentDoc}`;

/**
 * __useUpcomingMoviesQuery__
 *
 * To run a query within a React component, call `useUpcomingMoviesQuery` and pass it any options that fit your needs.
 * When your component renders, `useUpcomingMoviesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUpcomingMoviesQuery({
 *   variables: {
 *   },
 * });
 */
export function useUpcomingMoviesQuery(baseOptions?: Apollo.QueryHookOptions<UpcomingMoviesQuery, UpcomingMoviesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UpcomingMoviesQuery, UpcomingMoviesQueryVariables>(UpcomingMoviesDocument, options);
      }
export function useUpcomingMoviesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UpcomingMoviesQuery, UpcomingMoviesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UpcomingMoviesQuery, UpcomingMoviesQueryVariables>(UpcomingMoviesDocument, options);
        }
export function useUpcomingMoviesSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<UpcomingMoviesQuery, UpcomingMoviesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<UpcomingMoviesQuery, UpcomingMoviesQueryVariables>(UpcomingMoviesDocument, options);
        }
export type UpcomingMoviesQueryHookResult = ReturnType<typeof useUpcomingMoviesQuery>;
export type UpcomingMoviesLazyQueryHookResult = ReturnType<typeof useUpcomingMoviesLazyQuery>;
export type UpcomingMoviesSuspenseQueryHookResult = ReturnType<typeof useUpcomingMoviesSuspenseQuery>;
export type UpcomingMoviesQueryResult = Apollo.QueryResult<UpcomingMoviesQuery, UpcomingMoviesQueryVariables>;
export const SearchMoviesDocument = gql`
    query searchMovies($query: String!) {
  searchMovies(query: $query) {
    ...RegularMovie
  }
}
    ${RegularMovieFragmentDoc}`;

/**
 * __useSearchMoviesQuery__
 *
 * To run a query within a React component, call `useSearchMoviesQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchMoviesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchMoviesQuery({
 *   variables: {
 *      query: // value for 'query'
 *   },
 * });
 */
export function useSearchMoviesQuery(baseOptions: Apollo.QueryHookOptions<SearchMoviesQuery, SearchMoviesQueryVariables> & ({ variables: SearchMoviesQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchMoviesQuery, SearchMoviesQueryVariables>(SearchMoviesDocument, options);
      }
export function useSearchMoviesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchMoviesQuery, SearchMoviesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchMoviesQuery, SearchMoviesQueryVariables>(SearchMoviesDocument, options);
        }
export function useSearchMoviesSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<SearchMoviesQuery, SearchMoviesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<SearchMoviesQuery, SearchMoviesQueryVariables>(SearchMoviesDocument, options);
        }
export type SearchMoviesQueryHookResult = ReturnType<typeof useSearchMoviesQuery>;
export type SearchMoviesLazyQueryHookResult = ReturnType<typeof useSearchMoviesLazyQuery>;
export type SearchMoviesSuspenseQueryHookResult = ReturnType<typeof useSearchMoviesSuspenseQuery>;
export type SearchMoviesQueryResult = Apollo.QueryResult<SearchMoviesQuery, SearchMoviesQueryVariables>;
export const DetailMovieDocument = gql`
    query detailMovie($id: Float!) {
  detailMovie(id: $id) {
    ...RegularMovie
  }
}
    ${RegularMovieFragmentDoc}`;

/**
 * __useDetailMovieQuery__
 *
 * To run a query within a React component, call `useDetailMovieQuery` and pass it any options that fit your needs.
 * When your component renders, `useDetailMovieQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDetailMovieQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDetailMovieQuery(baseOptions: Apollo.QueryHookOptions<DetailMovieQuery, DetailMovieQueryVariables> & ({ variables: DetailMovieQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<DetailMovieQuery, DetailMovieQueryVariables>(DetailMovieDocument, options);
      }
export function useDetailMovieLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<DetailMovieQuery, DetailMovieQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<DetailMovieQuery, DetailMovieQueryVariables>(DetailMovieDocument, options);
        }
export function useDetailMovieSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<DetailMovieQuery, DetailMovieQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<DetailMovieQuery, DetailMovieQueryVariables>(DetailMovieDocument, options);
        }
export type DetailMovieQueryHookResult = ReturnType<typeof useDetailMovieQuery>;
export type DetailMovieLazyQueryHookResult = ReturnType<typeof useDetailMovieLazyQuery>;
export type DetailMovieSuspenseQueryHookResult = ReturnType<typeof useDetailMovieSuspenseQuery>;
export type DetailMovieQueryResult = Apollo.QueryResult<DetailMovieQuery, DetailMovieQueryVariables>;