import React from 'react';
import { Card } from 'react-bootstrap';

interface ProductCardProps {
    name: string;
    price: number;
    imageUrl: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, price, imageUrl }) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={"https://placehold.co/100x180"} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>${price.toFixed(2)}</Card.Text>
                <button className="btn btn-primary">Add to Cart</button>
            </Card.Body>
        </Card>
    );
};

export default ProductCard;
