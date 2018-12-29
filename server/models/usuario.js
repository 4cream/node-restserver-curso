const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let usuarioSchema = new Schema({

  nombre:{
    type: String,
    required: [true, "El nombre es necesario"]
  },
  email:{
    type:String,
    required: [true, "El correo es necesario"]
  },
  password:{
    type: String,
    required: [true, "El password es necesario"]
  },
  img:{
    type: String,
    required:false
  },
  role:{
    type: String,
    default:'USER_ROL'
  },
  estado:{
    type: Boolean,
    default: true
  },
  google:{
    type: Boolean,
    default: false
  }

});


module.exports = mongoose.model('Usuario', usuarioSchema);
// se va a llamar Usuario y va a tener toda la configuracion de usuarioSchema
