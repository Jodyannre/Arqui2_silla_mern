const express = require('express');
const router = express.Router();

// Task Model
const Task = require('../models/task');

// GET all Tasks
router.get('/', async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

// GET all Tasks
router.get('/:id', async (req, res) => {
  const task = await Task.findById(req.params.id);
  res.json(task);
});

// ADD a new task
router.post('/', async (req, res) => {
  const { title, description,numero,dia} = req.body;
  const task = new Task({title, description,numero,dia});
  await task.save();
  res.json(task);
});

// UPDATE a new task
router.put('/:id', async (req, res) => {
  const { title, description,numero,dia } = req.body;
  const newTask = {title, description,numero,dia};
  await Task.findByIdAndUpdate(req.params.id, newTask);
  res.json({status: 'Task Updated'});
});

router.delete('/:id', async (req, res) => {
  await Task.findByIdAndRemove(req.params.id);
  res.json({status: 'Task Deleted'});
});

module.exports = router;
