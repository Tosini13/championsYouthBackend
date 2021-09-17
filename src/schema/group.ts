import {
  GraphQLID,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";
import { matchesMock } from "../mock/matches";
import { TGroup } from "../models/group";
import { MatchType } from "./match";

export const GroupType = new GraphQLObjectType({
  name: "Group",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
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
