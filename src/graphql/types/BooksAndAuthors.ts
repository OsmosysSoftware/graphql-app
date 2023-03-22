import builder from "../../utils/schemaBuilder.js";
const BooksAndAuthors = builder.prismaObject("BooksAndAuthors", {
  fields: (t) => ({
    author_id: t.exposeID("author_id"),
    book_id: t.exposeID("book_id"),
    book: t.relation("book"),
    author: t.relation("author"),
  }),
});
export default BooksAndAuthors;
