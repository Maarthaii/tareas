const {getTasks, addTask} = require('../models/task');

module.exports=class Controllers{

    renderHome(req, res) {
        res.render('home'); 
    }

    getAll(req, res) {
        getTasks()
            .then((tasks) => {
                console.log('Tareas obtenidas:', tasks);
                res.render('task', { tasks }); 
            })
            .catch((err) => {
                console.log('Error al obtener tareas', err);
            });
    }
    


    newsTask(req, res){

        const newTask = {
            name: req.body.name,
            status: req.body.status
        };

        addTask(newTask)
        .then(() => {
            console.log('Tarea añadida con exito');
            res.redirect('/task');
        })
        .catch((err) => {
            console.log('Error al añadir tarea', err);
        })
    }



}