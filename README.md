# Library-Graphql API

## API for basic CRUD operations in a Library database in typescript

### About

This is a GraphQL API for a library that can do queries and mutations using GraphQL Apollo Server on a Librarry database that has the following entities

- Book
- Author
- Genre

A book can have many different authors and many authors can write a book, hence **Book** and **Author** are in many-to-many relation.
Similiarly, **Book** and **Genre** are in many-to-many relation.
These relationships are handles via explicit junction tables(join table) inside the database that is set up using [Prisma](https://www.prisma.io/docs/getting-started) as the ORM. You can locally inspect the database with the npm command one the project is set up and running

The API implements cursor based pagination using the pagination specification from [Relay GraphQL specifications](https://relay.dev/graphql/connections.htm)

The API is written in Typescript and ES6 modules and other features like uses top-level await. Inspect the tsconfig.json file for more information

```bash
npx prisma studio
```

### Set up

clone the repository with

```bash
git clone https://github.com/ayush-osmosys/library-graphql.git
cd library-graphql
```

In the library-graphql folder create an environment file named **.env** for setting up local environment with the following variables

- DATABASE_URL="postgres://your-username:your-password@yourhost:DB_PORT/databasename"
- PORT=4000

see **example.env** for example configuration
Make sure postgreSQL is installed and service is started

### Starting the API

Make sure are in the library-graphql directory and node and npm are installed, then install the packaes with npm

```bash
npm i
```

This will install all the required packages

#### Seeding Database

We will use the prisma commands to create and seed the postgres database with the following npm commands

```bash
npx prisma db push
npx prisma db seed
```

#### Run the API

Once everything is set up the graphQL API will be ready to use. To run type in the terminal

```bash
npm run dev
```

### Using the GraphQL API

The documentation for the GraphQL API can be found once the server has started. It will launch the server at <a>http://localhost:PORT</a> with the apollo playground page displaying the API documentation

The GraphQL API has the following Types that abstract the underlying Database. (fields with ? are optional fields)

#### GraphQL Schema

![GraphQL Schema](<./relation_view.jpeg>)

#### Queries

- **getAllBooks** (**after**:ID _cursorID_ **before**:ID _cursorID_ **first**:Int _n_ **Last**:Int _n_): Returns paginated list of **Book**s with their _cursor_ and _pageInfo_ and takes args to return **first** _n_ **Book**s **after** a certain _cursorID_ or **last** _n_ **Book**s **before** a certain _currsorID_

- **getAllAuthors** (**after**:ID _cursorID_ **before**:ID _cursorID_ **first**:Int _n_ **Last**:Int _n_): Returns paginated list of **Author**s with their _cursor_ and _pageInfo_ and takes args to return **first** _n_ **Author**s **after** a certain _currsorID_ or **last** _n_ **Author**s **before** a certain _currsorID_

- **getAllGenres** (**after**:ID _cursorID_ **before**:ID _cursorID_ **first**:Int _n_ **Last**:Int _n_): Returns paginated list of **Genre**s with their _cursor_ and _pageInfo_ and takes args to return **first** _n_ **Genre**s **after** a certain _currsorID_ or **last** _n_ **Genre**s **before** a certain _currsorID_

- **getBook**(**id**:Int _id_ **name**:String _name_ ): returns the **Book** with the specified _id_ or _name_

- **getAuthor**(**id**:Int _id_ **name**:String _name_ ): returns the **Author** with the specified _id_ or _name_

- **getGenre**(**id**:Int _id_ **name**:String _name_ ): returns the **Genre** with the specified _id_ or _name_

#### Mutations

- **createBook**(**book**:_bookInput!_ **authors**:[_authorInput!_] !**genres**: [_genreInput!_]!): creates a new **Book** with the specified arguments
- **createAuthor**(**author**:_authorInput!_ ): creates a new **Author** with the specified arguments

- **createGenre**(**genre**:_genreInput!_ ): creates a new **Genre** with the specified arguments

- **updateBook**( **id**:int **name**:string **book**:_bookInput!_ **authors**:[_authorInput!_] **genres**:[_genreInput!_]): updates the **Book** having the _id_ or _name_ as provided with the specified arguments

- **updateAuthor**(**id**:int **name**:string **author**:_authorInput!_ **books**:[_bookInput!_]): updates the **Author** having the _id_ or _name_ as provided with the specified arguments

- **updateGenre**(**id**:int **name**:string **genre**:_genreInput!_ **books**:[_bookInput!_]):updates the **Genre** having the _id_ or _name_ with the specified arguments

- **deleteBook**(**id**:int **name**:string): deletes the **Book** having the specidfied _id_ or _name_

- **deleteAuthor**(**id**:int **name**:string): deletes the **Author** having the specidfied _id_ or _name_

- **deleteGenre** (**id**:int **name**:string): deletes the **Genre** having the specified _id_ or _name_
