import {
  GraphQLID,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";
import { matchesMock } from "../mock/matches";
import { teamsMock } from "../mock/teams";
import { TGroup } from "../models/group";
import { MatchType } from "./match";
import { TeamType } from "./team";

export const GroupType = new GraphQLObjectType({
  name: "Group",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    teams: {
      type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(TeamType))),
      resolve(parent: TGroup, _args) {
        return teamsMock.filter((team) => parent.teamsId.includes(team.id));
      },
    },
    matches: {
      type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(MatchType))),
      resolve(parent: TGroup, _args) {
        return matchesMock.filter((match) =>
          parent.matchesId.includes(match.id)
        );
      },
    },
  }),
});
