/**
 * Created by pomy on 15/11/6.
 */
import React, {Component} from 'react';
import ColorDisplay from './colorDisplay';
import ColorBar from './colorBar';

class ColorPanel extends Component {
    //getDefaultProps(){
    //    return {
    //        colors: [
    //            {id: 1, value: 'red', title: 'red'},
    //            {id: 2, value: 'blue', title: 'blue'},
    //            {id: 3, value: 'green', title: 'green'},
    //            {id: 4, value: 'yellow', title: 'yellow'},
    //            {id: 5, value: 'pink', title: 'pink'},
    //            {id: 6, value: 'black', title: 'black'}
    //        ],
    //        defaultColorId: 1
    //    }
    //}
    //Warning: getInitialState/getDefaultProps was defined on ColorPanel, a plain JavaScript class.
    // This is only supported for classes created using React.createClass.
    // Did you mean to define a state/defaultProps property instead?
    //
    //getInitialState(){
    //    return {
    //        selectedColor: this.getSelectedColor(this.props.defaultColorId)
    //    }
    //}
    constructor(props){
        super(props);
        this.state = {
            selectedColor: this.getSelectedColor(this.props.defaultColorId)
        }
    }

    getSelectedColor(colorId){
        if(! colorId){
            return null
        }

        let length = this.props.colors.length;
        let i;
        for(i = 0; i < length; i++) {
            if(this.props.colors[i].id === colorId){
                break;
            }
        }
        return this.props.colors[i];
    }

    shouldComponentUpdate(nextProps, nextState){
        return this.selectedColor.id !== nextState.selectedColor.id;
    }

    render(){
        console.log('Render Color Panel', this.state.selectedColor);
        return (
            <div>
                <ColorDisplay selectedColor = {this.state.selectedColor} />
                <ColorBar colors = {this.props.colors} onColorHover = {this.onColorHover} />
            </div>
        )
    }

    onColorHover(colorId){
        this.setState({
            selectedColor: this.getSelectedColor(colorId)
        })
    }
}

ColorPanel.defaultProps = {
    colors: [
        {id: 1, value: 'red', title: 'red'},
        {id: 2, value: 'blue', title: 'blue'},
        {id: 3, value: 'green', title: 'green'},
        {id: 4, value: 'yellow', title: 'yellow'},
        {id: 5, value: 'pink', title: 'pink'},
        {id: 6, value: 'black', title: 'black'}
    ],
    defaultColorId: 1
};

//ColorPanel.state = {
//    selectedColor: new ColorPanel().getSelectedColor(ColorPanel.defaultProps.defaultColorId)
//};

export default ColorPanel;