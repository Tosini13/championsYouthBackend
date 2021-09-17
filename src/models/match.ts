import { Id } from "./global";

export type TScore = {
  home: number;
  away: number;
};

export type TMatch = {
  id: Id;
  roundNumber?: number;
  roundName?: string;
  homeTeamId?: Id;
  awayTeamId?: Id;
  score?: TScore;
  dateTime?: Date;
};
