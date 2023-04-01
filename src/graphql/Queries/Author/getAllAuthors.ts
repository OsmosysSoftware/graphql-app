import prisma from "../../../utils/PrismaClient.js";
import builder from "../../../utils/schemaBuilder.js";

builder.queryField("getAllAuthors", (t) =>
  t.prismaConnection({
    type: "Author",
    cursor: "id",
    resolve: async (query) => {
      return await prisma.author.findMany({ ...query });
    },
  })
);
