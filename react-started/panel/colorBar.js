/**
 * Created by pomy on 15/11/6.
 */

import React, {Component} from 'react';

class ColorBar extends Component {
    shouldComponentUpdate(nextProps, nextState){
        return false;
    }

    render(){
        console.log('Render Color Bar Component');
        return (

            <ul>
                {/* Reaact中循环渲染元素时, 需要用key属性确保正确渲染, key值唯一*/}
                {this.props.colors.map(function(color){
                    return (
                        <li key = {color.id}
                            onMouseOver = {this.props.onColorHover.bind(null, color.id)}
                            className = {color.value}>
                        </li>
                    )
                }, this)}
            </ul>
        )
    }
}

export default ColorBar;
