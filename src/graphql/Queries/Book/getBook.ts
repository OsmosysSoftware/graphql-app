import prisma from "../../../utils/PrismaClient.js";
import builder from "../../../utils/schemaBuilder.js";

builder.queryField("getBook", (t) =>
  t.prismaField({
    type: "Book",
    args: {
      id: t.arg.int(),
      name: t.arg.string(),
    },
    resolve: async (_, __, args) => {
      return await prisma.book.findUniqueOrThrow({
        where: {
          id: args.id ? args.id : undefined,
          name: args.name ? args.name : undefined,
        },
      });
    },
  })
);
