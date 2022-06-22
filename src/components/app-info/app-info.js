import './app-info.css'

const AppInfo = ({data}) => {

    const increasedEmployees = data.filter(item => item.increase).length

    return (
        <div className="app-info">
            <h1>The Employee Register </h1>
            <h2>Total number of employees: {data.length}</h2>
            <h2>Employees getting bonuses: {increasedEmployees}</h2>
        </div>
    )
}

export default AppInfo;