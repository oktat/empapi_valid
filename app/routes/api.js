const Router = require('express')
const router = Router()

const AuthController = require('../controllers/authcontroller')
const UserController = require('../controllers/usercontroller')
const EmployeeController = require('../controllers/employeecontroller')
const { verifyToken } = require('../middleware/authjwt')
 
router.post('/register', AuthController.register)
router.post('/login', AuthController.login)
router.get('/users', [verifyToken], UserController.index)

router.get('/employees', EmployeeController.index)
router.post('/employees', EmployeeController.store)

module.exports = router
