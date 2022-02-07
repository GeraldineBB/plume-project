import express from "express"; 

import {
    getAllProducts,
    createProduct,
    getProductById,
    deleteProduct,
    updateProduct
} from "../controllers/Products.js"; 

// import {
//     createFollow,
// } from "../controllers/Follows.js"; 


const router = express.Router(); 

router.get ('/', getAllProducts);
router.get ('/:id', getProductById);
router.post ('/', createProduct);
router.patch ('/:id', updateProduct);
router.delete ('/:id', deleteProduct);
// router.post ('/follow', createFollow); 

export default router; 