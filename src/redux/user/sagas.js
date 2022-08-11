import {takeEvery, put} from 'redux-saga/effects'
import { GET_USER_INFO } from './actions'


function* handler (){
    yield takeEvery(GET_USER_INFO, getUserInfo)
}

function* getUserInfo(action){
    try {
        yield put({
            type: GET_ALL_USER_INFO_REQUEST_SUCCESS,
            payload: {
              id: 'id1',
              name: 'Michael',
              email: 'anothertestemail@test.com',
            },
          }); 
    } catch (error) {
        
    }
}

export {handler};