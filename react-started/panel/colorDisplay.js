/**
 * Created by pomy on 15/11/6.
 */
import React, {Component} from 'react';

class ColorDisplay extends Component {
    shouldComponentUpdate(nextProps, nextState){
        return this.props.selectedColor.id !== nextProps.selectedColor.id;
    }

    render(){
        console.log('Render Color Display Component');
        return (
            <div className = 'color-display'>
                <div className = {this.props.selectedColor.value}>
                    {this.props.selectedColor.title}
                </div>
            </div>
        )
    }
}

export default ColorDisplay;