

export const ACTIVATE_HEADER = 'ACTIVATE_HEADER';
export const SET_PERSONS = 'SET_PERSONS';
export const FETCH_PERSONS = 'FETCH_PERSONS';

import superagent from 'superagent';
const url = 'http://192.168.0.18:3001/';

import getStore from '../index';
import resetStore from '../index';

export function fetchPersons() {
  let store = getStore();
  console.log("HERE IS+++//", store);
  superagent.get(url).end(function(err,res){
    store.dispatch(setPersons(res.text));
  });
  //  console.log(getState());

}

export function setPersons(json) {
  console.log("I EM IN SETE22", json);
  return {
    type: SET_PERSONS,
    json: json
  };
}

export function activateHeader(tab) {
  return {
    type: ACTIVATE_HEADER,
    tab: tab
  };
}
