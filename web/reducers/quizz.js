import {List, fromJS } from 'immutable';
import { SET_QUIZZ_STORAGE, READ_FROM_QUIZZ_STORAGE,
CLEAR_QUIZZ_STORAGE, SET_PREVIOUS_PAGE } from '../actions/quizzActions';

const initialState = fromJS({
    answers: {},
    pageNo: 1
});

export default function quizz(state = initialState, action) {
    switch (action.type) {
        case SET_QUIZZ_STORAGE:
            console.log("HERE----++++");
            let newState = state.toJS();
            //set in the storage
            console.log("the new", newState.answers);
            let newObj = {};
            newObj['answer' + (action.pageNo -1)] = action.answer;
            if (!newState.answers) {
                newState.answers = newObj
            } else {
                newState.answers['answer' + (action.pageNo -1)] = action.answer;
            }
            console.log("THE NEW STATE++", newState);
            newState.pageNo = action.pageNo;
            localStorage.setItem('answersKey', JSON.stringify(newState.answers));
            localStorage.setItem('pageNoKey', newState.pageNo);
            return fromJS(newState);
        case READ_FROM_QUIZZ_STORAGE:
            let newState2 = state.toJS();
            newState2.answers = JSON.parse(localStorage.getItem('answersKey'));
            newState2.pageNo = parseInt(localStorage.getItem('pageNoKey'));
            if (!newState2.pageNo) {
                newState2.pageNo = 1;
            }
            return fromJS(newState2);
        case CLEAR_QUIZZ_STORAGE:
            localStorage.setItem('answersKey', JSON.stringify({}));
            localStorage.setItem('pageNoKey', 1);
            return state.merge({answers: [], pageNo: 1});
        case SET_PREVIOUS_PAGE:
            localStorage.setItem('pageNoKey', action.pageNo);
            return state.merge({pageNo: action.pageNo});
        default:
            return state
    }
}
