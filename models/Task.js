const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    name : {
        type: String,
        required: [true,'must provide name'],
        trim : true,
        maxLength:[20, 'name must be at least 20 characters']
    },

    completed : Boolean,
});

module.exports = mongoose.model('Task', TaskSchema);