const {getTasks} = require('../models/task');
const {addTask} = require('../models/task')
module.exports=class Controllers{

    renderHome(req, res) {
        res.render('home'); 
    }

    getAll(req, res){

        getTasks()
        .then (res => console.log(res))

        res.render('task')
    }

    newsTask(req, res){

        addTask()
        .then (res => console.log(res))

        res.render('task')

    }

}