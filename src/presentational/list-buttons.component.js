import React, { Component } from 'react';

class ListButtons extends Component {
    constructor(props) {
        super(props);
    }

    handlePagBtns(e) {
        this.props.updateNrOfCountries(e.target.value);
    }

    render() {
        return (
        <div className="btn-group">
            { this.props.listBtns.map((page, id) => 
                <button key={id} id={id} value={page} className="btn btn-default" onClick={this.handlePagBtns.bind(this)}>{page}</button>
            )}
        </div>
        )
    }

}

export default ListButtons;
