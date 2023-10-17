import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { useDispatch, useSelector } from 'react-redux';
import { getPaginatedProducts } from '../../redux/actions/productActions';
import { GET_PRODUCTS_QUERY } from '../../graphql/queries/allProducts';
import { RootState } from '../../store';
import {Product, Products} from '../../redux/types';
import {Image} from "react-bootstrap";

const ProductList: React.FC = () => {
    const dispatch = useDispatch();
    const { page, limit } = useSelector((state: RootState) => state.products.products); // Assuming you have pagination info in Redux state

    const { loading, error, data } = useQuery(GET_PRODUCTS_QUERY, {
        variables: {
            page,
            limit,
        },
    });

    useEffect(() => {
        if (data) {
            dispatch(getPaginatedProducts(data.products));
        }
    }, [dispatch, data]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error fetching products.</div>;

    const products = data.products.data;

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
                                            <a href="product-detail.html">{product.name}</a>
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
