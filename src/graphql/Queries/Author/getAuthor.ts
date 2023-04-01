import prisma from "../../../utils/PrismaClient.js";
import builder from "../../../utils/schemaBuilder.js";

builder.queryField("getAuthor", (t) =>
  t.prismaField({
    type: "Author",
    args: {
      id: t.arg.int(),
      name: t.arg.string(),
    },
    resolve: async (_, __, args) => {
      return await prisma.author.findUniqueOrThrow({
        where: {
          id: args.id ? args.id : undefined,
          name: args.name ? args.name : undefined,
        },
      });
    },
  })
);
