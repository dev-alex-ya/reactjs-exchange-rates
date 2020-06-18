import {
  CHANGE_DATE,
  SET_LOADING,
  SAVE_RESULT,
  MARK_SELECT_VALUE,
  UNMARK_SELECT_VALUE,
  SET_PERIOD,
  SET_PERIOD_LENGTH,
  SET_RATES
} from './actionsTypes';

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

export function markSelectValue(rateName) {
  return {
    type: MARK_SELECT_VALUE,
    payload: rateName
  }
}

export function unmarkSelectValue(rateName) {
  return {
    type: UNMARK_SELECT_VALUE,
    payload: rateName
  }
}

export function setPeriod(period) {
  return {
    type: SET_PERIOD,
    payload: period
  }
}


export function setPeriodLength(periodLength) {
  return {
    type: SET_PERIOD_LENGTH,
    payload: periodLength
  }
}

export function setRates(data) {
  const preparedData = {
    label: data,
    data: [['20200514', 17.3923], ['20200515', 17.1254], ['20200516', 17.1254], ['20200517', 17.1254], ['20200518', 17.1149], ['20200519', 17.2034], ['20200520', 17.3215], ['20200521', 17.4998], ['20200522', 17.64], ['20200523', 17.64]]
  }

  return {
    type: SET_RATES,
    payload: preparedData
  }
}

