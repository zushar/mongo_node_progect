const mongoose = require("mongoose");
const Joi = require("joi");

let companySchema = new mongoose.Schema({
  id: String,
  name: String,
  country: String,
});

exports.CompaniesModel = mongoose.model("companies", companySchema);

exports.validateCompanies = (_reqBody) => {
  let joiSchema = Joi.object({
    id: Joi.string().min(1).max(200).required(),
    name: Joi.string().min(2).max(200).required(),
    country: Joi.string().min(2).max(200).required(),
  });
  return joiSchema.validate(_reqBody);
};
