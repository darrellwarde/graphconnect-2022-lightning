const fs = require("fs").promises;
const { Neo4jGraphQL } = require("@neo4j/graphql");
const { ApolloServer } = require("apollo-server");
const neo4j = require("neo4j-driver");

const {
  DB_USERNAME,
  DB_PASSWORD,
  DB_URL,
  TYPE_DEFS_PATH,
} = require("./environment");

async function main() {
  const typeDefs = await fs.readFile(TYPE_DEFS_PATH, "utf-8");

  const driver = neo4j.driver(
    DB_URL,
    neo4j.auth.basic(DB_USERNAME, DB_PASSWORD)
  );

  const neo4jGraphQL = new Neo4jGraphQL({ typeDefs, driver });

  const schema = await neo4jGraphQL.getSchema();

  const server = new ApolloServer({ schema });

  const { url } = await server.listen();

  console.log(`🚀  Server ready at ${url}`);
}

main();
