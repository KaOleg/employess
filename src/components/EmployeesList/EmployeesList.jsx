import React from "react";
import "./EmployeesList.css";
function EmployeesList(props) {
    return <ul className="employeesList">
       {props.employees.map((employee)=><li className="employeesListItem">
        <p className="namLang">
            <span>{employee.name}</span><br/>
            <span>{employee.language}</span>
        </p>
        <p>
            <span>{employee.email}</span>
        </p>
        <p>
            <button className="view">View</button>
            <button className="delete">Delete</button>
        </p>
       </li>)}
    </ul>;
}

export default EmployeesList;
