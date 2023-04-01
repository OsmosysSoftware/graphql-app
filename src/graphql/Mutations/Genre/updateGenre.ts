import prisma from "../../../utils/PrismaClient.js";
import builder from "../../../utils/schemaBuilder.js";
import { BookInput, GenreInput } from "../../Types/input.js";

builder.mutationField("updateGenre", (t) =>
  t.prismaField({
    type: "Genre",
    args: {
      id: t.arg.int(),
      name: t.arg.string(),
      genre: t.arg({ type: GenreInput }),
      books: t.arg({ type: [BookInput] }),
    },
    resolve: async (_query, _parent, args) => {
      const updatedGenre = await prisma.genre.update({
        where: {
          id: args.id ? args.id : undefined,
          name: args.name ? args.name : undefined,
        },
        data: {
          name: args.genre?.name,
          books: {
            create: args.books?.map((_book) => ({
              book: {
                connect: {
                  name: _book.name,
                },
              },
            })),
          },
        },
      });
      return updatedGenre;
    },
  })
);
