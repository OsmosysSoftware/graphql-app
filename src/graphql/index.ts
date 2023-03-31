import "./types/Query.js";
import "./types/Book.js";
import "./types/Author.js";
import "./types/Genre.js";
import "./types/BooksAndAuthors.js";
import "./types/BooksAndGenres.js";
import "./types/Mutation.js";

import builder from "../utils/schemaBuilder.js";
const schema = builder.toSchema();
export default schema;
