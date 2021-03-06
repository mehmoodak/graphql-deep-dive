import { Friend } from './dbConnectors';

// resolver map
const resolvers = {
	Query: {
		getFriend: (root, { id }) => {
			return new Promise((resolve, reject) => {
				Friend.findById(id, (err, friend) => {
					if (err) reject(err);
					else resolve(friend);
				});
			});
		},
	},

	Mutation: {
		createFriend: (root, { input }) => {
			const newFriend = new Friend({
				firstName: input.firstName,
				lastName: input.lastName,
				gender: input.gender,
				age: input.age,
				language: input.language,
				email: input.email,
				contacts: input.contacts,
			});

			return new Promise((resolve, reject) => {
				newFriend.save(err => {
					if (err) reject(err);
					else resolve(newFriend);
				});
			});
		},
		updateFriend: (root, { input }) => {
			return new Promise((resolve, object) => {
				Friend.findOneAndUpdate({ _id: input.id }, input, { new: true }, (err, friend) => {
					if (err) reject(err);
					else resolve(friend);
				});
			});
		},
		deleteFriend: (root, { id }) => {
			return new Promise((resolve, object) => {
				Friend.remove({ _id: id }, (err) => {
					if (err) reject(err);
					else resolve('Successfully deleted');
				});
			});
		}
	},
};

export default resolvers;
