const mongoose = require('mongoose');
const cartItemSchema = require('./CartItem');

const CartSchema = new mongoose.Schema({
    cartitems: [cartItemSchema]
})

const Cart = mongoose.model('cart', CartSchema);
module.exports = Cart;