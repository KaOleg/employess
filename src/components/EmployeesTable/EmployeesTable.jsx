import React from "react";
import "./EmployeesTable.css";
function EmployeesTable() {
  return <table className="employeesTable">
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
        <tr>
            <td className="num">1</td>
            <td>John</td>
            <td>Sandmen</td>
            <td>john@gmail.com</td>
            <td>Python</td>
            <td>
                <button className="view">View</button>
                <button className="delete">Delete</button>
            </td>
        </tr>
        <tr>
            <td className="num">1</td>
            <td>John</td>
            <td>Sandmen</td>
            <td>john@gmail.com</td>
            <td>Python</td>
            <td>
                <button className="view">View</button>
                <button className="delete">Delete</button>
            </td>
        </tr>
        <tr>
            <td className="num">1</td>
            <td>John</td>
            <td>Sandmen</td>
            <td>john@gmail.com</td>
            <td>Python</td>
            <td>
                <button className="view">View</button>
                <button className="delete">Delete</button>
            </td>
        </tr>
        <tr>
            <td className="num">1</td>
            <td>John</td>
            <td>Sandmen</td>
            <td>john@gmail.com</td>
            <td>Python</td>
            <td>
                <button className="view">View</button>
                <button className="delete">Delete</button>
            </td>
        </tr>
        <tr>
            <td className="num">1</td>
            <td>John</td>
            <td>Sandmen</td>
            <td>john@gmail.com</td>
            <td>Python</td>
            <td>
                <button className="view">View</button>
                <button className="delete">Delete</button>
            </td>
        </tr>
    </tbody>
  </table>
}

export default EmployeesTable;
