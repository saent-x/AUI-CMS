const mongoose = require("mongoose");
const Joi = require("joi");

const StaffSchema = new mongoose.Schema({
	Name: String,
	StaffNo: String,
	Department: String,
	EmailAddress: String,
	Password: String,
	AssignedComplaints: [{ type: mongoose.Schema.Types.ObjectId, ref: "Complaint" }]
});

function ValidateStaff(staff) {
	const schema = {
		Name: Joi.string().required(),
		Password: Joi.string()
			.min(8)
			.required(),
		StaffNo: Joi.string().required(),
		Department: Joi.string().required(),
		EmailAddress: Joi.string()
			.email()
			.required()
	};

	return Joi.validate(staff, schema);
}

const Staff = mongoose.model("Staff", StaffSchema);

module.exports = { Staff, StaffSchema, ValidateStaff };
