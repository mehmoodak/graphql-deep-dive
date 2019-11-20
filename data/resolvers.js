class Friend {
	constructor(id, { firstName, lastName, gender, language, email, age, contacts }) {
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.gender = gender;
		this.language = language;
		this.email = email;
		this.age = age;
		this.contacts = contacts;
	}
}

const friendDatabase = {};

// resolver map
const resolvers = {
	Query: {
		getFriend: (root, {id}) => {
			return new Friend(id, friendDatabase[id]);
		},
	},

	Mutation: {
		createFriend: (root, { input }) => {
			let id = require('crypto').randomBytes(10).toString('hex');
			friendDatabase[id] = input;
			return new Friend(id, input);
		},
	},
};

export default resolvers;
