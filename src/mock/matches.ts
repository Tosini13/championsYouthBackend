import { TMatch } from "../models/match";
import { teamsMock } from "./teams";

export const matchesMock: TMatch[] = [
  {
    id: "1",
    homeTeamId: teamsMock[0].id,
    awayTeamId: teamsMock[1].id,
    roundNumber: 1,
    score: {
      home: 1,
      away: 0,
    },
  },
  {
    id: "2",
    homeTeamId: teamsMock[2].id,
    awayTeamId: teamsMock[3].id,
    roundNumber: 1,
  },
];
