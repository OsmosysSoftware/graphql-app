# Introduction

GraphQL is an open-source data query and manipulation language for APIs, and a runtime for fulfilling queries with existing data. GraphQL has grown in popularity over the years. It's allowed API developers to easily provide a consistent interface to users.

For this task, it is recommended that 2 people work together. Expect to spend around **50-65 hours** to complete this task.

# Resources

1. https://www.slideshare.net/rizafahmi/graphql-story-intro-to-graphql
2. https://graphql.org/
3. https://graphql.org/learn/
4. Popular GraphQL questions on StackOverflow: https://stackoverflow.com/questions/tagged/graphql?tab=Votes
5. https://www.youtube.com/watch?v=Y0lDGjwRYKw&list=PL4cUxeGkcC9iK6Qhn-QLcXCXPQUov1U7f
6. https://wundergraph.com/blog/why_not_use_graphql and other good related blogs
7. Popular discussions around GraphQL: https://hn.algolia.com/?q=GraphQL

# Deliverables

## 1. Demo API Application

The demo application can be created in any programming language that has a good GraphQL library, though I believe JavaScript has the best supported library.

### Entities

We're building a simple book library. The following entities should be present,

**Books**

- Can have multiple genres
- Can have multiple authors

**Authors**

- Can have multiple books

**Genres**

### API Endpoints

#### Fetch APIs

All APIs must be paginated and sort-able.

1. All books along with author
2. All books for an author.
3. All books for a genre.
4. All books for a genre and author.
5. All authors with number of books they have
6. All genres with number of books they have

#### Other APIs

Following mutation APIs must be provided,

1. Books, associate them with authors and genres
2. Authors
3. Genres

Mutations include CREATE / UPDATE / DELETE. Some rules to follow,

- Authors with books cannot be deleted unless books are deleted first
- Genres with books cannot be deleted unless books are deleted first

## 2. Give a presentation

The presentation can cover a variety of topics, but must cover the following,

1. What is GraphQL?
2. How does it work?
3. When and why to use GraphQL? What are the benefits?
4. When not to use GraphQL?
5. Best practices
6. Some real life use-cases of companies using GraphQL
7. Where to find code for the demo applications? Resources used to learn?

## Bonus

Not included in the original task.
Check out: https://www.graphile.org/postgraphile/introduction/
