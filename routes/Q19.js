const express = require("express");
const { PhonesModel } = require("../models/phoesModel");
const router = express.Router();

router.get("/q19", async (req, res) => {
  try {
    const data = await PhonesModel.find().populate({ 
      path: 'company_id',
      foreignField:"id"
    });
    res.json(data);
  } catch (err) {
    console.error(err.message);
    res.status(500).send(err.message);
  }
});

// export default
module.exports = router;