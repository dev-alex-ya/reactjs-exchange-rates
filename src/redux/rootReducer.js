import { CHANGE_DATE, CHANGE_SELECTED, SAVE_RESULT, SET_LOADING} from './actions/actionsTypes';

const initialState = {
  isLoaded: false,
  date: new Date(),
  selectedRates: [],
  rates: new Map()
}

const rootReducer = (state = initialState, action) => {
// debugger
  switch (action.type) {
    case CHANGE_DATE:
      return {...state, date: action.payload};
    case SET_LOADING:
      return {...state, isLoaded: action.payload};
    case SAVE_RESULT:
      return {...state, rates: action.payload};
    case CHANGE_SELECTED:
      return {...state, selectedRates: [...state.selectedRates, action.payload]};
    default:
      return state
  }
}

export default rootReducer