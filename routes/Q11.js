const express = require("express");
const { PhonesModel } = require("../models/phoesModel");
const router = express.Router();

router.get("/q11", async (req, res) => {
  try {
    const data = await PhonesModel.find({ price: { $gte: 1300, $lte: 2000 } }).sort({ price: 1 }).limit(4);
    res.json(data);
  } catch (err) {
    console.error(err.message);
    res.status(500).send(err.message);
  }
});

// export default
module.exports = router;