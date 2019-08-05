import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setContinent, deleteCountry, numberOfCountries, getPage } from '../actions/action-countries';
import CountryFlagList from '../presentational/flag-list.component';
import ListButtons from '../presentational/list-buttons.component';
import PageButtons from '../presentational/page-buttons.component';

class ContinentsContainer extends Component {
    constructor(props) {
        super(props);
    }

    chooseContinent(event) {
        this.props.dispatch(setContinent(event.target.value))
    }

    deleteCountry(id) {
        this.props.dispatch(deleteCountry(id));
    }

    componentDidMount() {
        this.props.dispatch(setContinent('Europa'));
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
                <select onChange={e => this.chooseContinent(e)}>
                    <option value="Europa">Europa</option>
                    <option value="Afryka">Afryka</option>
                </select>
                <ListButtons updateNrOfCountries={this.updateNrOfCountries.bind(this)} />
                <PageButtons 
                numberOfStateCountries={this.props.visibleCountries}
                numberOfCountriesChoosed={this.props.numberOfCountriesChoosed} 
                updatePage={this.updatePageNumber.bind(this)} 
                />
                <CountryFlagList 
                numberChoosed={this.props.numberOfCountriesChoosed}
                actuallPage={this.props.actuallPage}
                countries={this.props.visibleCountries} 
                deleteCountry={this.deleteCountry.bind(this)}
                />
            </div>
        )
    }
}

const mapStateToProps = function (store) {
    return {
        visibleCountries: store.countriesReducer.visibleCountries,
        actuallPage: store.countriesReducer.actuallPage,
        numberOfCountriesChoosed: store.countriesReducer.numberOfCountriesChoosed
    };
};

export default connect(mapStateToProps)(ContinentsContainer);