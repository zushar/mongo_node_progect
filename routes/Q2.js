const express = require("express");
const {PhonesModel} = require("../models/phoesModel");
const router = express.Router();

// הגדרת ראוטר של הרואט שנגדיר באפ
router.get("/Q2",async(req,res) => {
  try{
    const categories = await PhonesModel.find()
    .sort({ price: -1 })
    .limit(5); // מיון לפי ID מהקטן לגדול והגבלה ל-10 תוצאות

    res.json(categories);
  }catch(err){
    console.error(err.message);
    res.status(500).send(err.message);
  }
})

// export default
module.exports = router;