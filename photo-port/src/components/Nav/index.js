import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from "../../utils/helpers";

//import headerImage from "../../assets/cover/header-image.jpg";
//<img src={headerImage} className="my-2" style={{ width: "100%" }} alt="header" />

useEffect(() => {
    document.title = capitalizeFirstLetter(currentCategory.name)
},
    [currentCategory]);

function Nav(props) {
    const { categories = [], setCurrentCategory, currentCategory, } = props;

    return (
        <header className="flex-row px-1">
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
                    <li className="mx-2">
                        <span>Contact</span>
                    </li>
                    {categories.map((category) => (
                        <li className={`mx-1 ${currentCategory.name === category.name && 'navActive'}`} key={category.name}>
                            <span onClick={() => { setCurrentCategory(category) }}>
                                {capitalizeFirstLetter(category.name)}
                            </span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Nav;