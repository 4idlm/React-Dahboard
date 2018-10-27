import {PROFILE_NAME} from '../action/Type';
import JsData from '../../scene/Employedata/people_(5).json';


const initalstate = {
    profile: JsData,
    delete: false,
    newuser: false,
    count: 0,
    checked: false,
    user: {
      name: "",
      rating: "",
      Description: ""
    },
    btnedit: false,
    editIndex: null
}

// updateprofile = (state,action)=>{
// console.log(state,"reducer vinoth")
//     return {
        
//     }

// }

const samplereducer = (state = initalstate,action)=>
{
// switch(action.type){
//     case PROFILE_NAME :
//     return updateprofile(state,action);
//     default:
    return state ;
// }
     

}

export default samplereducer;
