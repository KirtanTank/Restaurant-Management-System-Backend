const restaurantController = require('../controllers/restaurantController')
const userController = require('../controllers/userController')


// router
const router = require('express').Router()


// use routers
router.post('/addRestaurants', restaurantController.addRestaurant)

router.get('/getAllRestaurants', restaurantController.getAllRestaurants)


// Review Url and Controller
router.get('/getAllUsers', userController.getAllUsers)


// Restaurants router
router.get('/:id', restaurantController.getOneRestaurant)

router.put('/:id', restaurantController.updateRestaurant)

router.delete('/:id', restaurantController.deleteRestaurant)

module.exports = router