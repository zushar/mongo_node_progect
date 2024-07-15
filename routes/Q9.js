const express = require("express");
const { PhonesModel } = require("../models/phoesModel");
const router = express.Router();

router.get("/q9", async (req, res) => {
  try {
    const count = await PhonesModel.countDocuments();
    res.json({ count });
  } catch (err) {
    console.error(err.message);
    res.status(500).send(err.message);
  }
});

// export default
module.exports = router;