mport React from 'react';
import './ProductItem.css';

function ProductItem({ name, price, description }) {
return (
<div className="product-item">
<h2>{name}</h2>
<p>{description}</p>
<p><strong>${price.toFixed(2)}</strong></p>
</div>
);
}

export default ProductItem