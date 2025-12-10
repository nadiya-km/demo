const mongoose = require('mongoose');
const userSchema = new mongoose.Schema(
	{
		// user: {
		// 	name: 'string',
		// 	id: 'string',
		// 	location: 'string',
		// 	email,
		// 	passewrd,
		// 	Role,
		// 	created,
		// },
		name: {
			type: String,
			required: true,
		},
		id: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
			lowercase: true,
		},
		role: {
			type: String,
			enum: ['admin', 'user'],
			default: user,
		},
		password: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);
module.exports = mongoose.model('user', userSchema);
