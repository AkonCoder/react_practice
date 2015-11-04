/**
 * Created by pomy on 15/11/4.
 */
import React, {Component} from 'react';

class Menu extends Component {
    getInitialState(){
        return {
            focused:0
        }
    }

    clicked(index){
        this.setState({
            focused: index
        })
    }

    render(){
        var self = this;
        return (
            <div>
                <ul>
                    {
                        this.props.items.map((item, index) => {
                            var style="";
                            if(self.state.focused == index){
                                style="focused";
                            }
                            //bind方法使index在clicked函数中可见
                            return <li className={style} onClick={self.clicked.bind(self,index)}>{item}</li>;
                        })
                    }
                </ul>
                <p>Selected:{this.props.items[self.state.focused]}</p>
            </div>
        );
    }
}

export default Menu