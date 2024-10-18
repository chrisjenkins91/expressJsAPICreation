//? IMPORTING OUR RESTARUANT CLASS FROM THE DAO
const daoClass = require('../../dao/restdao');

//? MAking a new object class from the "restdao" classs template
const dao = new daoClass();

const express = require('express');
const router = express.Router();


router.get('/records', (req, res) => {
    dao.findAll(req, res);
})

router.get('/one', (req, res) => {
    dao.findIdOne(req,res);
})

module.exports = router;