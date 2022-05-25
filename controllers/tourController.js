import Tour from '../models/Tour.js';

export const getTours = async (req, res) => {
    try {
        const tours = await Tour.find();
        res.json(tours);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
    
}

export const createTour = async (req, res) => {
    const tour = new Tour(req.body);
    try {
        const createdTour = await tour.save();
        res.status(201).json(createdTour);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
    
}
