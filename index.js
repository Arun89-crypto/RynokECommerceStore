const connectToMongo = require('./db');
const express = require('express');
const cors = require('cors');

connectToMongo();
const app = express();
const port = 8000;

app.use(express.json());

// Defining the routes for all the operations
app.use('/api/auth', require('./routes/User/auth'));
// app.use('/api/product', require('./routes/product'));
// app.use('/api/review', require('./routes/review'));
// app.use('/api/cart', require('./routes/cart'));

app.listen(port, () => {
    console.log(`Server listening on : http://localhost:${port}`);
})