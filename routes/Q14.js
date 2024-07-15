const express = require("express");
const { PhonesModel } = require("../models/phoesModel");
const router = express.Router();

router.get("/q14", async (req, res) => {
  try {
    const data = await PhonesModel.find({
      $or: [
        { battery_score: 76 },
        { company_id: "2" }
      ]
    }).sort({ price: -1 });
    res.json(data);
  } catch (err) {
    console.error(err.message);
    res.status(500).send(err.message);
  }
});

// export default
module.exports = router;