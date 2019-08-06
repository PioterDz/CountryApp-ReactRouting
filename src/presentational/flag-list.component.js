import React, { Component } from 'react';
import { Link } from 'react-router';
import CountryFlag from './flag.component';
import styles from '../country.css';


class CountryFlagList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        
        const page = this.props.actuallPage;
        const numberToDisplay = this.props.numberChoosed;

        const maxOfCountries = page * numberToDisplay;
        const minOfCountries = ((pag, num) => {
            if(pag === 1) {
                return 0;
            }
            return num;
        });

        const countriesToDisplay = this.props.countries.slice(minOfCountries(page, numberToDisplay), maxOfCountries);

        return (
            <div className="countries-list" style={styles}>
                { countriesToDisplay.map(country => {
                    return (
                    <div className="single-country" style={styles} key={country.id}>
                        <Link className='logo' to={'countries/country/' + country.id}>
                            <CountryFlag country={country} />
                        </Link>
                        <button onClick={this.props.deleteCountry.bind(null, country.id)}>DELETE</button>
                    </div>
                    )}
                )}
            </div>
        );
    }
}

export default CountryFlagList;