import "./Categories.css";
import V1 from "../../assets/Instareels.mp4";
import V2 from "../../assets/Instareels2.mp4";
import { useEffect, useRef } from "react";
import I1 from "../../assets/J1.jpg";

const Categories = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const videoRef2 = useRef<HTMLVideoElement>(null);
    const videoRef3 = useRef<HTMLVideoElement>(null);
    const videoRef4 = useRef<HTMLVideoElement>(null);
    const videoRef5 = useRef<HTMLVideoElement>(null);
    const videoRef6 = useRef<HTMLVideoElement>(null);
    const videoRef7 = useRef<HTMLVideoElement>(null);
    const videoRef8 = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const video = videoRef.current;
        const video2 = videoRef2.current;
        const video3 = videoRef3.current;
        const video4 = videoRef4.current;
        const video5 = videoRef5.current;
        const video6 = videoRef6.current;
        const video7 = videoRef7.current;
        const video8 = videoRef8.current;

        const handleTimeUpdate = () => {
            if (video) {
                if (video.currentTime >= 5) {
                    video.currentTime = 0;
                    video.play();
                }
            }

            if (video2) {
                if (video2.currentTime >= 5) {
                    video2.currentTime = 0;
                    video2.play();
                }
            }

            if (video3) {
                if (video3.currentTime >= 5) {
                    video3.currentTime = 0;
                    video3.play();
                }
            }

            if (video4) {
                if (video4.currentTime >= 5) {
                    video4.currentTime = 0;
                    video4.play();
                }
            }

            if (video5) {
                if (video5.currentTime >= 5) {
                    video5.currentTime = 0;
                    video5.play();
                }
            }

            if (video6) {
                if (video6.currentTime >= 5) {
                    video6.currentTime = 0;
                    video6.play();
                }
            }

            if (video7) {
                if (video7.currentTime >= 5) {
                    video7.currentTime = 0;
                    video7.play();
                }
            }

            if (video8) {
                if (video8.currentTime >= 5) {
                    video8.currentTime = 0;
                    video8.play();
                }
            }

        };

        if (video) {
            video.addEventListener("timeupdate", handleTimeUpdate);
        }
        if (video2) {
            video2.addEventListener("timeupdate", handleTimeUpdate);
        }

        if (video3) {
            video3.addEventListener("timeupdate", handleTimeUpdate);
        }

        if (video4) {
            video4.addEventListener("timeupdate", handleTimeUpdate);
        }

        if (video5) {
            video5.addEventListener("timeupdate", handleTimeUpdate);
        }

        if (video6) {
            video6.addEventListener("timeupdate", handleTimeUpdate);
        }

        if (video7) {
            video7.addEventListener("timeupdate", handleTimeUpdate);
        }

        if (video8) {
            video8.addEventListener("timeupdate", handleTimeUpdate);
        }

        return () => {
            video?.removeEventListener("timeupdate", handleTimeUpdate);
            video2?.removeEventListener("timeupdate", handleTimeUpdate);
            video3?.removeEventListener("timeupdate", handleTimeUpdate);
            video4?.removeEventListener("timeupdate", handleTimeUpdate);
            video5?.removeEventListener("timeupdate", handleTimeUpdate);
            video6?.removeEventListener("timeupdate", handleTimeUpdate);
            video7?.removeEventListener("timeupdate", handleTimeUpdate);
            video8?.removeEventListener("timeupdate", handleTimeUpdate);
        };
    }, []);
    return (
        <>
            <section className="categoriesContainer">
                <section className="categoriesHeading">
                    <p className="main">SHOP 22K and 24K GOLD-PLATED COLLECTION</p>
                    <p className="sub">6 MONTHS WARRANTY | COD AVAILABLE</p>
                </section>
                <section className="categoriesBody">
                    <section className="part1">
                        <img src="https://www.brishni.com/cdn/shop/files/Untitled_design_36_1400x.png?v=1655462217" alt="Jewellery" className="left1" />
                    </section>
                    <section className="part2">
                        <img src="https://www.brishni.com/cdn/shop/files/Untitled_design_36_1400x.png?v=1655462217" alt="Jewellery" className="right1" />
                        <img src="https://www.brishni.com/cdn/shop/files/Untitled_design_36_1400x.png?v=1655462217" alt="Jewellery" className="right2" />
                    </section>
                </section>
                <section className="categoriesHeading">
                    <p className="main">BEST SELLERS</p>
                </section>
                <section className="categoriesBody">
                    <section className="slidePart">
                        <section className="videoSection">
                            <video src={V1} autoPlay loop muted playsInline className="reelsVideo" ref={videoRef}></video>
                            <span>Subtle Carmine Red Tissue Silk Moti Lace Designer Saree</span>
                            <span id="originalPrice">Rs.10200</span>
                            <section>
                                <span id="discountPrice">Rs.6000</span>
                                <span id="percentageDiscount">70% Off</span>
                            </section>
                            <button id="purchase">Buy Now</button>
                        </section>
                        <section className="videoSection">
                            <video src={V2} autoPlay loop muted playsInline className="reelsVideo" ref={videoRef2}></video>
                            <span>Subtle Carmine Red Tissue Silk Moti Lace Designer Saree</span>
                            <span id="originalPrice">Rs.10200</span>
                            <section>
                                <span id="discountPrice">Rs.6000</span>
                                <span id="percentageDiscount">70% Off</span>
                            </section>
                            <button id="purchase">Buy Now</button>
                        </section>
                        <section className="videoSection">
                            <video src={V1} autoPlay loop muted playsInline className="reelsVideo" ref={videoRef3}></video>
                            <span>Subtle Carmine Red Tissue Silk Moti Lace Designer Saree</span>
                            <span id="originalPrice">Rs.10200</span>
                            <section>
                                <span id="discountPrice">Rs.6000</span>
                                <span id="percentageDiscount">70% Off</span>
                            </section>
                            <button id="purchase">Buy Now</button>
                        </section>
                        <section className="videoSection">
                            <video src={V1} autoPlay loop muted playsInline className="reelsVideo" ref={videoRef4}></video>
                            <span>Subtle Carmine Red Tissue Silk Moti Lace Designer Saree</span>
                            <span id="originalPrice">Rs.10200</span>
                            <section>
                                <span id="discountPrice">Rs.6000</span>
                                <span id="percentageDiscount">70% Off</span>
                            </section>
                            <button id="purchase">
                                Buy Now</button>
                        </section>
                    </section>
                </section>
                <section className="categoriesHeading">
                    <p className="main">PEARL COLLECTIONS</p>
                    <p className="sub">NECKLACE | CHOKER | EARRINGS | RANIHAR</p>
                </section>
                <section className="categoriesBody">
                    <section className="slidePart">
                        <section className="imageSection">
                            <img src={I1} className="jewelleryImage" />
                            <span>Subtle Carmine Red Tissue Silk Moti Lace Designer Saree</span>
                            <span id="originalPrice">Rs.10200</span>

                            <section>
                                <span id="discountPrice">Rs.6000</span>
                                <span id="percentageDiscount">70% Off</span>
                            </section>
                            {/* <button id="purchase">Buy Now</button> */}
                        </section>
                        <section className="imageSection">
                            <img src={I1} className="jewelleryImage" />
                            <span>Subtle Carmine Red Tissue Silk Moti Lace Designer Saree</span>
                            <span id="originalPrice">Rs.10200</span>
                            <section>
                                <span id="discountPrice">Rs.6000</span>
                                <span id="percentageDiscount">70% Off</span>
                            </section>
                            {/* <button id="purchase">Buy Now</button> */}
                        </section>
                        <section className="imageSection">
                            <img src={I1} className="jewelleryImage" />
                            <span>Subtle Carmine Red Tissue Silk Moti Lace Designer Saree</span>
                            <span id="originalPrice">Rs.10200</span>
                            <section>
                                <span id="discountPrice">Rs.6000</span>
                                <span id="percentageDiscount">70% Off</span>
                            </section>
                            {/* <button id="purchase">Buy Now</button> */}
                        </section>
                        <section className="imageSection">
                            <img src={I1} className="jewelleryImage" />
                            <span>Subtle Carmine Red Tissue Silk Moti Lace Designer Saree</span>
                            <span id="originalPrice">Rs.10200</span>
                            <section>
                                <span id="discountPrice">Rs.6000</span>
                                <span id="percentageDiscount">70% Off</span>
                            </section>
                            {/* <button id="purchase">Buy Now</button> */}
                        </section>
                    </section>
                </section>
                <section className="categoriesHeading">
                    <p className="main">SHELL COLLECTIONS</p>
                    <p className="sub">PENDANT | NECKLACE | LONG SET</p>
                </section>
                <section className="categoriesBody">
                    <section className="slidePart">
                        <section className="imageSection">
                            <img src={I1} className="jewelleryImage" />
                            <span>Subtle Carmine Red Tissue Silk Moti Lace Designer Saree</span>
                            <span id="originalPrice">Rs.10200</span>
                            <section>
                                <span id="discountPrice">Rs.6000</span>
                                <span id="percentageDiscount">70% Off</span>
                            </section>
                            {/* <button id="purchase">Buy Now</button> */}
                        </section>
                        <section className="imageSection">
                            <img src={I1} className="jewelleryImage" />
                            <span>Subtle Carmine Red Tissue Silk Moti Lace Designer Saree</span>
                            <span id="originalPrice">Rs.10200</span>
                            <section>
                                <span id="discountPrice">Rs.6000</span>
                                <span id="percentageDiscount">70% Off</span>
                            </section>
                            {/* <button id="purchase">Buy Now</button> */}
                        </section>
                        <section className="imageSection">
                            <img src={I1} className="jewelleryImage" />
                            <span>Subtle Carmine Red Tissue Silk Moti Lace Designer Saree</span>
                            <span id="originalPrice">Rs.10200</span>
                            <section>
                                <span id="discountPrice">Rs.6000</span>
                                <span id="percentageDiscount">70% Off</span>
                            </section>
                            {/* <button id="purchase">Buy Now</button> */}
                        </section>
                        <section className="imageSection">
                            <img src={I1} className="jewelleryImage" />
                            <span>Subtle Carmine Red Tissue Silk Moti Lace Designer Saree</span>
                            <span id="originalPrice">Rs.10200</span>
                            <section>
                                <span id="discountPrice">Rs.6000</span>
                                <span id="percentageDiscount">70% Off</span>
                            </section>
                            {/* <button id="purchase">Buy Now</button> */}
                        </section>
                    </section>
                </section>
                <section className="categoriesHeading">
                    <p className="main">CORPORATE COLLECTIONS</p>
                    {/* <p className="sub">CHUR | KANKAN | BALA | POLA</p> */}
                </section>
                <section className="categoriesBody">
                    <section className="slidePart">
                        <section className="imageSection">

                            <img src={I1} className="jewelleryImage" />
                            <span>Subtle Carmine Red Tissue Silk Moti Lace Designer Saree</span>
                            <span id="originalPrice">Rs.10200</span>
                            <section>
                                <span id="discountPrice">Rs.6000</span>
                                <span id="percentageDiscount">70% Off</span>
                            </section>
                            {/* <button id="purchase">Buy Now</button> */}

                        </section>
                        <section className="imageSection">

                            <img src={I1} className="jewelleryImage" />
                            <span>Subtle Carmine Red Tissue Silk Moti Lace Designer Saree</span>
                            <span id="originalPrice">Rs.10200</span>
                            <section>
                                <span id="discountPrice">Rs.6000</span>
                                <span id="percentageDiscount">70% Off</span>
                            </section>
                            {/* <button id="purchase">Buy Now</button> */}
                        </section>
                        <section className="imageSection">

                            <img src={I1} className="jewelleryImage" />
                            <span>Subtle Carmine Red Tissue Silk Moti Lace Designer Saree</span>
                            <span id="originalPrice">Rs.10200</span>
                            <section>
                                <span id="discountPrice">Rs.6000</span>
                                <span id="percentageDiscount">70% Off</span>
                            </section>
                            {/* <button id="purchase">Buy Now</button> */}
                        </section>
                        <section className="imageSection">

                            <img src={I1} className="jewelleryImage" />
                            <span>Subtle Carmine Red Tissue Silk Moti Lace Designer Saree</span>
                            <span id="originalPrice">Rs.10200</span>
                            <section>
                                <span id="discountPrice">Rs.6000</span>
                                <span id="percentageDiscount">70% Off</span>
                            </section>
                            {/* <button id="purchase">Buy Now</button> */}
                        </section>
                    </section>
                </section>
                <section className="categoriesHeading">
                    <p className="main">MINIMALIST COLLECTIONS</p>
                    {/* <p className="sub">CHUR | KANKAN | BALA | POLA</p> */}
                </section>
                <section className="categoriesBody">
                    <section className="slidePart">
                        <section className="imageSection">

                            <img src={I1} className="jewelleryImage" />
                            <span>Subtle Carmine Red Tissue Silk Moti Lace Designer Saree</span>
                            <span id="originalPrice">Rs.10200</span>
                            <section>
                                <span id="discountPrice">Rs.6000</span>
                                <span id="percentageDiscount">70% Off</span>
                            </section>
                            {/* <button id="purchase">Buy Now</button> */}

                        </section>
                        <section className="imageSection">

                            <img src={I1} className="jewelleryImage" />
                            <span>Subtle Carmine Red Tissue Silk Moti Lace Designer Saree</span>
                            <span id="originalPrice">Rs.10200</span>
                            <section>
                                <span id="discountPrice">Rs.6000</span>
                                <span id="percentageDiscount">70% Off</span>
                            </section>
                            {/* <button id="purchase">Buy Now</button> */}
                        </section>
                        <section className="imageSection">

                            <img src={I1} className="jewelleryImage" />
                            <span>Subtle Carmine Red Tissue Silk Moti Lace Designer Saree</span>
                            <span id="originalPrice">Rs.10200</span>
                            <section>
                                <span id="discountPrice">Rs.6000</span>
                                <span id="percentageDiscount">70% Off</span>
                            </section>
                            {/* <button id="purchase">Buy Now</button> */}
                        </section>
                        <section className="imageSection">

                            <img src={I1} className="jewelleryImage" />
                            <span>Subtle Carmine Red Tissue Silk Moti Lace Designer Saree</span>
                            <span id="originalPrice">Rs.10200</span>
                            <section>
                                <span id="discountPrice">Rs.6000</span>
                                <span id="percentageDiscount">70% Off</span>
                            </section>
                            {/* <button id="purchase">Buy Now</button> */}
                        </section>
                    </section>
                </section>
                <section className="categoriesHeading">
                    <p className="main">SHOP NECKLACE SETS</p>
                    {/* <p className="sub">CHUR | KANKAN | BALA | POLA</p> */}
                </section>
                <section className="categoriesBody">
                    <section className="slidePart">
                        <section className="imageSection">

                            <img src={I1} className="jewelleryImage" />
                            <span>Subtle Carmine Red Tissue Silk Moti Lace Designer Saree</span>
                            <span id="originalPrice">Rs.10200</span>
                            <section>
                                <span id="discountPrice">Rs.6000</span>
                                <span id="percentageDiscount">70% Off</span>
                            </section>
                            {/* <button id="purchase">Buy Now</button> */}

                        </section>
                        <section className="imageSection">

                            <img src={I1} className="jewelleryImage" />
                            <span>Subtle Carmine Red Tissue Silk Moti Lace Designer Saree</span>
                            <span id="originalPrice">Rs.10200</span>
                            <section>
                                <span id="discountPrice">Rs.6000</span>
                                <span id="percentageDiscount">70% Off</span>
                            </section>
                            {/* <button id="purchase">Buy Now</button> */}
                        </section>
                        <section className="imageSection">

                            <img src={I1} className="jewelleryImage" />
                            <span>Subtle Carmine Red Tissue Silk Moti Lace Designer Saree</span>
                            <span id="originalPrice">Rs.10200</span>
                            <section>
                                <span id="discountPrice">Rs.6000</span>
                                <span id="percentageDiscount">70% Off</span>
                            </section>
                            {/* <button id="purchase">Buy Now</button> */}
                        </section>
                        <section className="imageSection">

                            <img src={I1} className="jewelleryImage" />
                            <span>Subtle Carmine Red Tissue Silk Moti Lace Designer Saree</span>
                            <span id="originalPrice">Rs.10200</span>
                            <section>
                                <span id="discountPrice">Rs.6000</span>
                                <span id="percentageDiscount">70% Off</span>
                            </section>
                            {/* <button id="purchase">Buy Now</button> */}
                        </section>
                    </section>
                </section>
                <section className="categoriesHeading">
                    <p className="main">SHOP CHOKERS</p>
                    {/* <p className="sub">CHUR | KANKAN | BALA | POLA</p> */}
                </section>
                <section className="categoriesBody">
                    <section className="slidePart">
                        <section className="imageSection">

                            <img src={I1} className="jewelleryImage" />
                            <span>Subtle Carmine Red Tissue Silk Moti Lace Designer Saree</span>
                            <span id="originalPrice">Rs.10200</span>
                            <section>
                                <span id="discountPrice">Rs.6000</span>
                                <span id="percentageDiscount">70% Off</span>
                            </section>
                            {/* <button id="purchase">Buy Now</button> */}

                        </section>
                        <section className="imageSection">

                            <img src={I1} className="jewelleryImage" />
                            <span>Subtle Carmine Red Tissue Silk Moti Lace Designer Saree</span>
                            <span id="originalPrice">Rs.10200</span>
                            <section>
                                <span id="discountPrice">Rs.6000</span>
                                <span id="percentageDiscount">70% Off</span>
                            </section>
                            {/* <button id="purchase">Buy Now</button> */}
                        </section>
                        <section className="imageSection">

                            <img src={I1} className="jewelleryImage" />
                            <span>Subtle Carmine Red Tissue Silk Moti Lace Designer Saree</span>
                            <span id="originalPrice">Rs.10200</span>
                            <section>
                                <span id="discountPrice">Rs.6000</span>
                                <span id="percentageDiscount">70% Off</span>
                            </section>
                            {/* <button id="purchase">Buy Now</button> */}
                        </section>
                        <section className="imageSection">

                            <img src={I1} className="jewelleryImage" />
                            <span>Subtle Carmine Red Tissue Silk Moti Lace Designer Saree</span>
                            <span id="originalPrice">Rs.10200</span>
                            <section>
                                <span id="discountPrice">Rs.6000</span>
                                <span id="percentageDiscount">70% Off</span>
                            </section>
                            {/* <button id="purchase">Buy Now</button> */}
                        </section>
                    </section>
                </section>
                <section className="categoriesHeading">
                    <p className="main">SHOP EARRINGS</p>
                    {/* <p className="sub">CHUR | KANKAN | BALA | POLA</p> */}
                </section>
                <section className="categoriesBody">
                    <section className="slidePart">
                        <section className="imageSection">

                            <img src={I1} className="jewelleryImage" />
                            <span>Subtle Carmine Red Tissue Silk Moti Lace Designer Saree</span>
                            <span id="originalPrice">Rs.10200</span>
                            <section>
                                <span id="discountPrice">Rs.6000</span>
                                <span id="percentageDiscount">70% Off</span>
                            </section>
                            {/* <button id="purchase">Buy Now</button> */}

                        </section>
                        <section className="imageSection">

                            <img src={I1} className="jewelleryImage" />
                            <span>Subtle Carmine Red Tissue Silk Moti Lace Designer Saree</span>
                            <span id="originalPrice">Rs.10200</span>
                            <section>
                                <span id="discountPrice">Rs.6000</span>
                                <span id="percentageDiscount">70% Off</span>
                            </section>
                            {/* <button id="purchase">Buy Now</button> */}
                        </section>
                        <section className="imageSection">

                            <img src={I1} className="jewelleryImage" />
                            <span>Subtle Carmine Red Tissue Silk Moti Lace Designer Saree</span>
                            <span id="originalPrice">Rs.10200</span>
                            <section>
                                <span id="discountPrice">Rs.6000</span>
                                <span id="percentageDiscount">70% Off</span>
                            </section>
                            {/* <button id="purchase">Buy Now</button> */}
                        </section>
                        <section className="imageSection">

                            <img src={I1} className="jewelleryImage" />
                            <span>Subtle Carmine Red Tissue Silk Moti Lace Designer Saree</span>
                            <span id="originalPrice">Rs.10200</span>
                            <section>
                                <span id="discountPrice">Rs.6000</span>
                                <span id="percentageDiscount">70% Off</span>
                            </section>
                            {/* <button id="purchase">Buy Now</button> */}
                        </section>
                    </section>
                </section>
                <section className="categoriesHeading">
                    <p className="main">SHOP BANGLES</p>
                    {/* <p className="sub">CHUR | KANKAN | BALA | POLA</p> */}
                </section>
                <section className="categoriesBody">
                    <section className="slidePart">
                        <section className="imageSection">

                            <img src={I1} className="jewelleryImage" />
                            <span>Subtle Carmine Red Tissue Silk Moti Lace Designer Saree</span>
                            <span id="originalPrice">Rs.10200</span>
                            <section>
                                <span id="discountPrice">Rs.6000</span>
                                <span id="percentageDiscount">70% Off</span>
                            </section>
                            {/* <button id="purchase">Buy Now</button> */}

                        </section>
                        <section className="imageSection">

                            <img src={I1} className="jewelleryImage" />
                            <span>Subtle Carmine Red Tissue Silk Moti Lace Designer Saree</span>
                            <span id="originalPrice">Rs.10200</span>
                            <section>
                                <span id="discountPrice">Rs.6000</span>
                                <span id="percentageDiscount">70% Off</span>
                            </section>
                            {/* <button id="purchase">Buy Now</button> */}
                        </section>
                        <section className="imageSection">

                            <img src={I1} className="jewelleryImage" />
                            <span>Subtle Carmine Red Tissue Silk Moti Lace Designer Saree</span>
                            <span id="originalPrice">Rs.10200</span>
                            <section>
                                <span id="discountPrice">Rs.6000</span>
                                <span id="percentageDiscount">70% Off</span>
                            </section>
                            {/* <button id="purchase">Buy Now</button> */}
                        </section>
                        <section className="imageSection">

                            <img src={I1} className="jewelleryImage" />
                            <span>Subtle Carmine Red Tissue Silk Moti Lace Designer Saree</span>
                            <span id="originalPrice">Rs.10200</span>
                            <section>
                                <span id="discountPrice">Rs.6000</span>
                                <span id="percentageDiscount">70% Off</span>
                            </section>
                            {/* <button id="purchase">Buy Now</button> */}
                        </section>
                    </section>
                </section>
                <section className="categoriesHeading">
                    <p className="main">SHOP MOP CHAIN</p>
                    {/* <p className="sub">CHUR | KANKAN | BALA | POLA</p> */}
                </section>
                <section className="categoriesBody">
                    <section className="slidePart">
                        <section className="imageSection">

                            <img src={I1} className="jewelleryImage" />
                            <span>Subtle Carmine Red Tissue Silk Moti Lace Designer Saree</span>
                            <span id="originalPrice">Rs.10200</span>
                            <section>
                                <span id="discountPrice">Rs.6000</span>
                                <span id="percentageDiscount">70% Off</span>
                            </section>
                            {/* <button id="purchase">Buy Now</button> */}

                        </section>
                        <section className="imageSection">

                            <img src={I1} className="jewelleryImage" />
                            <span>Subtle Carmine Red Tissue Silk Moti Lace Designer Saree</span>
                            <span id="originalPrice">Rs.10200</span>
                            <section>
                                <span id="discountPrice">Rs.6000</span>
                                <span id="percentageDiscount">70% Off</span>
                            </section>
                            {/* <button id="purchase">Buy Now</button> */}
                        </section>
                        <section className="imageSection">

                            <img src={I1} className="jewelleryImage" />
                            <span>Subtle Carmine Red Tissue Silk Moti Lace Designer Saree</span>
                            <span id="originalPrice">Rs.10200</span>
                            <section>
                                <span id="discountPrice">Rs.6000</span>
                                <span id="percentageDiscount">70% Off</span>
                            </section>
                            {/* <button id="purchase">Buy Now</button> */}
                        </section>
                        <section className="imageSection">

                            <img src={I1} className="jewelleryImage" />
                            <span>Subtle Carmine Red Tissue Silk Moti Lace Designer Saree</span>
                            <span id="originalPrice">Rs.10200</span>
                            <section>
                                <span id="discountPrice">Rs.6000</span>
                                <span id="percentageDiscount">70% Off</span>
                            </section>
                            {/* <button id="purchase">Buy Now</button> */}
                        </section>
                    </section>
                </section>
                <section className="categoriesHeading">
                    <p className="main">SHOP TIE CHAIN</p>
                    {/* <p className="sub">CHUR | KANKAN | BALA | POLA</p> */}
                </section>
                <section className="categoriesBody">
                    <section className="slidePart">
                        <section className="imageSection">

                            <img src={I1} className="jewelleryImage" />
                            <span>Subtle Carmine Red Tissue Silk Moti Lace Designer Saree</span>
                            <span id="originalPrice">Rs.10200</span>
                            <section>
                                <span id="discountPrice">Rs.6000</span>
                                <span id="percentageDiscount">70% Off</span>
                            </section>
                            {/* <button id="purchase">Buy Now</button> */}

                        </section>
                        <section className="imageSection">

                            <img src={I1} className="jewelleryImage" />
                            <span>Subtle Carmine Red Tissue Silk Moti Lace Designer Saree</span>
                            <span id="originalPrice">Rs.10200</span>
                            <section>
                                <span id="discountPrice">Rs.6000</span>
                                <span id="percentageDiscount">70% Off</span>
                            </section>
                            {/* <button id="purchase">Buy Now</button> */}
                        </section>
                        <section className="imageSection">

                            <img src={I1} className="jewelleryImage" />
                            <span>Subtle Carmine Red Tissue Silk Moti Lace Designer Saree</span>
                            <span id="originalPrice">Rs.10200</span>
                            <section>
                                <span id="discountPrice">Rs.6000</span>
                                <span id="percentageDiscount">70% Off</span>
                            </section>
                            {/* <button id="purchase">Buy Now</button> */}
                        </section>
                        <section className="imageSection">

                            <img src={I1} className="jewelleryImage" />
                            <span>Subtle Carmine Red Tissue Silk Moti Lace Designer Saree</span>
                            <span id="originalPrice">Rs.10200</span>
                            <section>
                                <span id="discountPrice">Rs.6000</span>
                                <span id="percentageDiscount">70% Off</span>
                            </section>
                            {/* <button id="purchase">Buy Now</button> */}
                        </section>
                    </section>
                </section>
                <section className="categoriesHeading">
                    <p className="main">SHOP PENDANT</p>
                    {/* <p className="sub">CHUR | KANKAN | BALA | POLA</p> */}
                </section>
                <section className="categoriesBody">
                    <section className="slidePart">
                        <section className="imageSection">

                            <img src={I1} className="jewelleryImage" />
                            <span>Subtle Carmine Red Tissue Silk Moti Lace Designer Saree</span>
                            <span id="originalPrice">Rs.10200</span>
                            <section>
                                <span id="discountPrice">Rs.6000</span>
                                <span id="percentageDiscount">70% Off</span>
                            </section>
                            {/* <button id="purchase">Buy Now</button> */}

                        </section>
                        <section className="imageSection">

                            <img src={I1} className="jewelleryImage" />
                            <span>Subtle Carmine Red Tissue Silk Moti Lace Designer Saree</span>
                            <span id="originalPrice">Rs.10200</span>
                            <section>
                                <span id="discountPrice">Rs.6000</span>
                                <span id="percentageDiscount">70% Off</span>
                            </section>
                            {/* <button id="purchase">Buy Now</button> */}
                        </section>
                        <section className="imageSection">

                            <img src={I1} className="jewelleryImage" />
                            <span>Subtle Carmine Red Tissue Silk Moti Lace Designer Saree</span>
                            <span id="originalPrice">Rs.10200</span>
                            <section>
                                <span id="discountPrice">Rs.6000</span>
                                <span id="percentageDiscount">70% Off</span>
                            </section>
                            {/* <button id="purchase">Buy Now</button> */}
                        </section>
                        <section className="imageSection">

                            <img src={I1} className="jewelleryImage" />
                            <span>Subtle Carmine Red Tissue Silk Moti Lace Designer Saree</span>
                            <span id="originalPrice">Rs.10200</span>
                            <section>
                                <span id="discountPrice">Rs.6000</span>
                                <span id="percentageDiscount">70% Off</span>
                            </section>
                            {/* <button id="purchase">Buy Now</button> */}
                        </section>
                    </section>
                </section>
                <section className="categoriesHeading">
                    <p className="main">SHOP RANIHAR</p>
                    {/* <p className="sub">CHUR | KANKAN | BALA | POLA</p> */}
                </section>
                <section className="categoriesBody">
                    <section className="slidePart">
                        <section className="imageSection">

                            <img src={I1} className="jewelleryImage" />
                            <span>Subtle Carmine Red Tissue Silk Moti Lace Designer Saree</span>
                            <span id="originalPrice">Rs.10200</span>
                            <section>
                                <span id="discountPrice">Rs.6000</span>
                                <span id="percentageDiscount">70% Off</span>
                            </section>
                            {/* <button id="purchase">Buy Now</button> */}

                        </section>
                        <section className="imageSection">

                            <img src={I1} className="jewelleryImage" />
                            <span>Subtle Carmine Red Tissue Silk Moti Lace Designer Saree</span>
                            <span id="originalPrice">Rs.10200</span>
                            <section>
                                <span id="discountPrice">Rs.6000</span>
                                <span id="percentageDiscount">70% Off</span>
                            </section>
                            {/* <button id="purchase">Buy Now</button> */}
                        </section>
                        <section className="imageSection">

                            <img src={I1} className="jewelleryImage" />
                            <span>Subtle Carmine Red Tissue Silk Moti Lace Designer Saree</span>
                            <span id="originalPrice">Rs.10200</span>
                            <section>
                                <span id="discountPrice">Rs.6000</span>
                                <span id="percentageDiscount">70% Off</span>
                            </section>
                            {/* <button id="purchase">Buy Now</button> */}
                        </section>
                        <section className="imageSection">

                            <img src={I1} className="jewelleryImage" />
                            <span>Subtle Carmine Red Tissue Silk Moti Lace Designer Saree</span>
                            <span id="originalPrice">Rs.10200</span>
                            <section>
                                <span id="discountPrice">Rs.6000</span>
                                <span id="percentageDiscount">70% Off</span>
                            </section>
                            {/* <button id="purchase">Buy Now</button> */}
                        </section>
                    </section>
                </section>
                <section className="categoriesHeading">
                    <p className="main">BRACELET COLLECTIONS</p>
                    {/* <p className="sub">CHUR | KANKAN | BALA | POLA</p> */}
                </section>
                <section className="categoriesBody">
                    <section className="slidePart">
                        <section className="imageSection">

                            <img src={I1} className="jewelleryImage" />
                            <span>Subtle Carmine Red Tissue Silk Moti Lace Designer Saree</span>
                            <span id="originalPrice">Rs.10200</span>
                            <section>
                                <span id="discountPrice">Rs.6000</span>
                                <span id="percentageDiscount">70% Off</span>
                            </section>
                            {/* <button id="purchase">Buy Now</button> */}

                        </section>
                        <section className="imageSection">

                            <img src={I1} className="jewelleryImage" />
                            <span>Subtle Carmine Red Tissue Silk Moti Lace Designer Saree</span>
                            <span id="originalPrice">Rs.10200</span>
                            <section>
                                <span id="discountPrice">Rs.6000</span>
                                <span id="percentageDiscount">70% Off</span>
                            </section>
                            {/* <button id="purchase">Buy Now</button> */}
                        </section>
                        <section className="imageSection">

                            <img src={I1} className="jewelleryImage" />
                            <span>Subtle Carmine Red Tissue Silk Moti Lace Designer Saree</span>
                            <span id="originalPrice">Rs.10200</span>
                            <section>
                                <span id="discountPrice">Rs.6000</span>
                                <span id="percentageDiscount">70% Off</span>
                            </section>
                            {/* <button id="purchase">Buy Now</button> */}
                        </section>
                        <section className="imageSection">

                            <img src={I1} className="jewelleryImage" />
                            <span>Subtle Carmine Red Tissue Silk Moti Lace Designer Saree</span>
                            <span id="originalPrice">Rs.10200</span>
                            <section>
                                <span id="discountPrice">Rs.6000</span>
                                <span id="percentageDiscount">70% Off</span>
                            </section>
                            {/* <button id="purchase">Buy Now</button> */}
                        </section>
                    </section>
                </section>
            </section>
        </>
    )
}

export default Categories;
