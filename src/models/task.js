const schema = require('./schemas/task');

const addTask = async (tasks)=>{
    return await schema.create(tasks)
}

const getTasks = async () =>{
    return await schema.find()
}

const deleteTaskByName = async (taskName) =>{
    return await schema.deleteOne({name:taskName});
}

module.exports = {
    addTask,
    getTasks,
    deleteTaskByName
}