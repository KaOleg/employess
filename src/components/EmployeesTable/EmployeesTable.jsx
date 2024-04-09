import React from "react";
import "./EmployeesTable.css";
import "./EmployeesTableMedia.css";
function EmployeesTable(props) {
    return (
        <table className="employeesTable">
            <caption className="tableCaption">Employees</caption>
            <thead>
                <tr className="tableTitle">
                    <th></th>
                    <th>Name</th>
                    <th>Last Name</th>
                    <th>E-mail</th>
                    <th>Language</th>
                    <th></th>
                </tr>
            </thead>
            <tbody className="bodyEmployees">
                {props.employees.map((employee, index) => (
                    <tr key={employee.id}>
                        <td className="num">{index + 1}</td>
                        <td>{employee.name}</td>
                        <td>{employee.surname}</td>
                        <td>{employee.email}</td>
                        <td>{employee.language}</td>
                        <td>
                            <button className="view">View</button>
                            <button className="delete">Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default EmployeesTable;
