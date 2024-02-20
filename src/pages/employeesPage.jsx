import React from "react";
import searchIcon from "../images/search 1.png";
import tableIcon from "../images/cells 1.png";
import listIcon from "../images/list 1.png";
import EmployeesTable from "../components/EmployeesTable/EmployeesTable";
function EmployeesPage() {
    return (
        <div>
            <h1 className="employees">Your Employees</h1>
            <input
                className="search"
                style={{ backgroundImage: `url(${searchIcon})` }}
                type="text"
                placeholder="Search: name, surname, email ..."
            />
            <div className="browse">
                <button>
                    <img src={listIcon} alt="List" />
                </button>
                <button className="active">
                    <img src={tableIcon} alt="Table" />
                </button>
            </div>
            <EmployeesTable />
        </div>
    );
}

export default EmployeesPage;
