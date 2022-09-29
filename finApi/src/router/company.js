const express = require('express')
const router = express.Router()
const company = require('../db/data.json')


router.get('/companies', ( req, res) => {
  res.send(company)
})


module.exports = router