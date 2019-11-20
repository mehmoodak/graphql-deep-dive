import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './data/schema';

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
	res.send(`GraphQL is amazing.`);
})

const root = { friend: () => {
	return {
			"id": 28718992,
			"firstName": "Manny",
			"lastName": "Henri",
			"gender": "Male",
			"language": "English",
			"email": "me@me.com"
	}
} };

app.use('/graphql', graphqlHTTP({
	schema: schema,
	rootValue: root,
	graphiql: true,
}))

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
})
