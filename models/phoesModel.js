const mongoose = require("mongoose");
const Joi = require("joi");

let phoneSchema = new mongoose.Schema({
  name: String,
  cpu: String,
  company_id: {
      type:String, ref:"companies"
    },
  gpu: String,
  battery_score: String,
  total_score: String,
  price: Number,
}, { timestamps: true });

exports.PhonesModel = mongoose.model("Phone", phoneSchema);

exports.validatePhones = (_reqBody) => {
  let joiSchema = Joi.object({
    name: Joi.string().min(2).max(200).required(),
    cpu: Joi.string().min(2).max(200).required(),
    company_id: Joi.string().min(2).max(200).required(),
    gpu: Joi.string().min(2).max(200).required(),
    battery_score: Joi.string().min(2).max(200).required(),
    total_score: Joi.string().min(2).max(200).required(),
    price: Joi.number().min(1).max(10000).required(),
  });
  return joiSchema.validate(_reqBody);
};
