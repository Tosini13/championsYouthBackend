import { GraphQLID, GraphQLObjectType, GraphQLString } from "graphql";

export const TeamType = new GraphQLObjectType({
  name: "Team",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
  }),
});
