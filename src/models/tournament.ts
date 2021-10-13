import { Id } from "./global";

export type TTournament = {
  id: Id;
  name: Id;
  groupsId?: Id[];
  teamsId?: Id[];
  playOffs?: {
    groupsId?: Id[];
    gamesId?: Id[];
  };
};
