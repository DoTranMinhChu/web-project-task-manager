import { Component } from "react";

class TaskItem extends Component {
    onUpdateStatus = () =>{
        this.props.onUpdateStatus(this.props.idTask);
    }
    onTaskFormEdit = () =>{
        this.props.onTaskFormEdit(this.props.idTask);
    }
    onDeleteTaskItem = () =>{
        this.props.onDeleteTaskItem(this.props.idTask);
    }
    

    render() {
        return (
            <tr>
                <th>{this.props.index}</th>
                <td>{this.props.nameTask}</td>
                <td>
                    <button className={Number(this.props.statusTask)===1?"btn btn-success text-white m-1":"btn btn-danger text-white me-1 ms-1"} onClick={this.onUpdateStatus}>{Number(this.props.statusTask)===1?"Activated":"Paused"}</button>
                </td>
                <td>
                    <button className="btn btn-warning text-white m-1 " onClick={this.onTaskFormEdit}> <span className="fa fa-pencil-alt"></span> Edit</button>
                    <button className="btn btn-danger text-white m-1" onClick={this.onDeleteTaskItem}> <span className="fa fa-trash"></span> Delete</button>
                </td>
            </tr>
        );
    }
}

export default TaskItem;