export enum METHODS {
  POST = 'POST',
  GET = 'GET'
};

export const TMDB_INFOS = {
  API_URL: process.env.TMDB_API_URL,
  API_KEY: process.env.TMDB_API_KEY
}

export const BASIC_FILTER: string = 'include_adult=false&include_video=false&language=en-US&page=1';
