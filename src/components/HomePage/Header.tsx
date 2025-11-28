import Logo from "../../assets/Logo.png";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

const Header = () => {
    const [inputValue, setInputValue] = useState("");
    const handleInput = (e) => {
        setInputValue(e.target.value);
    }
    // const valArr = ["Jewellery", "Gold", "Silver"];
    // const [placeholderIndex, setPlaceholderIndex] = useState(0);

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setPlaceholderIndex((prev) => (prev + 1) % valArr.length);
    //     }, 2000);

    //     return () => clearInterval(interval);
    // }, []);

    return (
        <>
            <section className="headerSection">
                <section className="search">
                    <input placeholder="Search Product" value={inputValue} onChange={(e) => handleInput(e)} className="placeholderFade"></input>
                    <button>
                        <FontAwesomeIcon icon={faMagnifyingGlass} id="magnifying" size="xl" />
                    </button>
                </section>

                <img src={Logo} className="logoImage"></img>
                <button>
                    <FontAwesomeIcon icon={faBagShopping} id="bag" size="xl" />
                </button>
            </section>
        </>
    )
}

export default Header
