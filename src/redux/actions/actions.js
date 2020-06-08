import {ADD, CHANGE_DATE, SET_LOADING, SAVE_RESULT, CHANGE_SELECTED} from './actionsTypes';

export function add() {
  return {
    type: ADD
  }
}

export function changeDate(date) {
  return {
    type: CHANGE_DATE,
    payload: date
  }
}

export function setIsLoaded(isLoaded) {
  return {
    type: SET_LOADING,
    payload: isLoaded
  }
}

export function saveResult(rates) {
  return {
    type: SAVE_RESULT,
    payload: rates
  }
}

export function handleChangeSelected(selectedItems) {
  // debugger
  return {
    type: CHANGE_SELECTED,
    payload: selectedItems
  }

}
