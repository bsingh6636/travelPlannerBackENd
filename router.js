import express from "express";
import multer from "multer";
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import cloudinary from './cloudinary.js'
import { Place } from "./model.schema.js";

const router = express.Router()

const storage = new CloudinaryStorage({
    cloudinary : cloudinary,
    params :{
        folder : 'travelPlannerProject',
        allowed_formats : ['jpg','png','heic','jpeg']
    }
})

const upload = multer ( { storage })

router.post('/', upload.single('image'), async (req, res) => {
    const { placeName , placeDetails } = req.body;
    console.log("Place Name:", placeName); // Debugging placeName
    console.log("File:", req.file); // Debugging file upload

    if (!req.file) {
        return res.status(400).json({ message: 'No file uploaded.' });
    }

    const imageUrl = req.file.path;

    const newPlace = new Place({
        placeName,
        placeDetails,
        imageUrl
    });

    try {
        await newPlace.save();
        res.status(200).json({
            message: 'Place added successfully'
        });
    } catch (error) {
        res.status(500).json({
            message: 'Failed to add place',
            error
        });
    }
});


router.get('/', async (req, res) => {
    try {
      const places = await Place.find();
      res.status(200).json(places);
    } catch (error) {
      res.status(500).json({ message: 'Failed to fetch places.', error });
    }
  });

  router.delete('/',async(req,res)=>{
    try {
        const {_id} = req.body
        console.log('id',_id)
        const place = await Place.findByIdAndDelete({_id})
        res.status(200).json({
            message:'Item sucessFully deleted',
            place
        })
    } catch (error) {
        res.status(500).json({
            message:'failed to delete',
            error
        })
    }
  })
  export default router;