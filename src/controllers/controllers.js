
module.exports=class Controllers{

    renderHome(req, res) {
        res.render('home'); 
    }

    getTask(req, res){
        res.sen('Todas las tareas aca')
    }

}