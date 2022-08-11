import {takeEvery, put} from 'redux-saga/effects'
import { GET_USER_INFO, GET_USER_INFO_FAILURE, GET_USER_INFO_SUCCESS } from './actions'


function* handler (){
    yield takeEvery(GET_USER_INFO, getUserInfo)
}

function* getUserInfo(action){
    console.log(action)
    try {
        yield put({
            type: GET_USER_INFO_SUCCESS,
            payload: {
              id: 'id1',
              name: 'Michael',
              email: 'usman@test.com',
            },
          }); 
    } catch (error) {
        
    }
}

export {handler};