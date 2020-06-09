import {CHANGE_DATE, MARK_SELECT_VALUE, SAVE_RESULT, SET_LOADING, UNMARK_SELECT_VALUE} from './actions/actionsTypes';

const initialState = {
  isLoaded: false,
  date: new Date(),
  selectedRates: [], //массив объектов {label: 'AUD', data: [  ['20200522', 17.64], ['20200523', 17.64]]}, {...}
  selectValues: new Set([]), //массив названий['AUD', 'USD]
  rates: new Map(),
  axes: [
    { primary: true, type: 'linear', position: 'bottom' },
    { type: 'linear', position: 'left' }
  ],//оси графика
}

const rootReducer = (state = initialState, action) => {

  switch (action.type) {

    case CHANGE_DATE:
      return {...state, date: action.payload};

    case SET_LOADING:
      return {...state, isLoaded: action.payload};

    case SAVE_RESULT:
      return {...state, rates: action.payload};

    case MARK_SELECT_VALUE:
      return {...state, selectValues: new Set([...state.selectValues, action.payload])};

    case UNMARK_SELECT_VALUE:
      const selectedValues = new Set([...state.selectValues]);
      selectedValues.delete(action.payload);

      return {...state, selectValues: selectedValues};

    default:
      return state
  }
}

export default rootReducer