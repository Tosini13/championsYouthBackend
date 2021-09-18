import {
  GraphQLID,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
} from "graphql";
import _ from "lodash";
import { groupsMock } from "../mock/groups";
import { matchesMock } from "../mock/matches";
import { teamsMock } from "../mock/teams";
import { tournamentsMock } from "../mock/tournaments";
import { GroupType } from "./group";
import { MatchType } from "./match";
import { TeamType } from "./team";
import { GetTournamentsType, GetTournamentType } from "./tournament";

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    status: {
      type: GraphQLString,
      resolve(_parent, _args) {
        return "Welcome to GQL";
      },
    },
    GetTournaments: {
      type: GetTournamentsType,
      resolve(_parent, _args) {
        return tournamentsMock;
      },
    },
    GetTournament: {
      type: GetTournamentType,
      args: { id: { type: GraphQLID } },
      resolve(_parent, args) {
        return _.find(tournamentsMock, { id: args.id });
      },
    },
    group: {
      type: GroupType,
      args: { id: { type: GraphQLID } },
      resolve(_parent, args) {
        return _.find(groupsMock, { id: args.id });
      },
    },
    match: {
      type: MatchType,
      args: { id: { type: GraphQLID } },
      resolve(_parent, args) {
        return _.find(matchesMock, { id: args.id });
      },
    },
    team: {
      type: TeamType,
      args: { id: { type: GraphQLID } },
      resolve(_parent, args) {
        return _.find(teamsMock, { id: args.id });
      },
    },
  },
});

export const schema = new GraphQLSchema({
  query: RootQuery,
});
