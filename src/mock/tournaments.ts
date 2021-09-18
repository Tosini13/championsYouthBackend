import { TTournament } from "../models/tournament";

export const tournamentsMock: TTournament[] = [
  {
    id: "1",
    name: "Champions League",
    groupsId: ["1", "2"],
  },
  {
    id: "2",
    name: "Europa League",
    groupsId: ["1", "2"],
  },
  {
    id: "3",
    name: "Conference League",
    groupsId: ["1", "2"],
  },
];
