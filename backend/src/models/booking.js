const mongoose = require('mongoose');
const bookingSchema = new mongoose.Schema(
	{
		user: {
			id: String,
			required: true,
		},
		car: {
			id: String,
			required: true,
		},
		starDate: {
			type: Date,
			required: true,
		},
		endDate: {
			type: Date,
			required: true,
		},
		totalprice: {
			type: Number,
			required: true,
		},
		status: {
			type: String,
			enum: ['pending', 'confirmed', 'cancelled'],
			required: true,
		},
	},
	{ timestamps: true }
);
module.exports = mongoose.model('booking', bookingSchema);
