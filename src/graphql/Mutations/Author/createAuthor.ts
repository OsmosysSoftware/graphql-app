import prisma from "../../../utils/PrismaClient.js";
import builder from "../../../utils/schemaBuilder.js";
import { AuthorInput } from "../../Types/input.js";

builder.mutationField("createAuthor", (t) =>
  t.prismaField({
    type: "Author",
    args: {
      author: t.arg({ type: AuthorInput, required: true }),
    },
    resolve: async (_, __, args) => {
      const authorCreated = await prisma.author.create({
        data: {
          name: args.author?.name,
          email: args.author?.email,
        },
      });
      return authorCreated;
    },
  })
);
