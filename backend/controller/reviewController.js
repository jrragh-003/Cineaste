const reviewdb = require('../model/review')

const createReviews = async (req, res) => {
    try {
        const newReview = await reviewdb.create({
         
            title: req.body.title,
            name: req.body.name,
            phoneNumber: req.body.phoneNumber,
            review: req.body.review,
        });

        res.status(201).json(newReview);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: "Error creating review" });
    }
};



const getReviews = async (req, res) => {
    try {
        const reviews = await reviewdb.find({ title: req.params.title });
        res.status(200).json({ reviews });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: "Error fetching reviews" });
    }
};



const updateReviews = async(req,res) =>{
 const id = req.params.id
    try {
        const reviews = await reviewdb.updateOne(
            { _id : id },
            {$set : {review : req.body.review}}
            );
            res.status(200).json({ reviews });
    } catch (error) {
        console.error(error.message)
    }
}



const deleteReviews = async(req,res) =>{
    const id = req.params.id;
    try{
        const reviewToDelete = await reviewdb.findByIdAndDelete(id);
        if(!reviewToDelete)
        return res
        .status(404)
        .json({ message: `Cannot delete any item with ID ${id}` });
        else
        {
            return res.status(202).json({message:"Successfuly deleted"})
        }
    }
    catch (error) {
        res.status(500).json({ message: error.message });
      }

}

    module.exports = {
        createReviews,
        getReviews,
        updateReviews,
        deleteReviews
    }