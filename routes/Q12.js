const express = require("express");
const { PhonesModel } = require("../models/phoesModel");
const router = express.Router();

router.get("/q12", async (req, res) => {
  try {
    const data = await PhonesModel.find({ total_score: { $in: [86, 90, 79] } });
    res.json(data);
  } catch (err) {
    console.error(err.message);
    res.status(500).send(err.message);
  }
});

// export default
module.exports = router;