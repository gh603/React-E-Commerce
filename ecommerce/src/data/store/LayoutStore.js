import {ReduceStore} from 'flux/utils'; 
import Dispatcher from '../dispatcher/Dispatcher'; 
import Immutable from 'immutable'; 

class LayoutStore extends ReduceStore {
    constructor(){
        super(Dispatcher); 
    }

    getInitialState(){
        return Immutable.List(); 
    }

    reduce(state, action){
        switch(action.type){
            default: return state; 
        }
    }
}

export default new LayoutStore(); 