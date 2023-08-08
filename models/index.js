const dbConfig = require('../config/dbConfig');

const {Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD, {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        operatorsAliases: false,

        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle

        }
    }
)

sequelize.authenticate()
.then(() => {
    console.log('connected..')
})
.catch(err => {
    console.log('Error:'+ err)
})

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.restaurants = require('./restaurantModel')(sequelize, DataTypes)
db.users = require('./userModel')(sequelize, DataTypes)

db.sequelize.sync({ force: false })
.then(() => {
    console.log('yes re-sync done!')
})
.catch(() => {
    console.log("Error occurred");
})



// // 1 to Many Relation

// db.products.hasMany(db.reviews, {
//     foreignKey: 'product_id',
//     as: 'review'
// })

// db.reviews.belongsTo(db.products, {
//     foreignKey: 'product_id',
//     as: 'product'
// })


module.exports = db