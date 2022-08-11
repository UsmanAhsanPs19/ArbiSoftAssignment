import { CHANGE_BASE, CHANGE_CURRENCY_AMOUNT, CHANGE_QUOTE, CONVERSION_ERROR, CONVERSION_RESULT, GET_INITIAL_CONVERSION, REVERSE_CURRENCY } from "./action";

const initialState = {
    baseCurrency: 'USD',
    quoteCurrency: 'GBP',
    amount: 100,
    conversions: {},
    error: null,
};

const setDetailsOfConversion = (state, action) => {
    console.log("Reducer:::", action)
    let conversion = {
      isFetching: true,
      date: '',
      rates: {},
    };
  
    if (state.conversions[action.currency]) {
      conversion = state.conversions[action.currency];
    }
  
    return {
      ...state.conversions,
      [action.currency]: conversion,
    };
};

const reducer =  (state = initialState, action) => {
    switch (action.type) {
      case CHANGE_CURRENCY_AMOUNT:
        return { ...state, amount: action.amount || 0 };
      case REVERSE_CURRENCY:
        return {
          ...state,
          baseCurrency: state.quoteCurrency,
          quoteCurrency: state.baseCurrency,
        };
      case CHANGE_BASE:
        return {
          ...state,
          baseCurrency: action.currency,
          conversions: setDetailsOfConversion(state, action),
        };
      case CHANGE_QUOTE:
        return {
          ...state,
          quoteCurrency: action.currency,
          conversions: setDetailsOfConversion(state, action),
        };
      case GET_INITIAL_CONVERSION:
        return { ...state, conversions: setDetailsOfConversion(state, { currency: state.baseCurrency }) };
      case CONVERSION_RESULT:
        return {
          ...state,
          conversions: {
            ...state.conversions,
            [action.result.base]: {
              isFetching: false,
              ...action.result,
            },
          },
        };
      case CONVERSION_ERROR:
        return { ...state, error: action.error };
      default:
        return state;
    }
  };
  export {reducer};