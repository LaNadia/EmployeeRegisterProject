import './employees-add-form.css'
import {Component} from 'react';

class EmployeesAddForm extends Component {
    constructor (props) {
        super(props);
        this.state = {
            name : '',
            salary : ''
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (event) => {
        event.preventDefault();
        let check = new RegExp('^[0-9]+$');
        if(this.state.name.length > 3 && check.test(this.state.salary)) {
            this.props.onAdd(this.state.name, this.state.salary);
        }

        this.setState({
            name: '',
            salary: ''
        })
    }
    
   render () {

    const {name,salary} = this.state;

    return (
        <div className="app-add-form">
            <h3>Add a new employee</h3>
            <form className="add-form d-flex"
                  onSubmit={this.onSubmit}>
                <input type="text" 
                    required
                    className="form-control new-post-label" 
                    placeholder="Name, surname" 
                    name='name'
                    value={name}
                    onChange={this.onValueChange}/>
                 <input type="text"
                    required   
                    className="form-control new-post-label" 
                    placeholder="Paycheck in $" 
                    name='salary'
                    value={salary}
                    onChange={this.onValueChange}/>

                <button className="btn btn-outline-light">Add</button>
            </form>
        </div>
    )
   }
}

export default EmployeesAddForm;