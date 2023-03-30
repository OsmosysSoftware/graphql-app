import prisma from "../../../utils/PrismaClient.js";
import builder from "../../../utils/schemaBuilder.js";

builder.mutationField("deleteBook", (t) =>
  t.prismaField({
    type: "Book",
    args: {
      id: t.arg.int({ required: true }),
    },

    resolve: async (_, __, args) => {
      try {
        const { id } = args;
        return await prisma.book.delete({
          where: {
            id: id,
          },
        });
      } catch (err) {
        throw typeof err;
      }
    },
  })
);
