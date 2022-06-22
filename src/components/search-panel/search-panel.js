import './search-panel.css'
import {Component} from 'react'

class SearchPanel extends Component {
    constructor (props) {
        super(props);
        this.state = {
            term: ''
        }
    }

    onUpdate2 = (e) => {
        const term = e.target.value;
        this.setState({term});
        this.props.onUpdateSearch(term);
    }

   render () {
    return (
        <input 
            type="text"
            className = "form-control search-input"
            placeholder = "Find an employee"
            onChange={this.onUpdate2}
            value={this.state.term}
            />
    ) 
   }
}

export default SearchPanel;