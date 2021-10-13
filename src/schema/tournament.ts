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
import { TeamType } from "./team";
import { teamsMock } from "../mock/teams";
import { TGetTournamentsParams } from "./root";
import { PlayOffsType } from "./playOffs";

export const TournamentType = new GraphQLObjectType({
  name: "GetTournament",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    teams: {
      type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(TeamType))),
      resolve(parent: TTournament & TGetTournamentsParams) {
        const teams = teamsMock.filter((team) =>
          parent.teamsId?.includes(team.id)
        );
        const selectedTeam =
          parent.teamId && teams.find((team) => team.id === parent.teamId);
        return parent.groupId ? (selectedTeam ? [selectedTeam] : []) : teams;
      },
    },
    groups: {
      type: new GraphQLList(new GraphQLNonNull(GroupType)),
      resolve(parent: TTournament & TGetTournamentsParams) {
        if (!parent.groupsId) {
          return null;
        }
        const groups = groupsMock.filter((group) =>
          parent.groupsId?.includes(group.id)
        );
        const selectedGroup =
          parent.groupId && groups.find((group) => group.id === parent.groupId);
        return parent.groupId ? (selectedGroup ? [selectedGroup] : []) : groups;
      },
    },
    playOffs: {
      type: new GraphQLNonNull(PlayOffsType),
      resolve(parent: TTournament & TGetTournamentsParams) {
        return parent;
      },
    },
  }),
});

// **************** EXAMPLE QUERY ******************
// query($id: ID){
//   GetTournament(id: $id) {
//     id
//     name
//     groups{
//       id
//       name
//     }
//   }
// }
