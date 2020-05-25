import {ADD, SUB, ADD_NUMBER, ADD2, CHANGE_DATE} from './actionsTypes'

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

// export function asyncAdd(number) {
//   return (dispatch) => {
//     setTimeout(() => {
//       dispatch(addNumber(number))
//     }, 3000);
//   }
// }