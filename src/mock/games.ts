import { TGame } from "../models/game";
import { matchesMock } from "./matches";

export const gamesMock: TGame[] = [
  {
    id: "1",
    matchId: matchesMock[0].id,
    returnMatchId: matchesMock[1].id,
  },
  {
    id: "2",
    matchId: matchesMock[1].id,
  },
  {
    id: "3",
    matchId: matchesMock[0].id,
  },
  {
    id: "4",
    matchId: matchesMock[1].id,
    returnMatchId: matchesMock[0].id,
  },
  {
    id: "5",
    matchId: matchesMock[1].id,
    returnMatchId: matchesMock[0].id,
  },
];
