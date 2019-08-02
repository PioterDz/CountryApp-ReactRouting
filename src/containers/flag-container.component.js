import React, { Component } from 'react';
import { connect } from 'react-redux';
import CountryFlagList from '../presentational/flag-list.component';
import ListButtons from '../presentational/list-buttons.component';
import PageButtons from '../presentational/page-buttons.component';
import { getCountries, searchCountries, deleteCountry, numberOfCountries, getPage, getNumberOfPages } from '../actions/action-countries';

class CountryFlagContainer extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.dispatch(getCountries());
        this.props.dispatch(searchCountries(''));
        this.props.dispatch(getPage(this.props.actuallPage));
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

    updateNrOfPage(number) {
        this.props.dispatch(getPage(number));
    }

    render() {
        console.log(this.props.numberOfPages, 'nr of pages');
        console.log(this.props.visibleCountries, 'visible countries');
        console.log(this.props.countries, 'countries');
        return (
            <div>
                <div className="search text-center">
                    <input type="text" onChange={this.search.bind(this)}/>
                </div>
                <PageButtons numberOfPages={this.props.numberOfPages}/>
                <ListButtons listBtns={this.props.numberOfCountriesOnPage} updateNrOfCountries={this.updateNrOfCountries.bind(this)} />
                <CountryFlagList countries={this.props.visibleCountries} deleteCountry={this.deleteCountry.bind(this)} />
            </div>
        )
    }
}

const mapStateToProps = function (store) {
    return {
        countries: store.countriesReducer.countries,
        visibleCountries: store.countriesReducer.visibleCountries,
        numberOfCountriesOnPage: store.countriesReducer.numberOfCountriesOnPage,
        actuallPage: store.countriesReducer.actuallPage,
        numberOfPages: store.countriesReducer.numberOfPages
    };
};

export default connect(mapStateToProps)(CountryFlagContainer);