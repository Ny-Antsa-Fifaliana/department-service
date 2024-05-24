const express = require('express');

const router = express.Router();

//----------------------
// API routes
//----------------------
router.get('/', (req, res) => {
    res.json({message: 'Hello api from service Department! 🌈🌈'});
});
router.use('/departments', require('./department.route'));

module.exports = router;