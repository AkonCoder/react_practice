/**
 * Created by pomy on 15/11/23.
 */
import React, {Component} from 'react';

class List extends Component {
    render () {
        return (
            <div>
                <h3>This is List page.</h3>
                <p>The list page id is&nbsp;
                    <b style={{color: 'red'}}>{this.props.params.id}</b>
                </p>
            </div>
        );
    }
};

export default List;