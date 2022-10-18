const express = require('express')
const Student = require('../models/studentModels')
const {
    getAllStudents,
    getStudent,
    createNewStudent,
    updateStudent,
    deleteStudent
} = require('../controller/studentController')

const router = express.Router()


router.get('/', getAllStudents)

router.get('/:id', getStudent)

router.post('/', createNewStudent)

router.patch('/:id', updateStudent)

router.delete('/:id', deleteStudent)

module.exports = router