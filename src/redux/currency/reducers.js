import { CHANGE_BASE, CHANGE_CURRENCY_AMOUNT, CHANGE_QUOTE, CONVERSION_ERROR, CONVERSION_RESULT, GET_INITIAL_CONVERSION, REVERSE_CURRENCY } from "./action";

const initialState = {
    baseCurrency: 'PKR',
    quoteCurrency: 'USD',
    amount: 0,
    conversions: {},
    error: null,
    date:""
    
};

const setDetailsOfConversion = (state, action) => {
    console.log("Reducer:::",state, action)
    return {
      state
    };
};

const reducer =  (state = initialState, action) => {
  
    switch (action.type) {
      case CHANGE_CURRENCY_AMOUNT:
        var value_of_amount = parseFloat(state.result) * parseFloat(action.payload.quote_amount);
        return { ...state, amount: parseFloat(value_of_amount).toFixed(6) };
      case REVERSE_CURRENCY:
        return {
          ...state,
          baseCurrency: state.quoteCurrency,
          quoteCurrency: state.baseCurrency,
        };
      case CHANGE_BASE:
        console.log(action)
        return {
          ...state,
          baseCurrency: action?.payload?.currency,
          conversions: setDetailsOfConversion(state, action),
        };
      case CHANGE_QUOTE:
        return {
          ...state,
          quoteCurrency: action?.payload?.currency,
          conversions: setDetailsOfConversion(state, action),
        };
      case GET_INITIAL_CONVERSION:
        return { ...state, conversions: setDetailsOfConversion(state, { currency: state.baseCurrency }) };
      case CONVERSION_RESULT:
        console.log("Resultes after api call:::", action.result)
        return {
          ...state,result:parseFloat(action?.result?.result).toFixed(6), amount:parseFloat(action?.result?.result).toFixed(6),date:action?.result?.date
        };
      case CONVERSION_ERROR:
        return { ...state, error: action.error };
      default:
        return state;
    }
  };
  export {reducer};