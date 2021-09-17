import {
  GraphQLID,
  GraphQLInt,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";
import { teamsMock } from "../mock/teams";
import { TMatch } from "../models/match";
import { TeamType } from "./team";

export const MatchType = new GraphQLObjectType({
  name: "Match",
  fields: () => ({
    id: { type: GraphQLID },
    roundNumber: { type: GraphQLInt },
    roundName: { type: GraphQLString },
    dateTime: { type: GraphQLString },
    // score! Object type
    homeTeam: {
      type: TeamType,
      resolve(parent: TMatch, _args) {
        return teamsMock.find((team) => parent.homeTeamId === team.id);
      },
    },
    awayTeam: {
      type: TeamType,
      resolve(parent: TMatch, _args) {
        return teamsMock.find((team) => parent.awayTeamId === team.id);
      },
    },
  }),
});
