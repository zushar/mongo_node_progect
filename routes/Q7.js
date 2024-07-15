const express = require("express");
const { CompaniesModel } = require("../models/companiesModel");
const router = express.Router();

router.put("/q7", async (req, res) => {
  try {
    const updatedCompany = await CompaniesModel.findOneAndUpdate(
        { name: req.body.name },
        { country: req.body.country },
        { new: true }
    );
    if (!updatedCompany) {
      return res.status(404).send('Company not found');
    }
    res.json(updatedCompany);
  } catch (err) {
    console.error(err.message);
    res.status(500).send(err.message);
  }
});

// export default
module.exports = router;
//curl -X PUT http://localhost:3000/q7 -H "Content-Type: application/json" -d "{\"name\":\"LG\", \"country\":\"SOUTH KOREA\"}"