/**
 * Created by pomy on 15/11/5.
 */

import {Dispatcher} from 'flux';
import ListStore from './ListStore';

export let listDispatcher = new Dispatcher();

listDispatcher.register((payload)=>{
    switch (payload.eventName) {
        case 'new-item':
            ListStore.items.push(payload.newItem);
            ListStore.trigger("change");
            break;
    }
    return true;
})