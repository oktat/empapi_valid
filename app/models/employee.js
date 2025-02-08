const { DataTypes } = require('sequelize')
const sequelize = require('../database/database')
 
const Employee = sequelize.define('employee', {
    id: { 
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: { 
        type: DataTypes.STRING,  
        allowNull: false,
        validate: {
            notNull: { msg: 'A név mező kötelező' },
            notEmpty: { msg: 'A név nem lehet üres' }
        }
    },
    city: { 
        type: DataTypes.STRING,  
        allowNull: true,
        validate: {
            is: { 
                args: /^[a-z]+$/i,
                msg: 'Hiba! Csak betűk adhatók meg!'
            }
        }
    },
    salary: { 
        type: DataTypes.DOUBLE, 
        defaultValue: 300,
        validate: {
            isNumeric: {msg: 'Hiba! Csak szám adható meg!'}
        }
    },
    birth: { 
        type: DataTypes.DATEONLY, 
        defaultValue: DataTypes.NOW,
        validate: {
            isDate: {msg: 'Hiba! Csak dátum!'}
        }
    }
})


sequelize.sync({
    force: false
})

module.exports = Employee
