const Product = require('../models/Product');

const products = [
    new Product(1, "Laptop Dell XPS", 1500, 10, "Electronics", true),
    new Product(2, "iPhone 15 Pro", 1200, 5, "Electronics", true),
    new Product(3, "Bàn phím cơ", 80, 0, "Accessories", true), // Hết hàng
    new Product(4, "Chuột Gaming", 25, 20, "Accessories", false), // Ngừng bán
    new Product(5, "Tai nghe Bluetooth", 50, 15, "Accessories", true),
    new Product(6, "Ốp lưng iPhone", 10, 100, "Accessories", true)
];

exports.getAllProducts = (req, res) => {
    res.json(products);
};

exports.getNamesAndPrices = (req, res) => {
    const result = products.map(p => ({
        name: p.name,
        price: p.price
    }));
    res.json(result);
};

exports.getInStockProducts = (req, res) => {
    const result = products.filter(p => p.quantity > 0);
    res.json(result);
};

exports.checkConditions = (req, res) => {
    const hasExpensive = products.some(p => p.price > 30);
    const accessories = products.filter (p => p.category === 'Accessories');
    const allAccessoriesAvailable = accessories.every(p => p.isAvailable === true);
    res.json({
        hasProductOver30: hasExpensive,
        areAccessoriesAvailable: allAccessoriesAvailable
    });
};