import React, { Component } from 'react';

class Logout extends Component {
    constructor(props) {
        super(props);

        this.state = {
            access_token : localStorage.getItem('access_token')
        }


    }
    render() {
        return (
            <div>

            </div>
        );
    }
}

export default Footer;
