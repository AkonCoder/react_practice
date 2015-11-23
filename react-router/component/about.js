/**
 * Created by pomy on 15/11/23.
 */

import React, {Component} from 'react';

class About extends Component {
    componentDidMount(){
        console.log('mount');
    }

    componentWillUnmount(){
        console.log('Un mount')
    }

    render(){
        return (
            <h3>This is about page</h3>
        )
    }
};

export default About;