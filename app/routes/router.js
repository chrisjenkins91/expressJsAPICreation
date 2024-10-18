//? Import express package
const express = require('express');




const router = express.Router();



router.use('/biloxi', require('./api/restroutes'))


module.exports = router;