const express = require("express");
const { PhonesModel } = require("../models/phoesModel");
const router = express.Router();

router.get("/q15", async (req, res) => {
  try {
    const data = await PhonesModel.find({
      $and: [{ battery_score: 76 }, { company_id: "4" }]
    });
    res.json(data);
  } catch (err) {
    console.error(err.message);
    res.status(500).send(err.message);
  }
});

// export default
module.exports = router;