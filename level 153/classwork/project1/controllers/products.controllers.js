const products = [
    { id: 1, name: "Laptop", price: 1200 },
    { id: 2, name: "Mouse", price: 25 }
];

export const getProducts = (req, res) => {
    res.json(products);
};

export const addProduct = (req, res) => {
    products.push(req.body);
    res.json(products);
};