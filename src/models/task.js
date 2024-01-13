const taskSchema = require('./schemas/task');

const addTask = async (tasks)=>{
    return await schema.create(tasks)
}

const getTasks = async () =>{
    return await schema.find()
}

module.exports = {
    addTask,
    getTasks
}