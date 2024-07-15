const express = require("express");
const {PhonesModel} = require("../models/phoesModel");
const router = express.Router();

// הגדרת ראוטר של הרואט שנגדיר באפ
router.get("/Q3",async(req,res) => {
  try {
    const phones = await PhonesModel.find()
      .sort({ total_score: -1 })  // מיון לפי הציון הכולל מהגבוה לנמוך
      .skip(3)                    // דילוג על 3 הראשונים
      .limit(3);                  // הגבלה ל-3 תוצאות

    res.json(phones);
  } catch (err) {
    console.error(err.message);
    res.status(500).send(err.message);
  }
})

// export default
module.exports = router;