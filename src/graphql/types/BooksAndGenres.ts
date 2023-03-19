import builder from "../../utils/schemaBuilder.js";

const BooksAndGenres = builder.prismaObject("BooksAndGenres", {
  fields: (t) => ({
    book_id: t.exposeID("book_id"),
    genre_id: t.exposeID("genre_id"),
    book: t.relation("book"),
    genre: t.relation("genre"),
  }),
});
export default BooksAndGenres;
