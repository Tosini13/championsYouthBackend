import { Id } from "../models/global";
import { TGroup } from "../models/group";
import { matchesMock } from "./matches";
import { teamsMock } from "./teams";

export const groupsMock: TGroup[] = [
  {
    id: "1",
    name: "Group A",
    matchesId: matchesMock.map((match) => match.id),
    teamsId: teamsMock.map((team) => team.id),
  },
  {
    id: "2",
    name: "Group B",
    matchesId: [] as Id[],
    teamsId: [] as Id[],
  },
  {
    id: "3",
    name: "Group C",
    matchesId: [] as Id[],
    teamsId: [] as Id[],
  },
  {
    id: "4",
    name: "Group D",
    matchesId: [] as Id[],
    teamsId: [] as Id[],
  },
  {
    id: "5",
    name: "Group E",
    matchesId: [] as Id[],
    teamsId: [] as Id[],
  },
];
