import prisma from "../../../utils/PrismaClient.js";
import builder from "../../../utils/schemaBuilder.js";

builder.queryField("getGenre", (t) =>
  t.prismaField({
    type: "Genre",
    args: {
      id: t.arg.int(),
      name: t.arg.string(),
    },
    resolve: async (_, __, args) => {
      return await prisma.genre.findUniqueOrThrow({
        where: {
          id: args.id ? args.id : undefined,
          name: args.name ? args.name : undefined,
        },
      });
    },
  })
);
