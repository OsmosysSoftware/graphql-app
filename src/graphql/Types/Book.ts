import builder from "../../utils/schemaBuilder.js";

const Book = builder.prismaObject("Book", {
  fields: (t) => ({
    id: t.exposeID("id"),
    name: t.exposeString("name"),
    description: t.exposeString("description", { nullable: true }),
    isbn: t.exposeString("isbn"),
    genres: t.relation("genres"),
    authors: t.relation("authors"),
  }),
});

export default Book;
