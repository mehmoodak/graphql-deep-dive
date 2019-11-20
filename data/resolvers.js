class Friend {
	constructor(id, { firstName, lastName, gender, language, email }) {
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.gender = gender;
		this.language = language;
		this.email = email;
	}
}

const resolvers = {
	friend: () => {
		return {
			"id": 28718992,
			"firstName": "John",
			"lastName": "Doe",
			"gender": "Male",
			"language": "English",
			"email": "me@me.com",
		}
	},
	createFriend: ({ input }) => {
		let id = require('crypto').randomBytes(10).toString('hex');
		return new Friend(id, input);
	}
}

export default resolvers;
