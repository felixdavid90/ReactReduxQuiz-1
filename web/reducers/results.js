import {List, fromJS } from 'immutable';
import { SET_PERSONS } from '../actions/index';

const initialState = fromJS({
    persons: []
});

export default function results(state = initialState, action) {
    switch (action.type) {
        case SET_PERSONS:
            return state.merge({persons: JSON.parse(action.json)});
        default:
            return state
    }
}
