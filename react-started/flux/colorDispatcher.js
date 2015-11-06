/**
 * Created by pomy on 15/11/6.
 */

import {Dispatcher} from 'flux';
import {colorStore} from './colorStore';

export let colorDispatcher = new Dispatcher();

colorDispatcher.register((payload) => {
    switch (payload.action){
        case 'CHANGE_COLOR_ID':
            colorStore.setColorId(payload.colorId);
            break;
    }
});