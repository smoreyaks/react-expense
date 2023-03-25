// React Packages
import React from "react";

// Data
import { product } from "../data";
// Components
import Cards from "./Cards";

const Product = () => {
    // Destructure Product Data
    const { title, subtitle } = product;

    return (
        <section className="section">
            <div
                className="container mx-auto contentBox"
                data-aos="fade-up"
                data-aos-delay="200"
            >
                {/* Title & Subtitle */}
                <div className="flex flex-col justify-between items-center mb-10">
                    <h2
                        className="title"
                        data-aos="fade-up"
                        data-aos-offset="400"
                        data-aos-delay="400"
                    >
                        {title}
                    </h2>
                    <p
                        className="lead"
                        data-aos="fade-up"
                        data-aos-offset="400"
                        data-aos-delay="400"
                    >
                        {subtitle}
                    </p>
                </div>
                {/* Cards */}
                <Cards />
            </div>
        </section>
    );
};

export default Product;
