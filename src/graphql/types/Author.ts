import builder from "../../utils/schemaBuilder.js";

const Author = builder.prismaObject("Author", {
  fields: (t) => ({
    id: t.exposeID("id"),
    email: t.exposeString("email", { nullable: true }),
    name: t.exposeString("name"),
    books: t.relation("books"),
  }),
});

export default Author;
