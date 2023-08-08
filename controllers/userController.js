const db = require('../models')

const User = db.users

const getAllUsers = async (req, res) => {

    let users = await User.findAll({})
    res.status(200).send(users)

}

module.exports = {
    getAllUsers
}