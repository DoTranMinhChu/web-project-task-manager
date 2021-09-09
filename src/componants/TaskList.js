import { Component } from "react";
import TaskItem from "./TaskItem";

class TaskList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nameFilter: '',
            statusFilter: -1,
            sortFilter: -1,

        }
    }
    onHandleChange = (event) => {
        let target = event.target;
        let infoFilter = target.name;
        let value = target.type === "checkbox" ? target.checked : target.value;
        this.setState({
            [infoFilter]: value
        });

    }
    listFilter() {
        let array = [];
        for (let i = 0; i < this.props.onSenderTask.length; i++) {
            if (
                (this.props.onSenderTask[i].nameTask.toLowerCase().includes(this.props.onSenderDataSearch.toLowerCase())
                    && this.props.onSenderTask[i].nameTask.toLowerCase().includes(this.state.nameFilter.toLowerCase())
                    && (Number(this.state.statusFilter) === Number(this.props.onSenderTask[i].statusTask)
                        || Number(this.state.statusFilter) === -1)
                )
            ) {
                array.push(this.props.onSenderTask[i]);
            }
        }
        return array;
    }

    listSortName() {
        let array = this.props.onSenderTask;
        array.sort((a, b) => {
            let fa = a.nameTask.toLowerCase(),
                fb = b.nameTask.toLowerCase();
        
            if (fa < fb) {
                return -1;
            }
            if (fa > fb) {
                return 1;
            }
            return 0;
        });
        return array;

    }
    listSortStatus(){
        let array = this.props.onSenderTask;
        array.sort((a, b) => {
            let fa = a.statusTask,
                fb = b.statusTask;
        
            if (fa < fb) {
                return -1;
            }
            if (fa > fb) {
                return 1;
            }
            return 0;
        });
        return array;
    }


    render() {
        
        let array = [];
        if(this.props.onSortTaskItem.name==="nameTask"){
            array= this.props.onSortTaskItem.key?this.listSortName():this.listSortName().reverse();
        }else if(this.props.onSortTaskItem.name==="statusTask"){
            array= this.props.onSortTaskItem.key?this.listSortStatus().reverse():this.listSortStatus();
        }else{
             array = this.listFilter();
        }
       




        var elementArray = array.map((e, i) => {
            return (<TaskItem key={e.id} index={i} idTask={e.id} nameTask={e.nameTask} statusTask={e.statusTask} onUpdateStatus={this.props.onUpdateStatus} onTaskFormEdit={this.props.onTaskFormEdit} onDeleteTaskItem={this.props.onDeleteTaskItem} />);
        });

        
        return (
            <table className="table table-hover table-bordered text-center">
                <thead className="bg-info bg-gradient">
                    <tr>
                        <th>NO</th>
                        <th>Name</th>
                        <th>Satus</th>
                        <th>Function</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th> </th>
                        <td>
                            <input type="text" className="form-control" value={this.state.nameFilter} name="nameFilter" onChange={this.onHandleChange}></input>
                        </td>
                        <td>
                            <select className="form-select" value={this.state.statusFilter} name="statusFilter" onChange={this.onHandleChange}>
                                <option value={-1}>All</option>
                                <option value={0}>Paused</option>
                                <option value={1}>Activated</option>
                            </select>
                        </td>
                        <td></td>
                    </tr>

                    {elementArray}


                </tbody>
            </table>
        );
    }
}

export default TaskList;