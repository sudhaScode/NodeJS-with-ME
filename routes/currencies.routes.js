const express = require('express');
const {getCurrencies, getCurrency} = require('../contollers/currency.controllers')

const router = express.Router();

router.get("/", getCurrencies)
router.get("/:symbol", getCurrency)

module.exports= router;