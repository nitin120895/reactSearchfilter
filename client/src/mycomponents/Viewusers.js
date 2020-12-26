import React, { Component } from 'react'

export class Viewusers extends Component {
    state = {
        names: [{ name: 'loading', adress: 'loading' }], searchby: ''
    }
    render() {
        return (
            <div>
                <input
                    type="text"
                    placeholder="Search"
                    value={searchby}
                    onChange={handleChange}
                />
            </div>
        )
    }
}

export default Viewusers
