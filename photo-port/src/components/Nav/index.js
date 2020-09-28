import React from 'react';
//import headerImage from "../../assets/cover/header-image.jpg";
//<img src={headerImage} className="my-2" style={{ width: "100%" }} alt="header" />

function Nav() {

    const categories = [

        { name: "Portfolio", description: "" },
        { name: "Resume", description: "" },

    ];

    function categorySelected(name) {
        console.log(`${name} clicked`)
    }

    return (
        <header>
            <section>

                <h1>

                    <a data-testid="link" href="/">
                        <span> </span> Kenneth Sorensen
                </a>
                </h1>

                <nav>
                    <ul className="flex-row">
                        <li className="mx-2">
                            <a data-testidw="about" href="#about">
                                About me
                        </a>
                        </li>
                        <li className="mx-1">
                            <span>Contact</span>
                        </li>
                        {categories.map((category) => (
                            <li className="mx-1" key={category.name}>
                                <span onClick={() => categorySelected(category.name)} >
                                    {category.name}
                                </span>
                            </li>
                        ))}
                    </ul>
                </nav>
            </section>
        </header>
    );
}

export default Nav;