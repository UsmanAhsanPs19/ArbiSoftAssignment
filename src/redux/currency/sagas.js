
// export const fetchCurrencyRates = (baseCurrency,quoteCurrency,amount) =>
// {
//     var myHeaders = new Headers();
//     myHeaders.append("apikey", "c1QF10erMh1DWJlD1da8rjtZxrfy4YQk");
//     var requestOptions = {
//         method: 'GET',
//         redirect: 'follow',
//         headers: myHeaders
//       };
//     return fetch(`https://api.apilayer.com/fixer/convert?to=${to}&from=${from}&amount=${amount}`, requestOptions)
// }

import { GET_INITIAL_CONVERSION } from "./action";


function* handler (){
    yield takeEvery(GET_INITIAL_CONVERSION, fetchRatesLatest)
}


const fetchRatesLatest = function* (action) {
    console.log("Here currency:::")
    try {
    //   let usedCurrency = currency;
    //   if (usedCurrency === undefined) {
    //     usedCurrency = yield select(state => state.currencies.baseCurrency);
    //   }
    //   const response = yield call(getLatestRate, usedCurrency);
    //   const result = yield response.json();
    //   if (result.error) {
    //     yield put({ type: CONVERSION_ERROR, error: result.error });
    //   } else {
    //     yield put({ type: CONVERSION_RESULT, result });
    //   }
    } catch (error) {
    //   yield put({ type: CONVERSION_ERROR, error: error.message });
    }
  };

  export {handler};