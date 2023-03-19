import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({});
const seed = async () => {
  try {
    await prisma.book.create({
      data: {
        name: "Book 1",
        description: "description for book 1",
        authors: {
          create: [
            {
              author: {
                connectOrCreate: {
                  where: { name: "Author X" },
                  create: {
                    name: "Author X",
                    email: "authorx@example.com",
                  },
                },
              },
            },
            {
              author: {
                connectOrCreate: {
                  where: { name: "Author Y" },
                  create: {
                    name: "Author Y",
                    email: "authorY@example.com",
                  },
                },
              },
            },
          ],
        },
        genres: {
          create: [
            {
              genre: {
                create: {
                  name: "FICTION",
                },
              },
            },
            {
              genre: {
                create: {
                  name: "THRILLER",
                },
              },
            },
          ],
        },
      },
    });
  } catch (e) {
    console.error(e);
  } finally {
    await prisma.$disconnect();
  }
};
await seed();
