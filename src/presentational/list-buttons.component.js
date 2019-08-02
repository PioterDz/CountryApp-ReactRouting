import React, { Component } from 'react';

class ListButtons extends Component {
    constructor(props) {
        super(props);
    }

    handlePagBtns(e) {
        this.props.updateNrOfCountries(e.target.value);
    }

    render() {
        const arrayOfNumbersToChoose = [5, 10, 15, 20];
        return (
        <div className="btn-group">
            { arrayOfNumbersToChoose.map((page, id) => 
                <button key={id} id={id} value={page} className="btn btn-default" onClick={this.handlePagBtns.bind(this)}>{page}</button>
            )}
        </div>
        )
    }

}

export default ListButtons;
