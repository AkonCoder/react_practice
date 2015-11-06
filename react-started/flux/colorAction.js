/**
 * Created by pomy on 15/11/6.
 */

import {colorDispatcher} from './colorDispatcher';

export let colorAction = {
    changeColorId(colorId){
        colorDispatcher.dispatch({
            action: 'CHANGE_COLOR_ID',
            colorId: colorId
        })
    }
};