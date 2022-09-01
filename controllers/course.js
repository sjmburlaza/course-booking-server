const Course = require('../models/Course');

module.exports.getAll = () => {
	return Course.find({ isActive: true }).then(courses => courses)
};

module.exports.inactive = () => {
	return Course.find({ isActive: false }).then(courses => courses)
};

module.exports.add = (params) => {
	let course = new Course({
		name: params.name,
		description: params.description,
		price: params.price,
		image: params.image
	})

	return course.save().then((course, err) => {
		return (err) ? false : true
	})
};

module.exports.get = (params) => {
	return Course.findById(params.courseId).then(course => course)
};

module.exports.update = (params) => {
	const updates = {
		name: params.name,
		description: params.description,
		price: params.price,
		image: params.image
	}

	return Course.findByIdAndUpdate(params.courseId, updates).then((doc, err) => {
		return (err) ? false : true
	})
};

module.exports.archive = (params) => {
	const updates = { isActive: false }

	return Course.findByIdAndUpdate(params.courseId, updates).then((doc, err) => {
		return (err) ? false : true
	})
};

module.exports.enable = (params) => {
	const updates = { isActive: true }

	return Course.findByIdAndUpdate(params.courseId, updates).then((doc, err) => {
		return (err) ? false : true
	})
};