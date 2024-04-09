import React, { useState } from "react";
import searchIcon from "../images/search 1.png";
import tableIcon from "../images/cells 1.png";
import listIcon from "../images/list 1.png";
import cardImage from "../images/card.png"
import EmployeesTable from "../components/EmployeesTable/EmployeesTable";
import EmployeesList from "../components/EmployeesList/EmployeesList";
import EmployeesMenu from "../components/EmployeesMenu/EmployeesMenu";
function EmployeesPage(props) {
    const [display, setdisplay] = useState("list");
    const [search, setSearch] = useState("")
    const [employeesToShow, setEmployeesToShow] = useState(props.employees.filter((employee)=>employee.name.includes(search)))
    function handleSearch(event){
        setSearch(event.target.value)
        setEmployeesToShow(props.employees.filter((employee)=>employee.name.includes(search)))
    }
    return (
        <div>
            <h1 className="employees">Your Employees</h1>
            <input
                className="search"
                style={{ backgroundImage: `url(${searchIcon})` }}
                type="text"
                placeholder="Search: name, surname, email ..."
                value={search}
                onChange={handleSearch}
            />
            <div className="browse">
                <button
                    onClick={() => setdisplay("list")}
                    className={display == "list" ? "active" : ""}
                >
                    <img src={listIcon} alt="List" />
                </button>
                <button
                    onClick={() => setdisplay("table")}
                    className={display == "table" ? "active" : ""}
                >
                    <img src={tableIcon} alt="Table" />
                </button>
                <button
                    onClick={() => setdisplay("menu")}
                    className={display == "menu" ? "active" : ""}
                >
                    <img className="card" src={cardImage} alt="Menu" />
                </button>
            </div>
            {display == "table" ? (
                <EmployeesTable employees={employeesToShow} />
            ) : display == "list" ? (
                <EmployeesList employees={employeesToShow} />
            ) : (
                <EmployeesMenu employees={employeesToShow} />
            )}
        </div>
    );
}

export default EmployeesPage;
