const express=require('express');
const authMiddleware = require('../middlewares/authMiddleware');
const { getAllDoctorsController, getAllUsersController,changeAccountStatusController } = require('../controllers/adminCtrl');
const router = require('./userRoutes');
const route=express.Router();

//GET METHOD || USERS
router.get('/getAllUsers', authMiddleware,getAllUsersController);


//GET METHOD || DOCTORS
router.get('/getAllDoctors',authMiddleware,getAllDoctorsController)

//POST ACCOUNT STATUS
router.post('/changeAccountStatus',authMiddleware,changeAccountStatusController)
module.exports=router