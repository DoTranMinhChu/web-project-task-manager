import { Component } from "react";

class Search extends Component {
    constructor(props){
        super(props);
        this.state= {
            dataSearch:''
        }
    }
    onHandleChange = (event) =>{
        let target = event.target;
        let dataSearch = target.name;
        let value = target.type === "checkbox" ? target.checked : target.value;
        this.setState({
            [dataSearch] : value
        })
      
    }

    onHanldeSubmit = (event) =>{
        event.preventDefault();
        this.props.onSearchTask(this.state.dataSearch);
    }

    render() {
        return (

            <form className="input-group" onSubmit={this.onHanldeSubmit}>
                <input type="text" className="form-control" value={this.state.dataSearch} name="dataSearch" onChange={this.onHandleChange} placeholder="Searching..." />
                <button type="submit" className="btn btn-primary">
                    <span className="fa fa-search me-2"> </span>
                    Search
                </button>
            </form>

        );
    }
}
export default Search;