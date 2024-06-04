const User = require('../Login/userModel')
const bcrypt = require('bcrypt')
const jsonwebtoken = require('jsonwebtoken')

module.exports = {
  login: async (req, res) => {
    try {
      const { username, password } = req.body
      const user = await User.findOne({ username: username})
      if (user) {
        if (await bcrypt.compare(password, user.password)) {
          const signedToken = jsonwebtoken.sign({
            _id: user._id,
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName
          }, "CHIAVE_SUPER_SEGRETA")
          res.cookie("jwtToken", signedToken, {
            sameSite: 'strict',
            secure: true,
            httpOnly: true,
            path: '/',
            expires: new Date(Date.now() + 1000 * 60 * 60 * 12)
          }).json({"message": "ok", "user": {
            _id: user._id,
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName
          }})
        } else {
          res.json({"message": "error", "error": "Password errata"})
        }
      } else {
        res.json({"message": "error", "error": "Utente non trovato"})
      }
    } catch (e) {
      console.log(e)
      res.json({"message": "error", "error": "Errore"})
    }
  }
}