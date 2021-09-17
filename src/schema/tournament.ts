import {
  GraphQLID,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";
import { GroupType } from "./group";
import _ from "lodash";
import { groupsMock } from "../mock/groups";
import { TTournament } from "../models/tournament";

export const TournamentType = new GraphQLObjectType({
  name: "Tournament",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    groups: {
      type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(GroupType))),
      resolve(parent: TTournament, _args) {
        return groupsMock.filter((group) =>
          parent.groupsId?.includes(group.id)
        );
      },
    },
  }),
});