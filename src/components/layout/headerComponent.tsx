import React from "react";

const HeaderComponent: React.FC = () => {
    return (
        <div>
            <div className="search-popup">
                <div className="search-popup-container">

                    <form role="search" method="get" className="search-form" action="">
                        <input type="search" id="search-form" className="search-field"
                               placeholder="Type and press enter"
                               value="" name="s"/>
                        <button type="submit" className="search-submit"><a href="#"><i className="icon icon-search"></i></a>
                        </button>
                    </form>

                    <h5 className="cat-list-title">Browse Catalog</h5>

                    <ul className="cat-list">
                        <li className="cat-list-item">
                            <a href="/" title="Our Boats">Our Boats</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default HeaderComponent;
