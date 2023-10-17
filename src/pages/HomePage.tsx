import React from "react";
import HeaderComponent from "../components/layout/headerComponent";
import ProductList from "../components/layout/ProductList";


const HomePage: React.FC = () => {
    return (
        <div>
            <HeaderComponent/>
            <ProductList/>
        </div>
    );
}

export default HomePage;
