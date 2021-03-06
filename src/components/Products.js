import React, { Component } from 'react';
import formatCurrency from "../util";

class Products extends Component {
    render() {
        return (
            <div>
                <ul className="products">
                    {this.props.products.map((product) => (
                        <li key={product._id}>
                            <div className="product">
                                <a href={"#" + product._id}>
                                    <img src={product.image} alt={product.title}></img>
                                    <p>
                                        <strong>{product.title}</strong>
                                    </p>
                                </a>
                                <div className="product-price">
                                <div>{formatCurrency(product.price)}</div>
                        
                                    <button className="button primary">
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}
export default Products;