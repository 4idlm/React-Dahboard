import {PROFILE_NAME} from '../action/Type';
import JsData from '../../scene/Employedata/people_(5).json';


const initalstate = {
  name:"vinoth",
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
    editIndex: null,
    reduxtate :true,
   
}

const updateprofile = (state =initalstate,action)=>{
console.log(state.name,"reducer vinoth")
    return {
        ...state,
      name:action.data.name
    }

}

const samplereducer = (state = initalstate,action)=>
{
 
switch(action.type){
    case PROFILE_NAME :
    console.log(state,"data")
    console.log(action,"action")
    return  updateprofile(state,action)
    default:
    return state ;
 }
    

}

export default samplereducer;
