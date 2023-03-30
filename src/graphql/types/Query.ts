import prisma from "../../utils/PrismaClient.js";
import builder from "../../utils/schemaBuilder.js";

const Query = builder.queryType({
  fields: (t) => ({
    // books: t.prismaField({
    //   type: ["Book"],
    //   resolve: async () => {
    //     return await prisma.book.findMany();
    //   },
    // }),
    books:t.prismaConnection({
      type:"Book",
      cursor:"id",
      resolve:async (query)=>{
        return await prisma.book.findMany({...query});
      }
    }),
    // authors: t.prismaField({
    //   type: ["Author"],
      
    //   resolve: async () => {
    //     return await prisma.author.findMany();
    //   },
    // }),
    authors:t.prismaConnection({
      type: "Author",
      cursor:"id",
      resolve:async (query)=>{
        return await prisma.author.findMany({...query});
      }
    }),
    book: t.prismaField({
      type: "Book",
      args: { id: t.arg.int({ required: true }) },
      resolve: async (_, __, args) => {
        return await prisma.book.findUniqueOrThrow({
          where: {
            id: args.id,
          },
        });
      },
    }),
    author: t.prismaField({
      type: "Author",
      args: { id: t.arg.int({ required: true }) },
      resolve: async (_, __, args) => {
        return await prisma.author.findUniqueOrThrow({
          where: {
            id: args.id,
          },
        });
      },
    }),
  }),
});

export default Query;
