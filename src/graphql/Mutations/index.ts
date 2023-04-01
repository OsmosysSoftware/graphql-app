// import "../resolvers/Book/addBook.js";
import builder from "../../utils/schemaBuilder.js";
// import "./Book/addBook.js";
import "./Book/createBook.js";
import "./Book/updateBook.js";
import "./Book/deleteBook.js";
import "./Author/createAuthor.js";
import "./Author/updateAuthor.js";
import "./Author/deleteAuthor.js";
import "./Genre/createGenre.js";
import "./Genre/updateGenre.js";
import "./Genre/deleteGenre.js";

builder.mutationType({});
