const express = require('express');
const router = express.Router();

const {getAllTask,getTask,creatTask,updateTask,deleteTask} = require('../controllers/tasks');

router.route('/').get(getAllTask).post(creatTask);
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask);

module.exports = router;