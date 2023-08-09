module.exports = (sequelize, DataTypes) => {

    const Restaurant = sequelize.define("restaurant", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false
        },
        contact: {
            type: DataTypes.STRING,
            allowNull: false
        },
        added_by: {
            type: DataTypes.STRING
        }
    
    })
    

    return Restaurant

}