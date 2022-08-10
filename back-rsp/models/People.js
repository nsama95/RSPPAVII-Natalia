const mongoose = require('mongoose');

const {model, Schema} = mongoose;


const starwarsSchema = new Schema({
        nombre : {type: String, required : true},
        altura : {type: Number, required : true, min : 0, max : 500},
        color_pelo : {type: String, required : true},
        color_ojos :{type: String, required : true},
});



starwarsSchema.set('toJSON', {
    transform:( (document, starwarsToJSON) => {

        starwarsToJSON.id = starwarsToJSON._id.toString();
        delete starwarsToJSON._id;
        delete starwarsToJSON.__v;

    })
})

module.exports = model('starwarsPeople', starwarsSchema);
