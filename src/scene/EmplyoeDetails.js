import React,{ Component } from "react";
import * as d3 from "d3";
import data from './Employedata/love.csv';
import './EmplyoeDetails.css';
import BarChart from '../components/Barchart';
 
let point = []
var width = 400,
height = 100;
let name =[];
var like = [10, 15, 20, 25, 30];
class EmplyoeeDetails extends Component {
  
    state ={
        width:""
    }
  
  chart = ()=>{
   
    d3.csv(data, function(data) {
     point.push(data)
  });
 
      }
       
     componentWillMount(){
  
        this.chart();
     } 
   componentDidMount(){
 
 this.setState({
    width:name
})

     this.refs.name.addEventListener('click',add);
    function add(){
       alert("target the refs")
     }
console.log(this.refs.name.innerHTML,"refs")

   }

  
   
render(){
 
     
    
 return(
    <div ref="name">

   <svg class="chart" width="100%" height="500">
   <BarChart/>
    </svg>
    
    
     
  </div>
  
);

}
}


export default EmplyoeeDetails;
