const starwarsRouter = require('express').Router();
const People = require('../models/People');
const { verifyToken } = require('../utils/middelwares');



//TOKEN 

starwarsRouter.use(verifyToken);

//traer todos
starwarsRouter.get("/", (req, res, next) => {

    People.find({}).then(personajes => {
            res.json(personajes);
    })
    
    .catch (error => {

        next(error);
    })

});

//traer por id
starwarsRouter.get("/:id", (req, res, next) => {

    const id = req.params.id;

    People.findById(id).then(personaje => {

        if (personaje){
            res.json(personaje);
        }

        res.status(404).end();

    })

    .catch( error => {

        next(error);
    })

});

//borrar personaje
starwarsRouter.delete("/:id", (req, res, next) => {

    const id = req.params.id;

    People.findByIdAndRemove(id)
    
    .then(result => {

        if (result){
            res.status(204).end();
        }
        res.status(404).end();
    })
    
    .catch( error => {

        next(error);
    })

});

//alta de personaje 
starwarsRouter.post("/", (req, res, next) => {

    const {nombre, altura, color_pelo, color_ojos} = req.body;

        const nuevoPersonaje = new People({
            nombre, altura, color_pelo, color_ojos
        });

        nuevoPersonaje.save()

        .then(People => res.json(People))
        
        .catch( (error) => {
            next (error);
        })

});



//modificar personaje
starwarsRouter.put("/:id", (req, res, next) => {

    const id = req.params.id;

    const {nombre, altura, color_pelo, color_ojos} = req.body;

    const info = {nombre, altura, color_pelo, color_ojos}; 
    const infoUpdate ={};

    if (nombre)
    {
        infoUpdate.nombre = nombre;
    }

    if (altura)
    {
        infoUpdate.altura = altura;
    }

    if (color_pelo)
    {
        infoUpdate.color_pelo = color_pelo;
    }

    if (color_ojos)
    {
        infoUpdate.color_ojos = color_ojos;
    }

    
    People.findByIdAndUpdate(id, info, {new:true}).then(People => {

       if(People)
        res.json(People);
        res.status(400).end();
    })

    .catch( error => {

        next (error);
    }) 

});

module.exports = starwarsRouter;