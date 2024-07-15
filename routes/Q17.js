const express = require("express");
const { PhonesModel } = require("../models/phoesModel");
const router = express.Router();

router.get("/q17", async (req, res) => {
  try {
    const data = await PhonesModel.aggregate([
      { $group: { _id: "$company_id", avgPrice: { $avg: "$price" } } }
    ]);
    res.json(data);
  } catch (err) {
    console.error(err.message);
    res.status(500).send(err.message);
  }
});

// export default
module.exports = router;