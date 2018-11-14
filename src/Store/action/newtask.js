import {UPDATE_PROFIL_DATA} from './Type' ;



export const rolling = (data)=>{
    console.log(data);
    return {
        type : UPDATE_PROFIL_DATA ,
        data
    }
}