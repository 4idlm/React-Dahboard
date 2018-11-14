import React, { Component, Fragment } from "react";
import {connect} from 'react-redux';
import {rolling, checking} from '../Store/action';

class Trail extends Component {
  

    tableuser =  (event) =>{

        this.setState({
            ...this.state,
            [event.target.name] :event.target.value
        })
console.log(event.target.name,event.target.value)
    }

    sendindex= (data)=>{
    console.log(data,"indexvalue")

    }

    newuser =(event)=>{
      event.preventDefault();
        console.log("working")
       // this.props._pusharray();
       this.props.emptyarray.push(this.state)
        console.log(this.state)
          // testarray.push(this.state)
           document.getElementById("create-course-form").reset();
         }

         updatetime = (event,index)=>{
          event.preventDefault();
          console.log(index,"index")
          this.props._pusharray(this.state);
          document.getElementById("create-course-forms").reset();
         }

    render() {
     
      
      let design = this.props.emptyarray.map((e,index)=>{
        return <tr>
          <td>{index}</td>
           <td>{e.name}</td>
           <td>{e.taskname}</td>
           <td>{this.props.starttime}</td>
           <td>{this.props.endtime}</td>
           <td></td>
           <td></td>
        </tr>
      })

      let updatedesign = this.props.emptyarray.map((e,index)=>{
        return <tr>
          <td>{index}</td>
           <td>{e.name}</td>
           <td>{e.taskname}</td>
         <button onClick={()=>this.sendindex(index)} data-toggle="modal"
              data-target="#myModal1">update</button>
        </tr>
      })
      console.log(this.state,"state");
     // console.log(testarray,"new array");
      return (

        <Fragment>
 
     <button
              className="btn-info mr-2 mb-3"
              onClick={this.create}
              data-toggle="modal"
              data-target="#myModal"
            >
              CREATE +
            </button>

        <div class="table-responsive">
        <table class="table">
          <thead>
            <tr>
              <th>SI.No</th>
              <th>Name</th>
              <th>Task Name</th>
              <th>Start Time</th>
              <th>End Time</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
           { this.props.emptyarray.length <= 0 ? null:design}
          </tbody>
        </table>
      </div>
      <div>
      <table class="table">
          <thead>
            <tr>
            <th>SI.No</th>
              <th>Name</th>
              <th>Task Name</th>
              <th>update task</th>
            </tr>
          </thead>
          <tbody>
           { this.props.emptyarray.length <= 0 ? null:updatedesign}
          </tbody>
        </table>

      </div>

      

      <div id="myModal" class="modal fade" role="dialog">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
      <h4 class="modal-title">Modal Header</h4>
        <button type="button" class="close" data-dismiss="modal">&times;</button>
      </div>
      <div class="modal-body">
      <form action="" id="create-course-form">
                  <div class="form-group text-left">
                    <label for="Name">Name:</label>
                    <input
                      type="text"
                      class="form-control"
                      id=" "
                      
                      placeholder="Name"
                      onChange={this.tableuser}
                      name="name" required />
                    </div>
                    <div class="form-group text-left">
                    <label for="Name">Task Name:</label>
                    <input
                      type="text"
                      class="form-control"
                      id=" "
                     
                      onChange={this.tableuser}
                      placeholder="taskname"
                      name="taskname"  required/>
                    </div>
                    <button type="submit" onClick={this.newuser}>submit</button>
                    </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
      </div>
    </div>

  </div>
</div>




      <div id="myModal1" class="modal fade" role="dialog">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
      <h4 class="modal-title">updat tyme</h4>
        <button type="button" class="close" data-dismiss="modal">&times;</button>
      </div>
      <div class="modal-body">
      <form action="" id="create-course-forms">
                  <div class="form-group text-left">
                    <label  >start time:</label>
                    <input
                      type="number"
                      class="form-control"
                      id=" "
                      
                      placeholder="starttime"
                      onChange={this.tableuser}
                      name="starttime" required />
                    </div>
                    <div class="form-group text-left">
                    <label >End time:</label>
                    <input
                      type="number"
                      class="form-control"
                      id=" "
                     
                      onChange={this.tableuser}
                      placeholder="endtime"
                      name="endtime"  required/>
                    </div>
                    <button type="submit" onClick={this.updatetime} >submit</button>
                    </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
      </div>
    </div>

  </div>
</div>
      </Fragment>

      )
    }

}

const  mapStateToProps = (state)=>{
         
 return {

  emptyarray : state.newtask.newarray,
  starttime:state.newtask.starttime,
  endtime:state.newtask.endtime
 }
  
} 
const mapDispatchToProps = (dispatch)=>{
return {
  _pusharray : (data)=> dispatch(rolling(data))
}
}
export default connect (mapStateToProps,mapDispatchToProps) (Trail);