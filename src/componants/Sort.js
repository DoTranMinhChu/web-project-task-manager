import { Component } from "react";

class Sort extends Component {

  SortAZ =(event)=>{
    event.preventDefault();
    this.props.onSortTask("nameTask",1);
  }
  SortZA =(event)=>{
    event.preventDefault();
    this.props.onSortTask("nameTask",0);
  }
  SortActivated =(event)=>{
    event.preventDefault();
    this.props.onSortTask("statusTask",1);
  }
  SortPaused =(event)=>{
    event.preventDefault();
    this.props.onSortTask("statusTask",0);
  }

  render() {

    return (
      <div className="navbar p-0 ">
        <div className=" dropdown ">
          <a className="btn btn-primary dropdown-toggle" href=" " type="button" data-bs-toggle="dropdown"> Sorting</a>
          <ul className="dropdown-menu"  >
            <li onClick={this.SortAZ}><a className="dropdown-item" href=" ">Name A-Z</a></li>
            <li onClick={this.SortZA}><a className="dropdown-item" href=" ">Name Z-A</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li onClick={this.SortActivated}><a className="dropdown-item" href=" ">Status activated</a></li>
            <li onClick={this.SortPaused}><a className="dropdown-item" href=" ">Status paused</a></li>
          </ul>
        </div>

      </div>
    );
  }
}
export default Sort;