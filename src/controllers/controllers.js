const { getTasks, addTask, deleteTaskByName } = require('../models/task');

module.exports = class Controllers {

  renderHome(req, res) {
    res.status(200).render('home');
  }

  getAll(req, res) {
    getTasks()
      .then((tasks) => {
        console.log('Tareas obtenidas:', tasks);
        res.render('task', { tasks });
      })
      .catch((err) => {
        console.log('Error al obtener tareas', err);
        res.status(500).send('Error');
      });
  }



  newsTask(req, res) {

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
        res.status(500).send('Error');
      })
  };

  deleteTaskByName(req, res) {
    const taskName = req.body.taskName;

    deleteTaskByName(taskName)
      .then(() => {
        console.log('Tarea eliminada con éxito');
        res.redirect('/task');
      })
      .catch((err) => {
        console.log('Error al eliminar tarea', err);
        res.status(500).send('Error');
      });
  }

}