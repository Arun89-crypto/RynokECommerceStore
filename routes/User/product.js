const express = require('express');
const router = express.Router();
const Product = require('../../models/Product');
const { body, validationResult } = require('express-validator');
const fetchUser = require('../../middleware/fetchuser');

// ROUTE 1 : FETCHING ALL PRODUCTS | Doesn't require Auth

router.get('/getallproducts', async (req, res) => {
    try {
        // GETTING ALL THE PRODUCTS IN COLLECTION 'products'
        let products = await Product.find();
        console.log(products);
        res.json(products);
    } catch (error) {
        res.status(500).send("Internal server error");
        console.log(error.message);
    }
})

// ROUTE 2 : FETCHING ALL PRODUCTS BY CATAGORY | Doesn't require Auth

router.get('/fetchbycategory', [
    body('category', 'Enter a valid category').isLength({ min: 4 })
], async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const category = req.body.category;
        let products = await Product.find({ category: category });
        console.log(products);
        res.json(products);
    } catch (error) {
        res.status(500).send("Internal server error");
        console.log(error.message);
    }

})

// ROUTE 3 : LIKING A PRODUCT | Requires Auth | Requires Product ID | Requires auth-token in header

router.put('/likeproduct/:id', fetchUser, async (req, res) => {
    try {
        let product = await Product.findById(req.params.id);

        if (!product) {
            return res.status(400).send('Product does not exist or id is wrong');
        }

        const newProduct = {
            likes: product.likes + 1
        }

        product = await Product.findByIdAndUpdate(req.params.id, { $set: newProduct }, { new: true });
        res.json(product);
    } catch (error) {
        res.status(500).send("Internal server error");
        console.log(error.message);
    }
})

// ROUTE 4 : DISLIKING A PRODUCT | Requires Auth | Requires Product ID | Requires auth-token in header

router.put('/dislikeproduct/:id', fetchUser, async (req, res) => {
    try {
        let product = await Product.findById(req.params.id);

        if (!product) {
            return res.status(400).send('Product does not exist or id is wrong');
        }

        const newProduct = {
            dislikes: product.dislikes + 1
        }

        product = await Product.findByIdAndUpdate(req.params.id, { $set: newProduct }, { new: true });
        res.json(product);
    } catch (error) {
        res.status(500).send("Internal server error");
        console.log(error.message);
    }
})



// Temp route to add products | Remove after creating the Admin

router.post('/addproduct', [
    body('name', 'Name length must be greater than 2').isLength({ min: 2 }),
    body('description', 'Description length must be greater than 2').isLength({ min: 10 }),
], async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {

        let product = await Product.findOne({ name: req.body.name })
        if (product) {
            return res.status(400).json({ error: 'Sorry product with this name already exists' })
        }

        product = await Product.create({
            name: req.body.name,
            description: req.body.description,
            rating: req.body.rating,
            price: req.body.price,
            category: req.body.category,
            image: req.body.image,
            quantity: req.body.quantity
        })

        res.json(product);

    } catch (error) {
        res.status(500).send("Internal server error");
        console.log(error.message);
    }
})

module.exports = router