import React, { Component } from 'react';
import styles from '../country.css';

class PageButtons extends Component {
    constructor(props) {
        super(props);

    }

    handlePageChange(e) {
        this.props.updatePage(e.target.value);
    }

    render() {

        const numberOfCountriesInState = this.props.numberOfStateCountries;
        const numberToDisplay = this.props.numberOfCountriesChoosed;

        const countNumberOfPages = Math.ceil(numberOfCountriesInState.length / numberToDisplay);
        let pagesArr = [];
        
        for (let i=1 ; i <= countNumberOfPages ; i++) {
            pagesArr.push(i);
        }

        return (
        <div className="btn-group page-btns" style={styles}>
            { pagesArr.map((num, id) =>
                    <button key={id} value={num} className="btn btn-default" onClick={this.handlePageChange.bind(this)}>Page {num}</button>
            )}
        </div>
        )
    }

}

export default PageButtons;