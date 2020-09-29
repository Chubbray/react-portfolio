import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import Portfolio from '../Portfolio/portfolio';

function myInfo({ currentCategory }) {
    const { name, description } = currentCategory;
    return (
        <section>
            <h1 data-testid="h1tag">{capitalizeFirstLetter(name)}</h1>
            <p>{description}</p>
            <Portfolio />
        </section>
    );
}
export default myInfo;