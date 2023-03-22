import builder from "../../utils/schemaBuilder.js";

const Genre = builder.prismaObject("Genre", {
  fields: (t) => ({
    id: t.exposeID("id"),
    name: t.exposeString("name"),
    books: t.relation("books"),
  }),
});
export default Genre;
