import { GET_USER_INFO, GET_USER_INFO_SUCCESS, REMOVE_USER_INFO } from "./actions"

const initialState= {
    id:0,
    email:null,
    name:null
}

const reducer = (state = initialState, action)=>{
    switch(action.type){
        case GET_USER_INFO_SUCCESS:{
            const {id, email,name} = action.payload;
            return {id, email,name};
        }
        case REMOVE_USER_INFO:{
            return {...state, initialState};
        }
        default:
        return state;
    }
}
export {reducer}