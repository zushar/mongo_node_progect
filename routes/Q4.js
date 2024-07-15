const express = require("express");
const { PhonesModel } = require("../models/phoesModel");
const router = express.Router();

router.get("/Q4", async (req, res) => {
  try {
    const phone = await PhonesModel.findOne({ name: "Mi 10" });// שימוש ב findOne לשליפת מכשיר עם השם "Mi 10"
    if (!phone) {
      return res.status(404).send('Phone not found');
    }
    res.json(phone);
  } catch (err) {
    console.error(err.message);
    res.status(500).send(err.message);
  }
});

// export default
module.exports = router;