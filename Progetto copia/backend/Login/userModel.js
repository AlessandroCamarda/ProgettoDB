const mongoose = require("mongoose");
const bcrypt = require('bcrypt');


const userSchema = mongoose.Schema({
  username: String,
  password: String,
  firstName: String,
  lastName: String
})

userSchema.pre("save", function(next) {    // il codice deve essere eseguito prima di salvare l'utente nel DB
  const user = this;   // oggetto salvato nel DB
  bcrypt.hash(user.password, 10).then(hashedPassword => {  // bcrypt genera un hash della password, prende user.password e la hasha con compessità di lavoro 10
    user.password = hashedPassword;   // assegna la password hashata ad user.password
    next(); //termina l'utilizzo del middleware
  })
})

module.exports = mongoose.model('User', userSchema)