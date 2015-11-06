/**
 * Created by pomy on 15/11/6.
 */

import React, {Component} from 'react';
import {colorAction} from '../flux/colorAction';
import {colorStore} from '../flux/colorStore';

class ColorBar extends Component {
    shouldComponentUpdate(nextProps, nextState){
        return false;
    }

    handleHover(colorId){
        let preColorId = colorStore.getColorId();
        if(preColorId != colorId){
            colorAction.changeColorId(colorId);
        }
    }

    render(){
        return (

            <ul>
                {/* Reaact中循环渲染元素时, 需要用key属性确保正确渲染, key值唯一*/}
                {this.props.colors.map(function(color){
                    return (
                        <li key = {color.id}
                            onMouseOver = {this.handleHover.bind(this, color.id)}
                            className = {color.value}>
                        </li>
                    )
                }, this)}
            </ul>
        )
    }
}

export default ColorBar;
