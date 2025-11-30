import "./Categories.css";
import V1 from "../../assets/Instareels.mp4";
import V2 from "../../assets/Instareels2.mp4";
import { useEffect, useRef, useState } from "react";

const Categories = () => {
    const [isPlaying, setIsPlaying] = useState(true);
    const [isReady, setIsReady] = useState(false);
    const videoRef = useRef(null);
    const videoRef2 = useRef(null);
    const videoRef3 = useRef(null);
    const videoRef4 = useRef(null);
    const videoRef5 = useRef(null);
    const videoRef6 = useRef(null);
    const videoRef7 = useRef(null);
    const videoRef8 = useRef(null);

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
            if (video.currentTime >= 5) {
                video.currentTime = 0;
                video.play();
            } else if (video2.currentTime >= 5) {
                video2.currentTime = 0;
                video2.play();
            } else if (video3.currentTime >= 5) {
                video3.currentTime = 0;
                video3.play();
            } else if (video4.currentTime >= 5) {
                video4.currentTime = 0;
                video4.play();
            } else if (video5.currentTime >= 5) {
                video5.currentTime = 0;
                video5.play();
            } else if (video6.currentTime >= 5) {
                video6.currentTime = 0;
                video6.play();
            } else if (video7.currentTime >= 5) {
                video7.currentTime = 0;
                video7.play();
            } else if (video8.currentTime >= 5) {
                video8.currentTTime = 0;
                video8.play();
            }
        };

        video.addEventListener("timeupdate", handleTimeUpdate);

        return () => {
            video.removeEventListener("timeupdate", handleTimeUpdate);
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
                    <p className="main">BRIDAL COLLECTIONS</p>
                    <p className="sub">Soulful Designs Of Bridal Accessories</p>
                </section>
                <section className="categoriesBody">
                    <section className="slidePart">
                        <video src={V1} autoPlay loop muted playsInline className="reelsVideo" ref={videoRef}></video>
                        <video src={V2} autoPlay loop muted playsInline className="reelsVideo" ref={videoRef2}></video>
                        <video src={V1} autoPlay loop muted playsInline className="reelsVideo" ref={videoRef3}></video>
                        <video src={V1} autoPlay loop muted playsInline className="reelsVideo" ref={videoRef4}></video>
                    </section>
                </section>
                <section className="categoriesHeading">
                    <p className="main">SHOP NECKLACE SETS</p>
                    <p className="sub">Bengali Traditional Designs</p>
                </section>
                <section className="categoriesBody">
                    <section className="slidePart">
                        <video src={V1} autoPlay loop muted playsInline className="reelsVideo" ref={videoRef5}></video>
                        <video src={V2} autoPlay loop muted playsInline className="reelsVideo" ref={videoRef6}></video>
                        <video src={V1} autoPlay loop muted playsInline className="reelsVideo" ref={videoRef7}></video>
                        <video src={V1} autoPlay loop muted playsInline className="reelsVideo" ref={videoRef8}></video>
                    </section>
                </section>
                {/* <section className="categoriesHeading">
                    <p className="main">SHOP BANGLES</p>
                    <p className="sub">Bengali Traditional Collections</p>
                </section>
                <section className="categoriesBody">
                    <section className="slidePart">
                        <video src={V1} autoPlay loop muted playsInline className="reelsVideo" ref={videoRef}></video>
                        <video src={V2} autoPlay loop muted playsInline className="reelsVideo" ref={videoRef2}></video>
                        <video src={V1} autoPlay loop muted playsInline className="reelsVideo" ref={videoRef3}></video>
                        <video src={V1} autoPlay loop muted playsInline className="reelsVideo" ref={videoRef4}></video>
                    </section>
                </section>
                <section className="categoriesHeading">
                    <p className="main">BEST SELLER NECKLACES</p>
                    <p className="sub">Crafted For The Queen</p>
                </section>
                <section className="categoriesBody">
                    <section className="slidePart">
                        <video src={V1} autoPlay loop muted playsInline className="reelsVideo" ref={videoRef}></video>
                        <video src={V2} autoPlay loop muted playsInline className="reelsVideo" ref={videoRef2}></video>
                        <video src={V1} autoPlay loop muted playsInline className="reelsVideo" ref={videoRef3}></video>
                        <video src={V1} autoPlay loop muted playsInline className="reelsVideo" ref={videoRef4}></video>
                    </section>
                </section> */}
            </section>
        </>
    )
}

export default Categories;
