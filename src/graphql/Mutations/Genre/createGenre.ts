import prisma from "../../../utils/PrismaClient.js";
import builder from "../../../utils/schemaBuilder.js";
import { GenreInput } from "../../Types/input.js";

builder.mutationField("createGenre", (t) =>
  t.prismaField({
    type: "Genre",
    args: {
      genre: t.arg({ type: GenreInput, required: true }),
    },
    resolve: async (_query, _parent, args) => {
      const createdGenre = await prisma.genre.create({
        data: {
          name: args.genre.name,
        },
      });
      return createdGenre;
    },
  })
);
