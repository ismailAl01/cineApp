import { ObjectType, Field } from 'type-graphql';

import { METHODS } from './constants';

export interface inputAPI {
  endpoint: string;
  method: METHODS;
  data?: any;
  headers: any;
  options?: any;
}

@ObjectType()
export class Movie {
  @Field()
	id: number;

  @Field({ nullable: true })
	title: string;

  @Field({ nullable: true })
	original_title: string;

  @Field({ nullable: true })
	poster_path: string;

  @Field()
	adult: boolean;

  @Field({ nullable: true })
	overview: string;

  @Field(() => String, { nullable: true })
	release_date: Date;

  @Field(() => [Number], { nullable: true })
	genre_ids: number[];

  @Field({ nullable: true })
	original_language: string;

  @Field({ nullable: true })
	backdrop_path: string;

  @Field({ nullable: true })
	popularity: number;

  @Field({ nullable: true })
	vote_count: number;

  @Field()
	video: boolean;

  @Field({ nullable: true })
	vote_average: number;
}
