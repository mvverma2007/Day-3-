const express = require('express');
const app = express();

const landingPageHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ShopEase - Your Online Shopping Destination</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
        }
        header {
            background-color: #333;
            color: white;
            padding: 1rem;
            text-align: center;
        }
        nav {
            background-color: #444;
            padding: 0.5rem;
        }
        nav ul {
            list-style-type: none;
            margin: 0;
            padding: 0;
            text-align: center;
        }
        nav ul li {
            display: inline;
            margin: 0 1rem;
        }
        nav ul li a {
            color: white;
            text-decoration: none;
        }
        .hero {
            background-image: url('https://via.placeholder.com/1200x400?text=Welcome+to+ShopEase');
            background-size: cover;
            background-position: center;
            height: 400px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            text-align: center;
        }
        .hero h1 {
            font-size: 3rem;
            margin: 0;
        }
        .hero p {
            font-size: 1.5rem;
        }
        .products {
            padding: 2rem;
            text-align: center;
        }
        .product-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 1rem;
            margin-top: 2rem;
        }
        .product {
            background-color: white;
            border: 1px solid #ddd;
            padding: 1rem;
            border-radius: 5px;
        }
        .product img {
            max-width: 100%;
            height: auto;
        }
        .product h3 {
            margin: 0.5rem 0;
        }
        .product p {
            color: #666;
        }
        .product button {
            background-color: #28a745;
            color: white;
            border: none;
            padding: 0.5rem 1rem;
            cursor: pointer;
            border-radius: 3px;
        }
        footer {
            background-color: #333;
            color: white;
            text-align: center;
            padding: 1rem;
            margin-top: 2rem;
        }
    </style>
</head>
<body>
    <header>
        <h1>ShopEase</h1>
        <p>Your Online Shopping Destination</p>
    </header>
    <nav>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">Categories</a></li>
            <li><a href="#">Cart</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </nav>
    <section class="hero">
        <div>
            <h1>Welcome to ShopEase</h1>
            <p>Discover amazing products at unbeatable prices</p>
            <button>Shop Now</button>
        </div>
    </section>
    <section class="products">
        <h2>Featured Products</h2>
        <div class="product-grid">
            <div class="product">
                <img src="https://via.placeholder.com/250x200?text=Product+1" alt="Product 1">
                <h3>Product 1</h3>
                <p>$29.99</p>
                <button>Add to Cart</button>
            </div>
            <div class="product">
                <img src="https://via.placeholder.com/250x200?text=Product+2" alt="Product 2">
                <h3>Product 2</h3>
                <p>$39.99</p>
                <button>Add to Cart</button>
            </div>
            <div class="product">
                <img src="https://via.placeholder.com/250x200?text=Product+3" alt="Product 3">
                <h3>Product 3</h3>
                <p>$19.99</p>
                <button>Add to Cart</button>
            </div>
            <div class="product">
                <img src="https://via.placeholder.com/250x200?text=Product+4" alt="Product 4">
                <h3>Product 4</h3>
                <p>$49.99</p>
                <button>Add to Cart</button>
            </div>
        </div>
    </section>
    <footer>
        <p>&copy; 2025 ShopEase. All rights reserved.</p>
    </footer>
</body>
</html>
`;

app.get('/', (req, res) => {
    res.send(landingPageHTML);
});

app.listen(3000, () => {
    console.log('Landing page server running on http://localhost:3000');
});
