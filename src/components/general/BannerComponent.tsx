import React from "react";
import {Image} from "react-bootstrap";


const BannerComponent: React.FC = () => {
    return (
        <div className="col-md-12">
            <Image
                src="https://media.istockphoto.com/id/667850924/photo/marina-with-yachts-in-lake-geneva-in-lausanne-in-switzerland.jpg?s=1024x1024&w=is&k=20&c=SPswhfiTRACMtQHjQPafG9CjAR1WMjqDzJXnsVjfTpY="
                fluid/>
        </div>
    );
};

export default BannerComponent;
