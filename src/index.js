const { ApolloServer } = require("apollo-server");
const { PrismaClient } = require("@prisma/client");

const { getUserId } = require("./utils");

const Query = require("./resolvers/Query");
const Mutation = require("./resolvers/Mutation");
const User = require("./user/User");

const fs = require("fs");
const path = require("path");
const prisma = new PrismaClient();

const resolvers = {
  Query,
  Mutation,
  User,
};

// 3
const server = new ApolloServer({
  typeDefs: [
    fs.readFileSync(path.join(__dirname, "schema.graphql"), "utf8"),
    fs.readFileSync(path.join(__dirname, "./user/schema.graphql"), "utf8"),
    fs.readFileSync(path.join(__dirname, "./device/schema.graphql"), "utf8"),
  ],
  resolvers,
  context: ({ req }) => {
    return {
      ...req,
      prisma,
      userId: req && req.headers.authorization ? getUserId(req) : null,
    };
  },
});

server.listen().then(({ url }) => console.log(`Server is running on ${url}`));
