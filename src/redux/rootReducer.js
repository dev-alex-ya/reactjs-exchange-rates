import {ADD, CHANGE_DATE} from './actions/actionsTypes'

const initialState = {
  startDate: new Date(),
  selectedOption: [],
  selectedRates: [],
  rates: {}
}

export default (state = initialState, action) => {

  switch (action.type) {
    case ADD:
      return {
        counter: state.counter + 1
      }
    case CHANGE_DATE:
      return {
        startDate: action.payload
      }
    default:
      return state
  }
}