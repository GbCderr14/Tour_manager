//@desc  Get all Packages
//@route GET /api/v1/packages
//@access Public
const ErrorResponse=require('../utils/errorResponse')
const Package=require('../models/packages');
const Hotel=require('../models/hotelsdetails.js');
const Place=require('../models/placedetails.js');
const Restaurant=require('../models/restaurantdetails');
const asyncHandler=require('../middleware/async');
const advancedResults=require('../middleware/advancedResults');
exports.getPackages=asyncHandler(async (req,res,next)=>{
    
        const packages=await Package.find().populate('place').populate('hotel').populate('restaurant');
        res.status(200).json({success:true,data:packages});
})

//@desc get single package
//@route GET /api/v1/packages/:id
//@access Public

exports.getPackage=asyncHandler(async (req,res,next)=>{

    const package=await Package.findById(req.params.id).populate('place').populate('hotel').populate('restaurant');
            if(!package){
                return next(new ErrorResponse(`Package with id ${req.params.id} not found `,404));
            }
            res.status(200).json({success:true,data:package})
        })

//@desc  Create new package
//@route POST /api/v1/packages
//@access Public
 
exports.createPackage=asyncHandler(async (req,res,next)=>{
    console.log(req.body);
    const place = new Place({
        city:req.body.city,
        state:req.body.state
        
    });
    const hotel=new Hotel({
        name:req.body.hotel
    })
    const restaurant=new Restaurant({
        name:req.body.restaurant
    })
    await place.save();
    await hotel.save();
    await restaurant.save();
    req.body.hotel=hotel._id;
    req.body.restaurant=restaurant._id;
    req.body.place=place._id;
    console.log(req.body);
        const package= await Package.create(req.body);
        res.status(201).json({
            success:true,
            data:package
        })  
    })


