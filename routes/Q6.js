const express = require("express");
const { CompaniesModel, validateCompanies} = require("../models/companiesModel");
const router = express.Router();

router.post("/q6", async (req, res) => {
const { error } = validateCompanies(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  try {
    const newCompany = CompaniesModel(req.body);
    const savedCompany = await newCompany.save();
    res.json(savedCompany);
  } catch (err) {
    console.error(err.message);
    res.status(500).send(err.message);
  }
});

// export default
module.exports = router;
//curl -X POST http://localhost:3000/q6 -H "Content-Type: application/json" -d "{\"id\":\"5\", \"name\":\"LG\", \"country\":\"korea\"}"