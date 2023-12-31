const { Book, User } = require('../models');

// Create the functions that fulfill the queries defined in `typeDefs.js`
const resolvers = {
//   Query: {
//     books: async () => {
//       // Get and return all documents from the classes collection
//       return await Book.find({});
//     }
//   },

  Query: {
    users: async () => {
        return await User.find({})
    }
  }
};

module.exports = resolvers;