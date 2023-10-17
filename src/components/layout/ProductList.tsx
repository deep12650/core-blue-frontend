import React from 'react';
import ProductCard from '../ProductCard';
import {Image} from "react-bootstrap";

const ProductListPage: React.FC = () => {
    return (
        <section id="selling-products" className="col-md-9 product-store">
            <div className="container">
                <ul className="tabs list-unstyled">
                    <li data-tab-target="#all" className="active tab">All</li>
                    <li data-tab-target="#shoes" className="tab">Shoes</li>
                    <li data-tab-target="#tshirts" className="tab">Tshirts</li>
                    <li data-tab-target="#pants" className="tab">Pants</li>
                    <li data-tab-target="#hoodie" className="tab">Hoodie</li>
                    <li data-tab-target="#outer" className="tab">Outer</li>
                    <li data-tab-target="#jackets" className="tab">Jackets</li>
                    <li data-tab-target="#accessories" className="tab">Accessories</li>
                </ul>
                <div className="tab-content">
                    <div id="all" data-tab-content className="active">
                        <div className="row d-flex flex-wrap">
                            <div className="product-item col-lg-4 col-md-6 col-sm-6">
                                <div className="image-holder">
                                    <Image src={"https://placehold.co/400"}/>
                                </div>
                                <div className="cart-concern">
                                    <div className="cart-button d-flex justify-content-between align-items-center">
                                        <button type="button"
                                                className="btn-wrap cart-link d-flex align-items-center">add to cart <i
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
                                        <a href="single-product.html">Half sleeve T-shirt</a>
                                    </h3>
                                    <div className="item-price text-primary">$40.00</div>
                                </div>
                            </div>
                            <div className="product-item col-lg-4 col-md-6 col-sm-6">
                                <div className="image-holder">
                                    <Image src="https://placehold.co/400" />
                                </div>
                                <div className="cart-concern">
                                    <div className="cart-button d-flex justify-content-between align-items-center">
                                        <button type="button"
                                                className="btn-wrap cart-link d-flex align-items-center">add to cart <i
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
                                        <a href="single-product.html">Stylish Grey T-shirt</a>
                                    </h3>
                                    <div className="item-price text-primary">$35.00</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="shoes" data-tab-content>
                        <div className="row d-flex flex-wrap">
                            <div className="product-item col-lg-4 col-md-6 col-sm-6">
                                <div className="image-holder">
                                    <Image src="https://placehold.co/400" />
                                </div>
                                <div className="cart-concern">
                                    <div className="cart-button d-flex justify-content-between align-items-center">
                                        <button type="button"
                                                className="btn-wrap cart-link d-flex align-items-center">add to cart <i
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
                                        <a href="single-product.html">Orange white Nike</a>
                                    </h3>
                                    <div className="item-price text-primary">$55.00</div>
                                </div>
                            </div>
                            <div className="product-item col-lg-4 col-md-6 col-sm-6">
                                <div className="image-holder">
                                    <Image src="https://placehold.co/400" />
                                </div>
                                <div className="cart-concern">
                                    <div className="cart-button d-flex justify-content-between align-items-center">
                                        <button type="button"
                                                className="btn-wrap cart-link d-flex align-items-center">add to cart <i
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
                                        <a href="single-product.html">Running Shoe</a>
                                    </h3>
                                    <div className="item-price text-primary">$65.00</div>
                                </div>
                            </div>
                            <div className="product-item col-lg-4 col-md-6 col-sm-6">
                                <div className="image-holder">
                                    <Image src="https://placehold.co/400" />
                                </div>
                                <div className="cart-concern">
                                    <div className="cart-button d-flex justify-content-between align-items-center">
                                        <button type="button"
                                                className="btn-wrap cart-link d-flex align-items-center">add to cart <i
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
                                        <a href="single-product.html">Tennis Shoe</a>
                                    </h3>
                                    <div className="item-price text-primary">$80.00</div>
                                </div>
                            </div>
                            <div className="product-item col-lg-4 col-md-6 col-sm-6">
                                <div className="image-holder">
                                    <Image src="https://placehold.co/400" />
                                </div>
                                <div className="cart-concern">
                                    <div className="cart-button d-flex justify-content-between align-items-center">
                                        <button type="button"
                                                className="btn-wrap cart-link d-flex align-items-center">add to cart <i
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
                                        <a href="single-product.html">Nike Brand Shoe</a>
                                    </h3>
                                    <div className="item-price text-primary">$65.00</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <nav className="navigation paging-navigation text-center padding-medium" role="navigation">
                    <div className="pagination loop-pagination d-flex justify-content-center">
                        <a href="#" className="pagination-arrow d-flex align-items-center">
                            <i className="icon icon-arrow-left"></i>
                        </a>
                        <span aria-current="page" className="page-numbers current">1</span>
                        <a className="page-numbers" href="#">2</a>
                        <a className="page-numbers" href="#">3</a>
                        <a href="#" className="pagination-arrow d-flex align-items-center">
                            <i className="icon icon-arrow-right"></i>
                        </a>
                    </div>
                </nav>
            </div>
        </section>
    );
};

export default ProductListPage;
