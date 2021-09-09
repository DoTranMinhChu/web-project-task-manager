import { Component } from "react";

class AddingTaskForm extends Component {

    onDisplayTaskForm = () => { 
        this.props.onReceiverDisplayTaskForm(!this.props.onSenderDisplayTaskForm);
    }
    

    render() {
        return (
            <div>
                <button className="btn btn-primary" onClick={this.onDisplayTaskForm}><span className={!this.props.onSenderDisplayTaskForm ? "fa fa-plus me-2" : "fa fa-minus me-2"} /> {!this.props.onSenderDisplayTaskForm ? "Adding Task" : "Hide task form"}</button>
            </div>
        );
    }
}

export default AddingTaskForm;