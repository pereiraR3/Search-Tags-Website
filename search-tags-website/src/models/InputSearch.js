import React, { Component } from 'react';

class InputSearch extends Component {

    render() {
        return (
            <div className="mb-2">
                <input
                    className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="text"
                    placeholder="Add website link here..."
                    value={this.props.searchText}
                    onChange={this.props.onChange}
                    style={{ width: '425px' }}
                />
            </div>
        );
    }
}

export default InputSearch;
