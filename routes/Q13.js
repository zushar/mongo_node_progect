const express = require("express");
const { PhonesModel } = require("../models/phoesModel");
const router = express.Router();

router.get("/q13", async (req, res) => {
  try {
    const data = await PhonesModel.find({}, { name: 1, total_score: 1, _id: 1 }).sort({ company_id: 1 }).limit(10);
    res.json(data);
  } catch (err) {
    console.error(err.message);
    res.status(500).send(err.message);
  }
});

// export default
module.exports = router;