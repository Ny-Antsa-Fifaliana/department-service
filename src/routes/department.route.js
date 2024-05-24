const express = require('express');
const departmentController = require('../controller/department.controller');
const router = express.Router();

router.get('/:id', departmentController.findOne);
router.get('/', departmentController.findAll);
router.post('/', departmentController.create);
router.put('/:id', departmentController.update);
router.delete('/:id', departmentController.delete);
module.exports = router;