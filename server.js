const express = require('express');
const cors = require('cors');
const productRoutes = require('./routes/productRoutes');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use('/api/products', productRoutes);

app.get('/', (req, res) => {
    res.send('<h1> Backend Node.js - Bai tap Product </h1> <p>Truy cap /api/products/loops-and-filter de xem ket qua cau 8,9,10 </p>');
});

app.listen(PORT, ()=> {
    console.log('Server is running on http://localhost: ${PORT}');
});

