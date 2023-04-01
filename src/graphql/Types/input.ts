import builder from "../../utils/schemaBuilder.js";

export const AuthorInput = builder.inputType("authorInput", {
  fields: (t) => ({
    name: t.string({ required: true }),
    email: t.string(),
  }),
});
export const BookInput = builder.inputType("bookInput", {
  fields: (t) => ({
    name: t.string({ required: true }),
    description: t.string(),
  }),
});
export const GenreInput = builder.inputType("genreType", {
  fields: (t) => ({
    name: t.string({ required: true }),
  }),
});
