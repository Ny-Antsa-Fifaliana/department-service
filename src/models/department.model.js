module.exports = (sequelize, Sequelize) => {
    const Department = sequelize.define(
        "departments",
        {
            designation : {
                type: Sequelize.STRING(64),
            },
            description : {
                type: Sequelize.STRING(255),
            },
            manager_id : {
                type : Sequelize.DataTypes.INTEGER,
            },
            building_name : {
                type : Sequelize.STRING(64),
            },
            floor_number : {
                type : Sequelize.STRING(10),
            }
        },
        {
            timestamps: false, // Désactive les timestamps automatiques (createdAt, updatedAt)
        }
    );
  
    return Department;
}