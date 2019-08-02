import { GET_COUNTRIES, GET_COUNTRY, SEARCH_COUNTRIES, DELETE_COUNTRY, SET_CONTINENT, NUMBER_OF_COUNTRIES, GET_PAGE, NUMBER_OF_PAGES } from '../actions/action-countries';
import countriesData from '../data/countries.json';

const initialState = {
    countries: countriesData,
    selectedCountry: {},
    visibleCountries: [],
    numberOfCountriesOnPage: [5, 10, 15, 20],
    actuallPage: 1,
    numberOfPages: []
};

const countriesReducer = function (state = initialState, action) {
    switch (action.type) {
        case GET_COUNTRIES:
            return Object.assign({}, state, {countries: state.countries});

        case GET_COUNTRY:
            const selectedCountry = state.countries.find(country => country.id === action.id);
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
            const countriesToDisplay = state.countries.filter(country => country.id > 0 && country.id <= action.value);
            return Object.assign({}, state, {visibleCountries: countriesToDisplay});

        case GET_PAGE:
            const selectedPage = action.number;
            return Object.assign({}, state, {actuallPage: selectedPage});

        case NUMBER_OF_PAGES:
            const countNumberOfPages = Math.ceil(state.countries.length / state.visibleCountries.length);
            console.log(state.countries.length, state.visibleCountries.length, 'length');
            return Object.assign({}, state, {numberOfPages: countNumberOfPages});

        default:
            return state;
    }
};

export default countriesReducer;