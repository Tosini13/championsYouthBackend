import { TTournament } from "../models/tournament";

export const tournamentsMock: TTournament[] = [
  {
    id: "1",
    name: "Champions League",
    groupsId: ["1", "2"],
    teamsId: ["1", "2"],
    playOffs: {
      gamesId: ["1", "2"],
    },
  },
  {
    id: "2",
    name: "Europa League",
    groupsId: ["3", "4"],
    teamsId: ["3", "4"],
    playOffs: {
      groupsId: ["1"],
    },
  },
  {
    id: "3",
    name: "Conference League",
    teamsId: ["5", "6"],
    playOffs: {
      gamesId: ["3", "4"],
    },
  },
];
