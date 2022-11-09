const Task = require('../models/Task');

const getAllTask = (req,res) => {
    res.send('get all tasks');
}

const creatTask = async (req,res) => {
    console.log('creating task ')
    const task = await Task.create(req.body);
    res.status(201).json({task});
}

const getTask = (req,res) => {
    res.send('get single tasks');
}

const updateTask = (req,res) => {
    res.send('update tasks');
}

const deleteTask = (req,res) => {
    res.send('delete tasks');
}

module.exports= {
    getAllTask,
    creatTask,
    getTask,
    updateTask,
    deleteTask,
}