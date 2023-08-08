const db = require('../models')

// create main Model
const Restaurant = db.restaurants


// main work

// 1. create product

const addRestaurant = async (req, res) => {

    let info = {
        name: req.body.name,
        address: req.body.address,
        contact: req.body.contact,
        added_by: req.body.added_by
    }

    const restaurant = await Restaurant.create(info)
    res.status(200).send(restaurant)
    console.log(restaurant)

}



// 2. get all restaurants

const getAllRestaurants = async (req, res) => {

    let restaurants = await Restaurant.findAll({})
    res.status(200).send(restaurants)

}

// 3. get single restaurant

const getOneRestaurant = async (req, res) => {

    let id = req.params.id
    let restaurant = await Restaurant.findOne({ where: { id: id }})
    res.status(200).send(restaurant)

}

// 4. update Restaurant

const updateRestaurant = async (req, res) => {

    let id = req.params.id

    const restaurant = await Restaurant.update(req.body, { where: { id: id }})

    res.status(200).send(restaurant)
   

}

// 5. delete restaurant by id

const deleteRestaurant = async (req, res) => {

    let id = req.params.id
    
    await Restaurant.destroy({ where: { id: id }} )

    res.status(200).send('Restaurant is deleted !')

}

// // 6. get published restaurant

// const getPublishedRestaurant = async (req, res) => {

//     const restaurants =  await Restaurant.findAll({ where: { published: true }})

//     res.status(200).send(restaurants)

// }

// // 7. connect one to many relation Restaurant and Reviews

// const getRestaurantReviews =  async (req, res) => {

//     const id = req.params.id

//     const data = await Restaurant.findOne({
//         include: [{
//             model: Review,
//             as: 'review'
//         }],
//         where: { id: id }
//     })

//     res.status(200).send(data)

// }


// // 8. Upload Image Controller

// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, 'Images')
//     },
//     filename: (req, file, cb) => {
//         cb(null, Date.now() + path.extname(file.originalname))
//     }
// })

// const upload = multer({
//     storage: storage,
//     limits: { fileSize: '1000000' },
//     fileFilter: (req, file, cb) => {
//         const fileTypes = /jpeg|jpg|png|gif/
//         const mimeType = fileTypes.test(file.mimetype)  
//         const extname = fileTypes.test(path.extname(file.originalname))

//         if(mimeType && extname) {
//             return cb(null, true)
//         }
//         cb('Give proper files formate to upload')
//     }
// }).single('image')


module.exports = {
    addRestaurant,
    getAllRestaurants,
    getOneRestaurant,
    updateRestaurant,
    deleteRestaurant
    // getPublishedRestaurant,
    // getRestaurantReviews,
    // upload
    
}