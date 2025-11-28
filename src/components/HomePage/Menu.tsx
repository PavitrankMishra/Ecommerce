import "./Menu.css";

function Menu() {
    const menuOptions = ["Home", "Collections", "Bridal Collections", "Read Reviews", "Warranty", "Tracking", "Return-Exchange"];
    return (
        <>
            <section className="menuContainer">
                <ul>
                    {
                        menuOptions.map((m) => {
                            return (
                                <li>{m.toUpperCase()}</li>
                            )
                        })
                    }

                </ul>
            </section>
        </>
    )
}

export default Menu;
