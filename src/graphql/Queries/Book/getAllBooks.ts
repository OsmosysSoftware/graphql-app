import prisma from "../../../utils/PrismaClient.js";
import builder from "../../../utils/schemaBuilder.js";

builder.queryField("getAllBooks", (t) =>
  t.prismaConnection({
    type: "Book",
    cursor: "id",
    resolve: async (query) => {
      return await prisma.book.findMany({ ...query });
    },
  })
);
