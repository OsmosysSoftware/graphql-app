import "./types/Query.js";
import "./types/Book.js";
import "./types/Author.js";
import "./types/BooksAndAuthors.js";

import builder from "../utils/schemaBuilder.js";
const schema = builder.toSchema();
export default schema;
