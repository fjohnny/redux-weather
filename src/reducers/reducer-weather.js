import {FETCH_WEATHER} from '../actions/index';

export default function(state = [], action) {
    switch (action.type) {
        case FETCH_WEATHER: {
            //return state.push(action.payload.data);  //Never use this - do not change state directly
            //instead do:
            //return state.concat([action.payload.data]); //this does not change (mutate) state, instead creates new state 
            // or (ES6 syntax)
            return [ action.payload.data, ...state];
        }
    }
    return state;
}