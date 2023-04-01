import prisma from "../../../utils/PrismaClient.js";
import builder from "../../../utils/schemaBuilder.js";
import { AuthorInput, BookInput, GenreInput } from "../../Types/input.js";

builder.mutationField("updateBook", (t) =>
  t.prismaField({
    type: "Book",

    args: {
      id: t.arg.int(),
      name: t.arg.string(),
      book: t.arg({ type: BookInput }),
      authors: t.arg({ type: [AuthorInput] }),
      genres: t.arg({ type: [GenreInput] }),
    },
    resolve: async (_, __, args) => {
      // return null;
      return await prisma.book.update({
        where: {
          id: args.id ? args.id : undefined,
          name: args.name ? args.name : undefined,
        },

        data: {
          name: args.book?.name,
          description: args.book?.description,

          genres: args.genres
            ? {
                create: args.genres.map((_genre) => ({
                  genre: {
                    connect: {
                      name: _genre.name,
                    },
                  },
                })),
              }
            : undefined,
          authors: args.authors
            ? {
                create: args.authors.map((_author) => ({
                  author: {
                    connect: {
                      name: _author.name,
                    },
                  },
                })),
              }
            : undefined,
        },
      });
    },
  })
);
