import { GraphQLList, GraphQLNonNull, GraphQLObjectType } from "graphql";
import { groupsMock } from "../mock/groups";
import { TTournament } from "../models/tournament";
import { BracketType } from "./bracket";
import { GroupType } from "./group";
import { TGetTournamentsParams } from "./root";

export const PlayOffsType = new GraphQLObjectType({
  name: "PlayOffs",
  fields: () => ({
    bracket: {
      type: BracketType,
      resolve(parent: TTournament & TGetTournamentsParams) {
        if (!parent.playOffs?.gamesId) {
          return null;
        }
        return parent;
      },
    },
    groups: {
      type: new GraphQLList(new GraphQLNonNull(GroupType)),
      resolve(parent: TTournament & TGetTournamentsParams) {
        if (!parent.playOffs?.groupsId?.length) {
          return null;
        }
        const groups = groupsMock.filter((group) =>
          parent.playOffs?.groupsId?.includes(group.id)
        );
        const selectedGroup =
          parent.groupId && groups.find((group) => group.id === parent.groupId);
        return parent.groupId
          ? selectedGroup
            ? [selectedGroup]
            : null
          : groups.length
          ? groups
          : null;
      },
    },
  }),
});
