
export const fetchCurrencyRates = function* (baseCurrency,quoteCurrency,amount)
{    
    console.log("Yes:::",baseCurrency,quoteCurrency,amount)
    var myHeaders = new Headers();
    myHeaders.append("apikey", "SUaccEjNk1kNBeAr9s1pRs911b2ycFpU");

    var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
    };
    return fetch("https://api.apilayer.com/exchangerates_data/convert?to=PKR&from=USD&amount=1", requestOptions);
}

import { takeEvery, put, call, select, takeLatest } from "redux-saga/effects";
import { CHANGE_BASE, CHANGE_QUOTE, CONVERSION_ERROR, CONVERSION_RESULT, GET_INITIAL_CONVERSION, REVERSE_CURRENCY } from "./action";


function* handler (){
    yield takeLatest(GET_INITIAL_CONVERSION, fetchRatesLatest)
    yield takeLatest(REVERSE_CURRENCY, fetchRatesLatest);
    yield takeLatest(CHANGE_BASE, fetchRatesLatest)
    yield takeLatest(CHANGE_QUOTE, fetchRatesLatest)
}

function* fetchRatesLatest (action) {
    try {
        const {baseCurrency,quoteCurrency} = yield select(state => state.currency);
        var myHeaders = new Headers();
        myHeaders.append("apikey", "SUaccEjNk1kNBeAr9s1pRs911b2ycFpU");

        var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
        };
        var final_result=null;
        var isError= false;
        yield fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${baseCurrency}&from=${quoteCurrency}&amount=1`, requestOptions)
        .then(response => response.json())
        .then(result =>{
            final_result = result
        })
        .catch(error=> {
            isError=true;
            final_error = error
        });
        if(isError){
            yield put({ type: CONVERSION_ERROR, error:"There are some issues."});
        }
        else
         yield put({ type: CONVERSION_RESULT, result:final_result});
    } catch (error) {
    }
  };

export {handler};