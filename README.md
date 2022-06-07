# Making the Connection Between GraphQL and Your Neo4j Graph Database

## Setup

Ensure that you have Node.js and npm installed, and run the following command to install dependencies:

```bash
npm install
```

You must have a running database and have the following connection properties in a `.env` file at the root:

- `DB_USERNAME` - username to be used to connect to the running database
- `DB_PASSWORD` - password to be used to connect to the running database
- `DB_URL` - URL at which the running database can be connected to

There must be some GraphQL type definitions in the file `src/type-defs.graphql`, either manually written
or introspected by following the steps in the following section.

## Introspect

To introspect GraphQL type definitions from the data stored within the database specified in your `.env` file,
run the following command:

```bash
npm run introspect
```

This will output a file `src/type-defs.graphql` containing the introspected type definitions.

## Running the server

With database connection details specified in `.env` and type definitions defined in `src/type-defs.graphql`,
you can run the following command to start the server:

```bash
npm start
```

You can then click on the link output in the console to access Apollo Sandbox and run GraphQL queries.
