import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './data/schema';

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
	res.send(`GraphQL is amazing.`);
})

const root = { hello: () => "Hello World!" };

app.use('/graphql', graphqlHTTP({
	schema: schema,
	rootValue: root,
	graphiql: true,
}))

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
})
