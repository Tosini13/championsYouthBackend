import { GraphQLList, GraphQLNonNull, GraphQLObjectType } from "graphql";
import { gamesMock } from "../mock/games";
import { TTournament } from "../models/tournament";
import { GameType } from "./game";
import { TGetTournamentsParams } from "./root";

export const BracketType = new GraphQLObjectType({
  name: "Bracket",
  fields: () => ({
    games: {
      type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(GameType))),
      resolve(parent: TTournament & TGetTournamentsParams) {
        const games = gamesMock.filter((game) =>
          parent.playOffs?.gamesId?.includes(game.id)
        );
        const selectedGame =
          parent.gameId && games.find((game) => game.id === parent.gameId);
        return parent.gameId ? (selectedGame ? [selectedGame] : []) : games;
      },
    },
  }),
});
