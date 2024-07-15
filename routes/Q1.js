const express = require("express");
const {PhonesModel} = require("../models/phoesModel");
const router = express.Router();

// הגדרת ראוטר של הרואט שנגדיר באפ
router.get("/Q1",async(req,res) => {
  try{
    const categories = await PhonesModel.find()
    .sort({ _id: 1 })
    .limit(10); // מיון לפי ID מהקטן לגדול והגבלה ל-10 תוצאות

    res.json(categories);
  }catch(err){
    console.error(err.message);
    res.status(500).send(err.message);
  }
})

// export default
module.exports = router;