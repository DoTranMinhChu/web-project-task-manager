import { Component } from "react";
import AddingTaskForm from "./AddingTaskForm";
import Search from "./Search";
import Sort from "./Sort";
import TaskList from "./TaskList";

class Control extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSearch: '',
            dataSort: {name:'',key:0},
            taskList: this.props.onSenderTask,
            displayTaskForm: false
        }

    }


    onReceiverDisplayTaskForm = (display) => {
        this.setState({
            taskList: this.props.onSenderTask,
            displayTaskForm: display
        });
        this.props.onReceiverDisplayTaskForm(display);
    }

    onSearchTask = (dataSearch) => {
        this.setState({
            dataSearch: dataSearch
        });
    }
    onSortTask = (name,key) =>{
       this.setState({
           dataSort:{name,key}

       })
    }


    render() {
        localStorage.setItem('task', JSON.stringify(this.props.onSenderTask));
        return (
            <div>
                <div className="row mb-3">
                    <div className="col-md-6 mb-3 mt-2">
                        <AddingTaskForm onSenderDisplayTaskForm={this.props.onSenderDisplayTaskForm} onReceiverDisplayTaskForm={this.onReceiverDisplayTaskForm} />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-md-6 mb-3">
                        <Search onSearchTask={this.onSearchTask} />
                    </div>
                    <div className="col-md-6 mb-3">
                        <Sort onSortTask={this.onSortTask}/>
                    </div>
                </div>

                <div className="row">
                    <TaskList
                        onSenderDataSearch={this.state.dataSearch}
                        onSenderTask={this.props.onSenderTask}
                        onUpdateStatus={this.props.onUpdateStatus}
                        onTaskFormEdit={this.props.onTaskFormEdit}
                        onDeleteTaskItem={this.props.onDeleteTaskItem}
                        onSortTaskItem={this.state.dataSort}
                        />
                </div>
            </div>
        );
    }
}
export default Control;