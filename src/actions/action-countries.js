export const GET_COUNTRIES = 'GET_COUNTRIES';
export const GET_COUNTRY = 'GET_COUNTRY';
export const DELETE_COUNTRY = 'DELETE_COUNTRY';
export const SEARCH_COUNTRIES = 'SEARCH_COUNTRIES';
export const SET_CONTINENT = 'SET_CONTINENT';
export const NUMBER_OF_COUNTRIES = 'NUMBER_OF_COUNTRIES';
export const GET_PAGE = 'GET_PAGE';


export function getCountries() {
    return {
        type: GET_COUNTRIES,
    }
}

export function getCountry(id) {
    return {
        type: GET_COUNTRY,
        id
    }
}

export function deleteCountry(id) {
    return {
        type: DELETE_COUNTRY,
        id
    };
}

export function searchCountries(searchText) {
    return {
        type: SEARCH_COUNTRIES,
        searchText
    }
}

export function setContinent(name) {
    return {
        type: SET_CONTINENT,
        name
    }
}

export function numberOfCountries(value) {
    return {
        type: NUMBER_OF_COUNTRIES,
        value
    }
}

export function getPage(number) {
    return {
        type: GET_PAGE,
        number
    }
}






