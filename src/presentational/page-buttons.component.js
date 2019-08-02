import React, { Component } from 'react';

class PageButtons extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <div className="btn-group">
            {/* { this.props.numberOfPages.map((num, id) => 
                <button key={id} id={id} value={num} className="btn btn-default" onClick={this.handlePageChange.bind(this)}>{num}</button>
            )} */}
        </div>
        )
    }

}

export default PageButtons;