import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function myInfo(props) {
    const currentCategory = {
        description: "My info here",
    };
    return (
        <section>
            <h1>{capitalizeFirstLetter(currentCategory.name)}</h1>
            <p>{currentCategory.name}</p>
        </section>
    );
}
export default myInfo;