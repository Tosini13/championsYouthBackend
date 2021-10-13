import { GraphQLNonNull, GraphQLObjectType } from "graphql";
import { matchesMock } from "../mock/matches";
import { TGame } from "../models/game";
import { MatchType } from "./match";

export const GameType = new GraphQLObjectType({
  name: "Game",
  fields: () => ({
    match: {
      type: new GraphQLNonNull(MatchType),
      resolve(parent: TGame, _args) {
        return matchesMock.find((match) => parent.matchId === match.id);
      },
    },
    returnMatch: {
      type: MatchType,
      resolve(parent: TGame, _args) {
        return matchesMock.filter((match) => parent.returnMatchId === match.id);
      },
    },
  }),
});
