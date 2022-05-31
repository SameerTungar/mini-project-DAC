const express = require('express');
const router = express.Router();

const loginC = require('../controllers/loginController');

router
.get('/',loginC.getLogins)
.post('/' , loginC.insertLogin)
.delete('/:loginid' , loginC.deleteLogin)


module.exports = router;