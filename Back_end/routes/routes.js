const router = require('express').Router()

const ConsumerController = require('../Controllers/ConsumerController')

router.post('/getdata' , ConsumerController.ConsumerMain) 

module.exports = router
