/**
 * Created by pomy on 15/11/5.
 */
import listDispatcher from './ListDispatcher';

export let ListActions = {
    add(item){
        listDispatcher.dispatch({
            eventName: 'new-item',
            newItem: item
        })
    }
}