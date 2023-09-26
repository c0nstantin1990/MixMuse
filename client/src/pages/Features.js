import React, { useState, useEffect } from "react";
import ProductItem from '../components/ProductItem';

const ProductsList = [
    {
        name: 'Featured Liquor',
        description: 'Check out our selection of featured liquors.',
        image: 'https://media.istockphoto.com/photos/liquor-bottles-on-a-white-background-picture-id459018635?k=6&m=459018635&s=612x612&w=0&h=WxfjzC94sN2KMQ9F6JKUuQjJ8UkJW1aMB1kXW-3ZAPo=',
        price: 19.99,
        quantity: 10,
        _id: 'featured1',
    },
    {
        name: 'Featured Equipment',
        description: 'Check out our selection of featured equipment.',
        image: 'https://www.thespruceeats.com/thmb/G6jveikW_Zuezn0BqEOwfOTzEZk=/994x783/filters:no_upscale():max_bytes(150000):strip_icc()/61lEJZTU6L._AC_SL1000_-a6771780bd234a0d85cc0099899c0af7.jpg',
        price: 10,
        _id: 'featured2',
    },
    {
        name: 'Featured Mixers',
        description: 'Check out our selection of featured mixers.',
        image: 'https://cdn.shopify.com/s/files/1/2507/1128/collections/CollectionIMG2.jpg?v=1611251976',
        price: 5,
        quantity: 10,
        _id: 'featured3',
    },
    {
        name: 'Featured Reviews',
        description: 'Check out these reviews of our featured products.',
        image: 'https://dadbodcollective.files.wordpress.com/2019/05/liquor-reviews.png?w=1000',
        price: 0,
        quantity: 0,
        _id: 'featured4',
    },
];
const FeaturedProducts = () => {
    const [currentProductIndex, setCurrentProductIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            rotateProduct('next');
        }, 4000);
        return () => clearInterval(interval);
    },);

    const rotateProduct = (direction) => {
        const newIndex = direction === 'next' ? (currentProductIndex + 1) % ProductsList.length :
            (currentProductIndex - 1 + ProductsList.length) % ProductsList.length;
        setCurrentProductIndex(newIndex);
    };

    const currentProduct = ProductsList[currentProductIndex];

    return (
        <div className="featured-products">
            <h1>Featured Products</h1>
            <div className="product-container">
                <ProductItem {...currentProduct} />
                <div className="product-buttons">
                    <button className="product-button" onClick={() => rotateProduct('previous')}>Previous</button>
                    <button className="product-button" onClick={() => rotateProduct('next')}>Next</button>
                    <button className="product-button">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};
export default FeaturedProducts;