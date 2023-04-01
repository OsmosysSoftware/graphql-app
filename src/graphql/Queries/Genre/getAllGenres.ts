import prisma from "../../../utils/PrismaClient.js";
import builder from "../../../utils/schemaBuilder.js";

builder.queryField("getAllGenres", (t) =>
  t.prismaConnection({
    type: "Genre",
    cursor: "id",
    resolve: async (query) => {
      return await prisma.genre.findMany({ ...query });
    },
  })
);
