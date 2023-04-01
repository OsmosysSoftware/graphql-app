import prisma from "../../../utils/PrismaClient.js";
import builder from "../../../utils/schemaBuilder.js";

builder.mutationField("deleteGenre", (t) =>
  t.prismaField({
    type: "Genre",
    args: {
      id: t.arg.int(),
      name: t.arg.string(),
    },
    resolve: async (_query, _parent, args) => {
      const deletedGenre = await prisma.genre.delete({
        where: {
          id: args.id ? args.id : undefined,
          name: args.name ? args.name : undefined,
        },
      });
      return deletedGenre;
    },
  })
);
