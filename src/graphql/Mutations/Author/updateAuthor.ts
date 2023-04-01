import prisma from "../../../utils/PrismaClient.js";
import builder from "../../../utils/schemaBuilder.js";
import { AuthorInput, BookInput } from "../../Types/input.js";

builder.mutationField("updateAuthor", (t) =>
  t.prismaField({
    type: "Author",
    args: {
      id: t.arg.int(),
      name: t.arg.string(),
      author: t.arg({ type: AuthorInput }),
      books: t.arg({ type: [BookInput] }),
    },
    resolve: async (_query, _parent, args) => {
      const updatedAuthor = await prisma.author.update({
        where: {
          id: args.id ? args.id : undefined,
          name: t.arg.name ? t.arg.name : undefined,
        },
        data: {
          name: args.author?.name,
          email: args.author?.email,
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
      return updatedAuthor;
    },
  })
);
