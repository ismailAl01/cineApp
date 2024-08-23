import axios, { AxiosPromise } from 'axios';

import { METHODS, TMDB_INFOS } from '../utils/constants';
import { inputAPI } from '../utils/types';

const { GET } = METHODS;
const { API_URL, API_KEY } = TMDB_INFOS;

export const moviesDiscoverAPI = async (query: string): Promise<any> => {
  const method = GET;
  const endpoint = `discover/movie?${query}&api_key=${API_KEY}`;
  const headers = { 'accept': 'application/json' };

  const res = await tmdbAPI(
    {
      endpoint,
      method,
      headers
    },
  );
  return res?.data;
};

export const moviesSearchAPI = async (query: string): Promise<any> => {
  const method = GET;
  const endpoint = `search/movie?${query}&api_key=${API_KEY}`;
  const headers = { 'accept': 'application/json' };

  const res = await tmdbAPI(
    {
      endpoint,
      method,
      headers
    },
  );
  return res?.data;
};

export const movieDetail = async (movieId: number): Promise<any> => {
  try {
    const method = GET;
    const endpoint = `movie/${movieId}?api_key=${API_KEY}`;
    const headers = { 'accept': 'application/json' };

    const res = await tmdbAPI(
      {
        endpoint,
        method,
        headers
      },
    );
    return res?.data;
  } catch (err) {
    return null
  }
};


const tmdbAPI = (
  { endpoint, method, data, headers, options = {} }: inputAPI,
): AxiosPromise<any> | never => {
  const url = `${API_URL}/${endpoint}`;
  return axios({ url, method, data, headers, ...options });
};
