import { GET_COUNTRIES, GET_COUNTRY, SEARCH_COUNTRIES, DELETE_COUNTRY, SET_CONTINENT, NUMBER_OF_COUNTRIES, GET_PAGE } from '../actions/action-countries';
import countriesData from '../data/countries.json';

const initialState = {
    countries: countriesData,
    selectedCountry: {},
    visibleCountries: countriesData.filter(country => country.id > 0 && country.id <= 5),
    actuallPage: 1,
    numberOfCountriesChoosed: 5
};

const countriesReducer = function (state = initialState, action) {
    switch (action.type) {
        case GET_COUNTRIES:
            return Object.assign({}, state, {countries: state.countries});

        case GET_COUNTRY:
            const selectedCountry= state.countries.find(country => country.id === parseInt(action.id));
            return Object.assign({}, state, {selectedCountry});

        case SEARCH_COUNTRIES:
            const foundCountries = state.countries.filter(country => country.name.toLowerCase().includes(action.searchText.toLowerCase()));
            return Object.assign({}, state, {visibleCountries: foundCountries});

        case DELETE_COUNTRY:
            const notDeletedCountries = state.countries.filter(country => country.id !== action.id);
            const notDeletedVisibleCountries = state.visibleCountries.filter(country => country.id !== action.id);
            return Object.assign({}, state, {countries: notDeletedCountries, visibleCountries: notDeletedVisibleCountries});

        case SET_CONTINENT:
            const continentCountries = state.countries.filter(country => country.continent === action.name);
            return Object.assign({}, state, {visibleCountries: continentCountries});

        case NUMBER_OF_COUNTRIES:
            const numberToDisplayChoosed = parseInt(action.value);
            return Object.assign({}, state, {numberOfCountriesChoosed: numberToDisplayChoosed});

        case GET_PAGE:
            const selectedPage = parseInt(action.number);
            return Object.assign({}, state, {actuallPage: selectedPage});

        default:
            return state;
    }
};

export default countriesReducer;