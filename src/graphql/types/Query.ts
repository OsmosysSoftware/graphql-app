import builder from "../../utils/schemaBuilder.js";

const Query = builder.queryType({
  fields: (t) => ({
    books: t.prismaField({
      type: ["Book"],
      args: { id: t.arg.id({ required: true }) },
      resolve: () => {
        return [];
      },
    }),
  }),
});

export default Query;
