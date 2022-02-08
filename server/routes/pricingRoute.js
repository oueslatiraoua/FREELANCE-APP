const express = require("express");
const router = express.Router();
const {
  addPrices,
  deletePrices,
} = require("../controllers/pricingControllers.js");
const middleware = require("../middelware/authmiddelware.js");
router.post("/addPrices/:id", middleware, addPrices);
router.delete("/deletePrices/:id/:priceId", middleware, deletePrices);

module.exports = router;
