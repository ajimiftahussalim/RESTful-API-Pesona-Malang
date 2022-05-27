import Tour from '../models/Tour.js';

export const getTours = async (req, res) => {
    try {
        const tours = await Tour.find();
        res.json(tours);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
    
}

export const getTourById = async (req, res) => {
    try {
        const tour = await Tour.findById(req.params.id);
        res.json(tour);
    } catch (error) {
        res.status(404).json({message: error.message});
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

export const updateTour = async (req, res) => {
    const cekId = await Tour.findById(req.params.id);
    if(!cekId) return res.status(404).json({message: "Data tidak ditemukan"});
    try {
        const updatedTour = await Tour.updateOne({_id: req.params.id}, {$set: req.body});
        res.status(200).json(updatedTour);
    } catch {
        res.status(400).json({message: error.message});
    }
}

export const deleteTour = async (req, res) => {
    const cekId = await Tour.findById(req.params.id);
    if(!cekId) return res.status(404).json({message: "Data tidak ditemukan"});
    try {
        const deletedTour = await Tour.deleteOne({id: req.params.id});
        res.status(200).json(deletedTour);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
    
}
