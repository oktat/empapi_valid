const { Sequelize } = require('sequelize')
const Employee = require('../models/employee')

const EmployeeController = {
    async index(req, res) {
        try {
            await EmployeeController.tryIndex(req, res)
        } catch (error) {
            res.status(500)
            res.json({
                success: false,
                error: error.message
            })
        }
    },
    async tryIndex(req, res) {
        const employees = await Employee.findAll()
        const result = employees.map(emp => ({
            id: emp.id,
            name: emp.name,
            city: emp.city,
            salary: emp.salary,
            birth: emp.birth
        }))
        res.json({
            success: true,
            data: result
        })
    },

    async store(req, res) {
        try {
            await EmployeeController.tryStore(req, res)
        } catch (error) {
            if(error instanceof Sequelize.ValidationError) {
                res.status(400)
            }else {
                res.status(500)
            }
            const errorMessage = error.errors[0].message
            res.json({
                access: false,
                error: errorMessage
            })            
        }
    },
    async tryStore(req, res) {
        const employee = {
            name: req.body.name,
            city: req.body.city,
            salary: req.body.salary,
            birth: req.body.birth
        }        
        const result = await Employee.create(employee)        
        res.status(201)
        res.json({
            succes: true,
            data: result
        })
    }    
}

module.exports = EmployeeController