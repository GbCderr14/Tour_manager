const express = require("express");
const Place=require('../models/placedetails')
const {
  getPackages,getPackage,createPackage
} = require("../controllers/packages");

const advancedResults=require('../middleware/advancedResults');
const Package=require('../models/packages'); 


const router = express.Router();
router.route("/").get(getPackages).post(createPackage);
router.route("/:id").get(getPackage);
module.exports = router;
