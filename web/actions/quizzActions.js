export const SET_QUIZZ_STORAGE = 'SET_QUIZZ_STORAGE';
export const READ_FROM_QUIZZ_STORAGE = 'READ_FROM_QUIZZ_STORAGE';
export const CLEAR_QUIZZ_STORAGE = 'CLEAR_QUIZZ_STORAGE';
export const SET_PREVIOUS_PAGE = 'SET_PREVIOUS_PAGE';
import superagent from 'superagent';
const url = 'http://192.168.0.18:3001/Results';

export function saveNewPerson(person) {
    //  console.log(getState());
    console.log("THE PERSON IS", person);
    superagent.put(url)
        .send(JSON.stringify(person))
        .set('Content-Type', 'application/json')
        .end(function(err, res) {
           console.log("ERR++", err, "RES", res);
        });
}

export function setQuizzStorage(answer, pageNo) {
    console.log("SETTTT");
    return {
        type: SET_QUIZZ_STORAGE,
        answer: answer,
        pageNo: pageNo
    };
}

export function readQuizzStorage() {
    return {
        type: READ_FROM_QUIZZ_STORAGE
    };
}

export function setPreviousPage(pageNo) {
    return {
        type: SET_PREVIOUS_PAGE,
        pageNo: pageNo
    }
}

export function clearQuizzStorage() {
    return {
        type: CLEAR_QUIZZ_STORAGE
    };
}
