const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema(
    {
        name:{
            type:'string',
            required:true
        },
        status:{
            type: 'string'
        }
    }
)

module.exports = mongoose.models.Task ?? mongoose.model('task', taskSchema);