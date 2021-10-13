import {
  GraphQLID,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
} from "graphql";
import _ from "lodash";
import { tournamentsMock } from "../mock/tournaments";
import { TournamentType } from "./tournament";

export type TGetTournamentsParams = {
  tournamentId?: string;
  groupId?: string;
  playOffsGroupId?: string;
  gameId?: string;
  teamId?: string;
};

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
      type: new GraphQLNonNull(
        new GraphQLList(new GraphQLNonNull(TournamentType))
      ),
      args: {
        tournamentId: { type: GraphQLID, defaultValue: null },
        groupId: { type: GraphQLID, defaultValue: null },
        teamId: { type: GraphQLID, defaultValue: null },
      },
      resolve(_parent, args: TGetTournamentsParams) {
        const response = args.tournamentId
          ? [_.find(tournamentsMock, { id: args.tournamentId })]
          : tournamentsMock;

        return response.map((tournament) =>
          Object.assign({}, tournament, args)
        );
      },
    },
  },
});

export const schema = new GraphQLSchema({
  query: RootQuery,
});
