import {UPDATE_PROFIL_DATA}  from '../action/Type';

const initialstate = {

newarray : [],
starttime:"",
endtime:""

}


const reducer  = (state = initialstate,action)=>{
    switch(action.type){
        case UPDATE_PROFIL_DATA:
        return {
            ...state,
            starttime:action.data.starttime,
            endtime:action.data.endtime
        }
        default:
        return state ;
    }
   
}


export default reducer;