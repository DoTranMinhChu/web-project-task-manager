import { Component } from "react";

class TaskForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id:'',
            nameTask: '',
            statusTask: 1
        };
    }
    onHandleChange = (event) => {
        let target = event.target;
        let infoTask = target.name;
        let value = target.type === "checkbox" ? target.checked : target.value;
        this.setState({
            id:this.generateID(),
            [infoTask]: value
        });
        console.log(this.state.statusTask);

    }

    onHandleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.statusTask);
        this.props.onReceiverTask(this.state)
   
    }
    onHandleReset(event){
        this.setState({
            nameTask: '',
            statusTask: 1
        })
        
    }
    
   
    s4() {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    }
    generateID() {
        return this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + this.s4() + '-' + this.s4();
    }

    render() {
        
        return (
            <div className="card border border-warning">

                <div className="card-header bg-warning bg-gradient text-dark">
                    <h5 className="card-title pt-3">
                        <p className="float-start">Adding task</p>
                        <span className="fa fa-times-circle float-end" />
                    </h5>
                </div>
                <div className="card-body">

                    <form onSubmit={this.onHandleSubmit} onReset={this.onHandleReset}>
                        <div className="form-floating mb-3 ">
                            <input type="text" className="form-control" value={this.state.nameTask} name="nameTask" onChange={this.onHandleChange} />
                            <label>Name:</label>
                        </div>
                        <div className="form-floating mb-3 ">
                            <select className="form-select" value={this.state.statusTask} name="statusTask" onChange={this.onHandleChange}>
                                <option value={1}>Activated</option>
                                <option value={0}>Paused</option>
                            </select>
                            <label>Status</label>
                        </div>
                        <div className="text-center">
                            <button type="submit" className="btn btn-primary m-2"><span className="fa fa-pencil-alt me-2" /> Save</button>
                            <button type="reset" className="btn btn-danger m-2" ><span className="fa fa-times me-2" /> Cancel</button>
                        </div>

                    </form>



                </div>



            </div>
        );
    }
}

export default TaskForm;