import React from 'react';
import './Card.css';

function getTechnologies(technology) {
    let content = [];
    for (let i = 0; i < technology.length; i++) {
        const item = technology[i];
        content.push(<div key={item}>{item}</div>);
    }
    return content;
}

export function Card({ firstName, lastName, age, technologies }) {
    return (
        <div className='card__container'>
            <h1 className='card-user__name'>
                {firstName} {lastName}
            </h1>

            <h3 className='card-user__age'>Age: {age}</h3>
            <h4 className='card-user__technologies'>
                Technologies: {getTechnologies(technologies)}
            </h4>
        </div>
    );
}

export default Card;
