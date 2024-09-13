const fs = require("fs");
const ReviewModel = require("../models/ReviewModel");
const path = require("path");
const addReviewController = async (req, res) => {
    try {
        const { name, profession } = req.body;

        // Check if both files (image and video) are uploaded
        if (!req.files || !req.files.image || !req.files.video) {
            return res.status(200).send({
                success: false,
                message: "Image and video are required!"
            });
        }

        const image = req.files.image[0].filename;
        const video = req.files.video[0].filename;

        // Ensure other required fields are present
        if (!name || !profession) {
            return res.status(200).send({
                success: false,
                message: "All Fields are Required!!"
            });
        }

        // Create a new review (assuming you have a ReviewModel)
        const review = await ReviewModel.create({ name, profession, image, video });

        res.status(201).send({
            success: true,
            message: "Data Added Successfully.",
            review
        });

    } catch (error) {
        console.error(error);
        return res.status(500).send({
            success: false,
            message: "Internal server error"
        });
    }
};

const getReviewsController = async (req, res) => {
    try {
        // Fetch all reviews from the database
        const reviews = await ReviewModel.find({});

        // Check if there are reviews
        if (!reviews || reviews.length === 0) {
            return res.status(404).send({
                success: false,
                message: "No reviews found",
            });
        }

        // Send success response with reviews
        res.status(200).send({
            success: true,
            message: "Reviews fetched successfully",
            reviews,
        });

    } catch (error) {
        console.log(error);

        // Handle server errors
        res.status(500).send({
            success: false,
            message: "Internal server error",
        });
    }
};

const deleteReviewController = async (req, res) => {
    try {
        const { _id } = req.body;
        console.log(_id);

        // Find the review by its ID
        const review = await ReviewModel.findById(_id);

        if (!review) {
            return res.status(200).json({
                success: false,
                message: "Review not found"
            });
        }

        // Delete the image and video files from the 'uploads' folder
        const imagePath = path.join(__dirname, '..', 'uploads', review.image);
        const videoPath = path.join(__dirname, '..', 'uploads', review.video);

        if (fs.existsSync(imagePath)) {
            fs.unlinkSync(imagePath); // Delete the image file
        }

        if (fs.existsSync(videoPath)) {
            fs.unlinkSync(videoPath); // Delete the video file
        }

        // Remove the review from the database
        await ReviewModel.findByIdAndDelete(_id);

        res.status(200).json({
            success: true,
            message: "Review deleted successfully"
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
};

module.exports = { addReviewController, getReviewsController, deleteReviewController };