const fs = require("fs").promises;
const { toGraphQLTypeDefs } = require("@neo4j/introspector");
const neo4j = require("neo4j-driver");

const {
  DB_USERNAME,
  DB_PASSWORD,
  DB_URL,
  TYPE_DEFS_PATH,
} = require("./environment");

async function introspect() {
  const driver = neo4j.driver(
    DB_URL,
    neo4j.auth.basic(DB_USERNAME, DB_PASSWORD)
  );

  const sessionFactory = () =>
    driver.session({ defaultAccessMode: neo4j.session.READ });

  const typeDefs = await toGraphQLTypeDefs(sessionFactory);

  await fs.writeFile(TYPE_DEFS_PATH, typeDefs);

  await driver.close();
}

introspect();
