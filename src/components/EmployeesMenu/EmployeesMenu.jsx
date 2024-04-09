import React from "react";
import "./EmployeesMenu.css"
function EmployeesMenu(props) {
    return (
        <div className="employeeMenuCards">
            {props.employees.map((employee) => (
                <div className="employeeMenuCard">
                    <h2>{employee.name}</h2>
                    <p>{employee.language}</p>
                    <p>{employee.email}</p>
                    <button className="view">View</button>
                    <button className="delete">Delete</button>
                </div>
            ))}
        </div>
    );
}

export default EmployeesMenu;
