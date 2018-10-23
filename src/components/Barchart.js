import React, { PureComponent ,Fragment } from "react";
import * as d3 from "d3";
import denny from '../scene/Employedata/denny.csv';
import harry from '../scene/Employedata/harry.csv';
import ho from '../scene/Employedata/ho.csv';
import Kay from '../scene/Employedata/kay.csv';
import love from '../scene/Employedata/love.csv';

let first = [];
let second =[];
let name =[50,70,100,300,400,500,600]
let hours = [0,2,3,8,9,10,14,24]
 
class BarChart extends PureComponent {
state={
  Employee : first,

    xscale : d3.scaleBand()
    .domain([0, d3.max(name)])
    .range([0, 600]).padding(0.4),
  yscale : d3.scaleLinear()
        .domain([0, 24])
        .range([500/2, 0])
        
}

 x_axis = d3.axisBottom()
        .scale(this.state.xscale);

 y_axis = d3.axisLeft()
        .scale(this.state.yscale);
        
componentWillMount(){

}
 componentDidMount(){
d3.select(this.refs.xaxis).call(this.x_axis);
d3.select(this.refs.yaxis).call(this.y_axis);

d3.csv(denny, function(data) {
  first.push(data)
 });
 d3.csv(denny, function(data) {
  second.push(data)
 });
 }

  render() {

   
    
// console.log(second)
// console.log(first)
       console.log(this.state.Employee);
       let think = name.map((you,i)=>{
           return <g  transform={`translate(${i * 30},0)`}>
           <rect x="50"  y="50" width="15"  height={you} />     
       </g>
       })
    return (
       <Fragment>
         <g>{think}</g>
        
       </Fragment>
    );
  }
}

export default BarChart;
