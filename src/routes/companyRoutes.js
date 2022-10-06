const express = require('express');
const router = express.Router();

const {fetchAllComp, fetchSingleComp, postCompany,updateCompany,deleteCompany} = require('../controllers/companies.js')

router.get('/companies', fetchAllComp);
router.get('/companies/:id', fetchSingleComp);
router.post('/companies/', postCompany);
router.patch('/companies/:id', updateCompany);
router.delete('/companies/:id', deleteCompany);


module.exports = router;