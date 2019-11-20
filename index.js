import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './data/schema';
import resolvers from './data/resolvers';

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
	res.send(`GraphQL is amazing.`);
})

app.use('/graphql', graphqlHTTP({
	schema: schema,
	rootValue: resolvers,
	graphiql: true,
}))

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
})
