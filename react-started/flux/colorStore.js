/**
 * Created by pomy on 15/11/6.
 */

let EventEmitter = require('events').EventEmitter;
let emitter = new EventEmitter();

export let colorStore = {
    colorId: 1,

    listenChange(callback){
        emitter.on('colorChange', callback);
    },

    getColorId(){
        return this.colorId
    },

    setColorId(colorId){
        this.colorId = colorId;
        emitter.emit('colorChange');
    }
};
