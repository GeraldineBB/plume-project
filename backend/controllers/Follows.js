import Follow from '../models/followModel.js'; 

export const createFollow = async (req, res) => {
    try {
        await Follow.create(req.body);
        res.json({
            "follow" : "Follow créé"
        }); 
    } catch (error) {
        res.json ({message : error.message}); 
    }
}