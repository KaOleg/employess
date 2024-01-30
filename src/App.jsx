import Menu from "./components/Menu/Menu";
import searchIcon from "./images/search 1.png";
import tableIcon from "./images/cells 1.png";
import listIcon from "./images/list 1.png";
import EmployeesTable from "./components/EmployeesTable/EmployeesTable";
function App() {
    return (
        <div className="app">
            <Menu />
            <div className="content">
                <h1>Your Employees</h1>
                <div className="search">
                    <input
                        type="text"
                        placeholder="Search: name, surname, email ..."
                    />
                    <img src={searchIcon} alt="Search" />
                </div>
                <div>
                    <img src={tableIcon} alt="Table" />
                    <img src={listIcon} alt="List" />
                </div>
                <EmployeesTable />
            </div>
        </div>
    );
}

export default App;
