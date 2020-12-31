import { ID } from '@datorama/akita';
import { Actor } from '../actors/actor.model';
import { Genre } from '../genres/genre.model';

export type Movie = {
  id: ID;
  title: string;
  genres: ID[];
  actors: ID[];
};

export interface FullMovie {
  id: ID;
  title: string;
  genres: Genre[];
  actors: Actor[];
}