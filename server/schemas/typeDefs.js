const { gql } = require('apollo-server-express');

const typeDefs = gql`
  # Define which fields are accessible from the Book model
  
  type User {
    _id: ID
    username: String
    email: String
    password: String
    savedBooks: [Book]!
  }

  type Book {
    _id: ID
    authors: String
    description: String
    bookId: String
  }

  # Define which queries the front end is allowed to make and what data is returned
  type Query {
    books: [Book]
    users: [User]
  }
`;

module.exports = typeDefs;