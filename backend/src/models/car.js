const mongoose = require('mongoose');
const carSchema = new mongoose.Schema(
	{
		// car: {
		// 	name: 'string',
		// 	id: 'string',
		// 	brand: 'string',
		// 	fueltype: 'string',
		// 	location: 'string',
		// 	seates: 'string',
		// 	priceperday: 'string',
		// 	images: '',
		// 	availability: '',
		// 	descrpition,
		// 	review,/rating,
		// },
		name: {
			type: String,
			required: true,
		},
		brand: {
			type: String,
			required: true,
		},
		model: {
			type: String,
			required: true,
		},
		fuelType: {
			type: String,
			enum: ['Petrol', 'Diesel', 'Electric', 'Hybrid'],
			required: true,
		},
		location: {
			type: String,
			required: true,
		},
		seats: {
			type: Number,
			required: true,
		},
		priceperday: {
			type: Number,
			required: true,
		},
		images: {
			type: [String],
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		rating: {
			type: Number,
			default: 4.5,
			min: 1,
			max: 5,
		},
		availability: {
			type: Boolean,
			default: true,
		},
	},
	{ timestamps: true }
);
module.exports = mongoose.model('Car', carSchema);
