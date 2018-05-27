import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Person extends Component {
    static defaultProps = {};

    static propTypes = {};

    state = {};

    render() {
        return (
            <p>I'm a Person I am {this.props.name} , {this.props.age}years</p>
        );
    }
}

export default Person;
