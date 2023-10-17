import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../redux/actions/productActions';
import { GET_PRODUCTS_QUERY } from '../../graphql/queries/allProducts';
import { Product } from '../../redux/types';
import {Image} from "react-bootstrap";

const ProductList: React.FC = () => {
    const dispatch = useDispatch();
    const products = useSelector((state: { products: Product[] }) => state.products);

    const { loading, error, data } = useQuery(GET_PRODUCTS_QUERY);

    useEffect(() => {
        if (data) {
            dispatch(getProducts(data.products));
        }
    }, [dispatch, data]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error fetching products.</div>;

    return (
        <section id="selling-products" className="col-md-9 product-store">
            <div className="container">
                <ul className="tabs list-unstyled">
                    <li data-tab-target="/" className="active tab">Our Boats</li>
                </ul>
                <div className="tab-content">
                    {products.map((product: Product) => (
                        <div id="all" className="active">
                            <div className="row d-flex flex-wrap">
                                <div className="product-item col-lg-4 col-md-6 col-sm-6">
                                    <div className="image-holder">
                                        <Image src={"https://placehold.co/400"}/>
                                    </div>
                                    <div className="cart-concern">
                                        <div className="cart-button d-flex justify-content-between align-items-center">
                                            <button type="button"
                                                    className="btn-wrap cart-link d-flex align-items-center">add to
                                                cart <i
                                                    className="icon icon-arrow-io"></i>
                                            </button>
                                            <button type="button" className="view-btn tooltip
                              d-flex">
                                                <i className="icon icon-screen-full"></i>
                                                <span className="tooltip-text">Quick view</span>
                                            </button>
                                            <button type="button" className="wishlist-btn">
                                                <i className="icon icon-heart"></i>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="product-detail">
                                        <h3 className="product-title">
                                            <a href={"#"} key={product.id}>{product.name}</a>
                                        </h3>
                                        {/*<div className="item-price text-primary">$40.00</div>*/}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductList;
