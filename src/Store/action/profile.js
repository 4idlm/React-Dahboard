import {PROFILE_NAME} from '../action/Type';


export const checking = (data)=>{
    console.log(data);
    return {
        type : PROFILE_NAME ,
        data
    }
}