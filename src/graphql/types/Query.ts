import prisma from "../../utils/PrismaClient.js";
import builder from "../../utils/schemaBuilder.js";

const Query = builder.queryType({
  fields: (t) => ({
    books: t.prismaField({
      type: ["Book"],
      resolve: async () => {
        return await prisma.book.findMany();
      },
    }),
    authors: t.prismaField({
      type: ["Author"],
      resolve: async () => {
        return await prisma.author.findMany();
      },
    }),
  }),
});

export default Query;
