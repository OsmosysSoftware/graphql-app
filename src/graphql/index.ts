import "./Types/Book.js";
import "./Types/Author.js";
import "./Types/Genre.js";
import "./Types/BooksAndAuthors.js";
import "./Types/BooksAndGenres.js";
import "./Mutations/index.js";
import "./Queries/index.js";

import builder from "../utils/schemaBuilder.js";
const schema = builder.toSchema();
export default schema;
