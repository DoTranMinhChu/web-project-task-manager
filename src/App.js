import { Component } from 'react';
import './App.css';
import Control from './componants/Control';
import HeaderForm from './componants/HeaderForm';
import TaskForm from './componants/TaskForm';
import TaskFormEdit from './componants/TaskFormEdit';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      taskList: [], // id : unique , nameTask , statusTask
      display: false,
      taskUpdate: { id: '', nameTask: '', statusTask: 0 }
    }
    if (!this.state.taskList.length) {
      this.onLoadLocalStorage();
    }
 
    
  }
  onLoadLocalStorage() {

    if (localStorage && localStorage.getItem('task')) {
      var tasks = JSON.parse(localStorage.getItem('task'));
      tasks.forEach(element => {
        this.state.taskList.push(element)
      });
    }
  }


  onReceiverTask = (tasks) => {
    let check = 0;
    let taskList = this.state.taskList;

    taskList.forEach(e => {
      if (e.id === tasks.id) {
        check++;
      }
    });

    if (check === 0) {
      console.log("success");
      taskList.push(tasks);
    } else {
      console.log(check);
    }
    this.setState({ taskList: taskList });

  }

  onReceiverDisplayTaskForm = (display) => {
    this.setState({
      display: display,
      taskUpdate: { id: '', nameTask: '', statusTask: 0 }
    });
  }

  onUpdateStatus = (id) => {
    const index = this.findIndex(id);
    const tempTaskList = this.state.taskList;

    if (index !== -1) {
      tempTaskList[index].statusTask = Number(tempTaskList[index].statusTask) === 0 ? 1 : 0;
      this.setState({
        taskList: tempTaskList
      })
    }
  }
  findIndex = (id) => {
    for (let i = 0; i < this.state.taskList.length; i++) {
      if (this.state.taskList[i].id === id) {
        return i;
      }
    }
    return -1;
  }

  onTaskFormEdit = (id) => {
    const index = this.findIndex(id);
    this.setState({
      display: false,
      taskUpdate: this.state.taskList[index]
    })


  }

  onReciverTaskUpdate = (task) => {
    const index = this.findIndex(task.id);
    let taskListTemp = this.state.taskList;
    taskListTemp[index] = task;
    this.setState({
      taskList: taskListTemp,
      taskUpdate: { id: '', nameTask: '', statusTask: 0 }
    })
  }

  onDeleteTaskItem = (id) => {
    const index = this.findIndex(id);
    let taskListTemp = [];
    for (let i = 0; i < this.state.taskList.length; i++) {
      if (i !== index) {
        taskListTemp.push(this.state.taskList[i]);
      }
    }
    this.setState({
      taskList: taskListTemp,
      taskUpdate: { id: '', nameTask: '', statusTask: 0 }
    })
  }

  render() {

    return (
      <div className="container pt-2">
        <HeaderForm />
        <div className="row">
          {/* {this.state.display?"col-md-4":"d-none"} */}
          <div className={this.state.display ? "col-md-4 mt-2" : "d-none"}  >

            <TaskForm onReceiverTask={this.onReceiverTask} />
          </div>

          <div className={this.state.taskUpdate.id !== '' && !this.state.display ? "col-md-4 mt-2" : "d-none"}  >
            <TaskFormEdit
              onSenderTaskUpdate={this.state.taskUpdate}
              onReciverTaskUpdate={this.onReciverTaskUpdate} />
          </div>

          {/* {this.state.display?"col-md-8":"col-md-12"} */}
          <div className={this.state.display || this.state.taskUpdate.id !== '' ? "col-md-8" : "col-md-12"}>
            <Control
              onSenderTask={this.state.taskList}
              onSenderDisplayTaskForm={this.state.display}
              onReceiverTask={this.onReceiverTask}
              onReceiverDisplayTaskForm={this.onReceiverDisplayTaskForm}
              onUpdateStatus={this.onUpdateStatus}
              onTaskFormEdit={this.onTaskFormEdit}
              onDeleteTaskItem={this.onDeleteTaskItem} />
          </div>
        </div>
      </div>
    );
  }

}

export default App;
