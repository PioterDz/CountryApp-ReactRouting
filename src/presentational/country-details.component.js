import React from 'react';
import styles from '../country.css';

const CountryDetails = (props) => (
    <div className="country-wrapper" style={styles}>
        <header>
            <img className="country-photo" src={props.country.imageUrl} style={styles} alt="country" />
        </header>
        <div className="country-info" style={styles}>
            <h1 style={styles}>{props.country.name}</h1>
            <h2 style={styles}>Kontynent: {props.country.continent}</h2>

            <div className="info" style={styles}>
                <div>
                    <span>{props.country.populace}</span>
                    <span>Ludność[mln]</span>
                </div>

                <div>
                    <span>{props.country.capital}</span>
                    <span>Stolica</span>
                </div>

                <div>
                    <span>{props.country.currency}</span>
                    <span>Waluta</span>
                </div>
            </div>
        </div>
    </div>
);

export default CountryDetails;