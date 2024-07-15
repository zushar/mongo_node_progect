const express = require("express");
const { CompaniesModel } = require("../models/companiesModel");
const router = express.Router();

router.delete("/q8", async (req, res) => {
  try {
    const deletedCompany = await CompaniesModel.findOneAndDelete({ id: req.body.id });
    res.json(deletedCompany);
  } catch (err) {
    console.error(err.message);
    res.status(500).send(err.message);
  }
});

// export default
module.exports = router;
//curl -X DELETE http://localhost:3000/q8 -H "Content-Type: application/json" -d "{\"id\":\"5\"}"
