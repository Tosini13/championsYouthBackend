import { Id } from "./global";

export type TGroup = {
  id: Id;
  name: string;
  teamsId: Id[];
  matchesId: Id[];
};
