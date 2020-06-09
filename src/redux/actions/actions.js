import {CHANGE_DATE, SET_LOADING, SAVE_RESULT, MARK_SELECT_VALUE, UNMARK_SELECT_VALUE} from './actionsTypes';

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

export function markSelectValue(value) {
  return {
    type: MARK_SELECT_VALUE,
    payload: value
  }
}

export function unmarkSelectValue(value) {
  return {
    type: UNMARK_SELECT_VALUE,
    payload: value
  }
}