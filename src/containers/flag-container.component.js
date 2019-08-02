import React, { Component } from 'react';
import { connect } from 'react-redux';
import CountryFlagList from '../presentational/flag-list.component';
import ListButtons from '../presentational/list-buttons.component';
import PageButtons from '../presentational/page-buttons.component';
import { getCountries, searchCountries, deleteCountry, numberOfCountries, getPage } from '../actions/action-countries';

class CountryFlagContainer extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.dispatch(getCountries());
        this.props.dispatch(searchCountries(''));
    }

    search(event) {
        this.props.dispatch(searchCountries(event.target.value));
    }

    deleteCountry(id) {
        this.props.dispatch(deleteCountry(id));
    }

    updateNrOfCountries(val) {
        this.props.dispatch(numberOfCountries(val));
    }

    updatePageNumber(val) {
        this.props.dispatch(getPage(val));
    }


    render() {
        return (
            <div>
                <div className="search text-center">
                    <input type="text" onChange={this.search.bind(this)}/>
                </div>
                <ListButtons updateNrOfCountries={this.updateNrOfCountries.bind(this)} />
                <PageButtons numberOfStateCountries={this.props.countries} numberOfCountriesChoosed={this.props.numberOfCountriesChoosed} updatePage={this.updatePageNumber.bind(this)} />
                <CountryFlagList countries={this.props.visibleCountries} deleteCountry={this.deleteCountry.bind(this)} />
            </div>
        )
    }
}

const mapStateToProps = function (store) {
    return {
        countries: store.countriesReducer.countries,
        visibleCountries: store.countriesReducer.visibleCountries,
        actuallPage: store.countriesReducer.actuallPage,
        numberOfCountriesChoosed: store.countriesReducer.numberOfCountriesChoosed
    };
};

export default connect(mapStateToProps)(CountryFlagContainer);