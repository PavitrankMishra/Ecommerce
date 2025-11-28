import { useEffect, useState } from "react";
import "./Slider.css";

const Slider = () => {
    const imageData = [
        "https://www.brishni.com/cdn/shop/files/mrida_4_1920x.png?v=1763630869",
        "https://www.brishni.com/cdn/shop/files/mrida_6_1920x.png?v=1763632098"
    ];

    const [imageIndex, setImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setImageIndex((prev) => (prev + 1) % imageData.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="sliderSection">
            <img
                src={imageData[imageIndex]}
                alt="Slider Image"
                className="slideImage show"
            />
        </section>
    );
};

export default Slider;
