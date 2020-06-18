import {
  CHANGE_DATE,
  MARK_SELECT_VALUE,
  SAVE_RESULT,
  SET_LOADING,
  UNMARK_SELECT_VALUE,
  SET_PERIOD,
  SET_PERIOD_LENGTH,
  PREPARE_DATA
} from './actions/actionsTypes';

const initialState = {
  isLoaded: false,
  date: new Date(),
  selectedRates: [], //массив объектов {label: 'AUD', data: [  ['20200522', 17.64], ['20200523', 17.64]]}, {...}
  selectedRateNames: new Set([]), //массив названий['AUD', 'USD]
  periodLength: '10',
  selectedPeriod: [],
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
      return {...state, selectedRateNames: new Set([...state.selectedRateNames, action.payload])};

    case UNMARK_SELECT_VALUE:
      const selectedValues = new Set([...state.selectedRateNames]);
      selectedValues.delete(action.payload);
      return {...state, selectedRateNames: selectedValues};

    case SET_PERIOD:
      return {...state, selectedPeriod: action.payload};

    case SET_PERIOD_LENGTH:
      return {...state, periodLength: action.payload};

    case PREPARE_DATA:
      return {...state, selectedRates: [...state.selectedRates, action.payload]};

    default:
      return state
  }
}

export default rootReducer