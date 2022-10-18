const Student = require('../models/studentModels')
const mongoose = require('mongoose')


// get all Student
const getAllStudents= async (req, res) => {
    const students = await Student.find({}).sort({createdAt: -1})

    res.status(200).json(students)
}

// get single student 
const getStudent = async (req, res) => {
    const {id} = req.params
    
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No Such student is found!"})
    }

    const student = await Student.findById({_id: id})

    if(!student) {
        return res.status(404).json({error: "No such student is found"})
    }

    res.status(200).json(student)
}

// post a new student
const createNewStudent = async (req,res) => {
    const {name,age,batch,payment} = req.body
    
    try{
        const student = await Student.create({name,age,batch,payment})
        res.status(201).json(student)
    }catch(error) {
        res.status(400).json({error: error.message})
    }
}

// update a student
const updateStudent = async (req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No such student is found!"})
    }
    const student = await Student.findOneAndUpdate({_id: id}, {...req.body})

    if(!student){
        res.status(400).json({error: "No such student"})
    }

    res.status(200).json(student)
}

const deleteStudent = async (req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No such student is found"})
    }

    const student = await Student.findOneAndDelete({_id: id})

    if(!student) {
        return res.status(400).json({error: "No such student"})
    }

    res.status(200).json(student)
}

module.exports = {
    getAllStudents,
    getStudent,
    createNewStudent,
    updateStudent,
    deleteStudent
}