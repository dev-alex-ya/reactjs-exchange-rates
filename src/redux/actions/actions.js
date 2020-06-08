import {ADD, CHANGE_DATE, SET_LOADING, SAVE_RESULT, CHANGE_SELECTED} from './actionsTypes'
import {format} from "date-fns";

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

export function asyncChangeDate(date) {
  return async (dispatch) => {
    dispatch(changeDate(date))
  }
}
