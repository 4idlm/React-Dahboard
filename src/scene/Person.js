import React, { Component } from "react";
import { connect } from "react-redux";
// import { updateName } from "../redux/action";
import "./Person.css";
import JsData from "../scene/Employedata/people_(5).json";
import {checking} from '../Store/action'
let point;

class Persons extends Component {
  state = {
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
  };
  baseState = this.state.user;

  create = event => {
    event.preventDefault();
    if (event.target.name == "Image") {
      this.setState({
        image: event.target.files[0]
      });
    } else {
      this.setState({
        user: {
          ...this.state.user,
          [event.target.name]: event.target.value,
          Likes: 0,
          Dislikes: 0
        }
      });
    }
  };

  newprofile = event => {
    event.preventDefault();

    this.setState({
      // newuser:true,
      // index:this.state.count + 5
      ...this.state,

      profile: {
        People: [...this.state.profile.People, this.state.user]
      }
    });

    document.getElementById("create-course-form").reset();
  };

  Select = () => {
    this.setState({
      ...this.state,
      delete: !this.state.delete
    });
  };

  remove = async index => {
    let data = this.state.profile.People;
    data.splice(index, 1);
    this.setState({ profile: { People: data } });
    // this.state.profile.People.splice(index,1);
    console.log(this.state.profile.People, "p");
  };

  edit = (output, index) => {
    console.log(output, "output");
    console.log(index, "index");
    this.setState({
      btnedit: false,
      editIndex: index,
      user: {
        name: output.name,
        rating: output.rating,
        img: output.img,
        Description: output.Description
        // like:output.Likes,
        // dislke:output.Dislikes
      }
    });
  };

  checkprofile = event => {
    event.preventDefault();
    let lion = this.state.editIndex;
    let allData = this.state.profile.People;
    allData[lion] = this.state.user;
    this.setState({
      ...this.state,

      profile: {
        People: allData
      }
    });
  };
  add = () => {
    this.setState({
      btnedit: true,
      user: this.baseState
    });
  };
  componentDidMount() {
    console.log(point);
  }

  nameChangeHandler = () => {
    const { _updateName } = this.props;
    _updateName({ name: "ronaldo" });
  };

  render() {
    const { name } = this.props;
    
    // console.log(this.state.name)
    console.log(this.state);
    console.log(this.props.jsondata,"props data")
    console.log(point, "point the data");
    //  console.log(fig,"array fig")
    //  let newprofile  = <tr>
    //  <td >{this.state.index}</td>
    //   <td>{this.state.username}</td>
    //   <td>{this.state.Rating}</td>
    //   <td><img src={`${this.state.image}`} alt="responsive images" width="50%" class="img-responsive" /></td>
    //   <td>{this.state.Description}</td>
    //   <td>{this.state.Likes?0:null}</td>
    //   <td>{this.state.Dislikes?0:null}</td>
    //   <td><button>edit</button></td>
    //   <td>{this.state.checkbox?<input type="checkbox" value=""/>:null}</td>
    //  </tr>

    let data =this.props.jsondata.People.map((output, index) => {
      return (
        <tr>
          <td>{index + 1}</td>
          <td>{output.name}</td>
          <td>{output.rating}</td>
          <td>
            <img
              src={`${output.img}`}
              alt="responsive images"
              width="50%"
              class="img-responsive"
            />
          </td>
          <td>{output.Description}</td>
          <td>{output.Likes}</td>
          <td>{output.Dislikes}</td>
          <td>
            <button
              onClick={() => this.edit(output, index)}
              data-toggle="modal"
              data-target="#myModal"
            >
              edit
            </button>
          </td>
          <td>
            {this.state.delete ? (
              <input type="checkbox" onChange={() => this.remove(index)} />
            ) : null}
          </td>
        </tr>
      );
    });

    return (
      <div className="container-fluid">
        <div className="row pb-5">
          <div
            className="col-md-6 text-left"
            style={{ fontSize: "18px", fontWeight: 500 }}
          >
            Profile List
          </div>
          {/* <div>{name}</div>
          <button onClick={this.nameChangeHandler}>change Name</button> */}
          <div className="col-md-6 text-right">
            <button
              className="btn-info mr-2"
              onClick={this.add}
              data-toggle="modal"
              data-target="#myModal"
            >
              Add profile +
            </button>
            <button className="btn-info" onClick={this.Select}>
              Delete <span className="glyphicon glyphicon-trash" />
            </button>
          </div>
        </div>
        <div class="table-responsive">
          <table class="table">
            <thead>
              <tr>
                <th>SI.No</th>
                <th>Name</th>
                <th>Rating</th>
                <th>Image</th>
                <th>Description</th>
                <th>Likes</th>
                <th>Dislikes</th>
                <th>Menu</th>
              </tr>
            </thead>
            <tbody>{data}</tbody>
          </table>
        </div>

        <div class="modal fade container" id="myModal" role="dialog">
          <div class="modal-dialog modal-md">
            <div class="modal-content">
              <div class="modal-header">
                <h4> Profile</h4>
                <button type="button" class="close" data-dismiss="modal">
                  &times;
                </button>
                {/* <h4 class="modal-title">Modal Header</h4> */}
              </div>
              <div class="modal-body">
                <form action="" id="create-course-form">
                  <div class="form-group text-left">
                    <label for="Name">Name:</label>
                    <input
                      type="text"
                      class="form-control"
                      id=" "
                      value={this.state.user.name}
                      onChange={this.create}
                      placeholder="Name"
                      name="name"
                    />
                  </div>
                  {/* <div class="form-group text-left">
                    <label for="Image">Image:</label>
                    <input
                      type="file"
                      class="form-control"
                      id=" "
                      onChange={this.create}
                      placeholder="Image"
                      name="Image"
                    />
                  </div> */}
                  <div class="form-group text-left">
                    <label for="Rating">Rating:</label>
                    <input
                      type="number"
                      class="form-control"
                      id=" "
                      value={this.state.user.rating}
                      onChange={this.create}
                      placeholder="Rating"
                      name="rating"
                    />
                  </div>
                  <div class="form-group text-left">
                    <label for="Description">Description:</label>
                    <textarea
                      type="text"
                      class="form-control"
                      id=""
                      value={this.state.user.Description}
                      onChange={this.create}
                      placeholder="Description"
                      name="Description"
                    />
                  </div>
                  {/* <div class="form-group text-left">
      <label for="Likes">Likes:</label>
      <input type="text" class="form-control" id="pwd" onChange={this.create} placeholder="Likes" name="Likes"/>
    </div>
    <div class="form-group text-left">
      <label for="Dislikes">Dislikes:</label>
      <input type="text" class="form-control" id="pwd"  onChange={this.create} placeholder="Dislikes" name="Dislikes"/>
    </div> */}

                  {this.state.btnedit ? (
                    <button
                      type="submit"
                      onClick={this.newprofile}
                      class="btn btn-default"
                    >
                      Submit
                    </button>
                  ) : (
                    <button
                      type="submit"
                      onClick={this.checkprofile}
                      class="btn btn-default"
                    >
                      update
                    </button>
                  )}
                </form>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-default"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state.profile.profile, "Person State");
  return {
     jsondata: state.profile.profile
  };
};
const mapDispatchToProps = dispatch => {
  return {
    _updateName: (name) => dispatch(checking(name))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Persons);
