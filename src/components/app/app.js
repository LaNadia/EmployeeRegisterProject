import "./app.css";
import AppInfo from '../app-info/app-info'
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";
import {Component} from 'react';



class App extends Component {
    constructor (props) {
        super(props);
        this.state = {
            data : [
                {name: "John Snow", salary: 788, increase: true, rise: true, id: 1},
                {name: "Hannah Montana", salary: 1000, increase: false, rise: false, id: 2},
                {name: "Dr. Strange", salary: 910, increase: true, rise: false, id: 3},
                {name: "Alex Turner", salary: 880, increase: false, rise: true, id: 4},
                {name: "Peter Parker", salary: 1100, increase: false, rise: false, id: 5},
                {name: "Kitty Cat", salary: 1650, increase: true, rise: true, id: 6},
                {name: "Senior Pomidor", salary: 560, increase: false, rise: false, id: 7}
            ], 
            term : '',
            filter: ''
        }
        this.maxId = 8;
    }
   
    deleteItem = (id) => {
        this.setState(({data}) => {
            let newData = [...data];
            newData = newData.filter(elem => elem.id !== id)
            return data = {
                    data: newData
                }
        })
    }

    onAdd = (name,salary) => {
        const newItem = {
            name,
            salary,
            increase: false,
            rise: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem]
            return {
                data: newArr
            }
        });
    }


    onToggleProp = (id, prop) => {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);
            const old = data[index];
            const newItem = {...old, [prop]: !old[prop]};
            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)]

            return {
                data: newArr
            }

        })        
    }

    searchEmpl = (items, term) => {
        if(term.length === 0) {
            return items;
        };

        return items.filter(item => {
            return item.name.indexOf(term) > -1;
        })
    }

    onUpdateSearch = (term) => {
        this.setState({term: term})
    }

    filterPost = (items, filter) => {
        switch(filter) {
            case 'rise' : 
                return items.filter(item => item.rise);
            case 'moreThan1000' :
                return items.filter(item => item.salary > 1000);
            default:
                return items;
        }
    }

    onFilterSelect = (filter) => {
        this.setState({filter})
    }
  

 render () {
    const {data, term, filter} = this.state;
    const visibleData = this.filterPost(this.searchEmpl(data, term), filter);

    return (
        <div className="app">
            <AppInfo 
              data={data}/>
            <div className="search-panel">
                <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                <AppFilter filter={filter} onFilterSelect={this.onFilterSelect}/>
            </div>
            <EmployeesList 
                data={visibleData}
                onDelete={this.deleteItem}
                onToggleProp={this.onToggleProp}
            />
            <EmployeesAddForm onAdd={this.onAdd}/>
        </div>
    )
 }
}

export default App;