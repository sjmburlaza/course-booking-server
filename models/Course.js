const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, 'Course name is required.']
	},
	description: {
		type: String,
		required: [true, 'Description is required.']
	},
	price: {
		type: Number,
		required: [true, 'Price is required.']
	},
	isActive: {
		type: Boolean,
		default: true
	},
	createdOn: {
		type: Date,
		default: new Date()
	},
	enrollees: [
		{
			userId: {
				type: String,
				required: [true, 'User ID is required.']
			},
			enrolledOn: {
				type: Date,
				default: new Date()
			}
		}
	]
});

module.exports = mongoose.model('Course', CourseSchema);