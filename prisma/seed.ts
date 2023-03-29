import { PrismaClient } from "@prisma/client";
import { authors, books, booksAndAuthors, booksAndGenres, genres } from "./seedData.js";
const prisma = new PrismaClient();
const seed = async () => {

  await prisma.book.createMany({
    data: books
  })
  await prisma.author.createMany({
    data: authors
  })
  await prisma.genre.createMany({
    data: genres

  })
  for(const relation of booksAndAuthors){
    await prisma.booksAndAuthors.create({
      data:relation
    })
  }
  for(const relation of booksAndGenres){
    await prisma.booksAndGenres.create({
      data:relation
    })
  }


}
await seed();