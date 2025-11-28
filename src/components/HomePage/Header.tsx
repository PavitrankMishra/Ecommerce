import Logo from "../../assets/Logo.png";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import {useState } from "react";

const Header = () => {
    const [inputValue, setInputValue] = useState("");
    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    }
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
