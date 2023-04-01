import prisma from "../../../utils/PrismaClient.js";
import builder from "../../../utils/schemaBuilder.js";

builder.mutationField("deleteAuthor", (t) =>
  t.prismaField({
    type: "Author",
    args: {
      id: t.arg.int(),
      name: t.arg.string(),
    },
    resolve: async (_query, _parent, args) => {
      const deletedAuthor = await prisma.author.delete({
        where: {
          id: args.id ? args.id : undefined,
          name: args.name ? args.name : undefined,
        },
      });
      return deletedAuthor;
    },
  })
);
