import React from 'react';
import { Link } from 'react-router';
import CountryFlag from './flag.component';
import styles from '../country.css';

const CountryFlagList = (props) => (
    <div className="countries-list" style={styles}>
        {props.countries.map(country => {
            return (
                <div className="single-country" style={styles} key={country.id}>
                    <Link className='logo' to={'countries/country/' + country.id}>
                        <CountryFlag country={country} />
                    </Link>
                    <button onClick={props.deleteCountry.bind(null, country.id)}>DELETE</button>
                </div>
            )
        })}
    </div>
);

export default CountryFlagList;