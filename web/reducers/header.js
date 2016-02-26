import {List, fromJS } from 'immutable';
import { ACTIVATE_HEADER } from '../actions/index';

const initialState = fromJS({
    tab: ''
});

export default function header(state = initialState, action) {
    switch (action.type) {
        case ACTIVATE_HEADER:
            return state.merge({tab: action.tab});
        default:
            return state
    }
}
