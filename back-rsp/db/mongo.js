const { connect } = require('mongoose');
const {URI_MONGO} = require("../utils/config");


const conectarBD = async() =>{

    connect(URI_MONGO, {
            useNewUrlParser:true,
            useUnifiedTopology:true,
            useFindAndModify:false
        });
};

conectarBD().then( (result) => {console.log("BD Conectada")}).catch( (error) => console.log(error))