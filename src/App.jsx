import Menu from "./components/Menu/Menu";
import EmployeesPage from "./pages/employeesPage";
import { Routes, Route } from "react-router-dom";
import EmployeesAddPage from "./pages/employeesAddPage";
import NotFoundPage from "./pages/notFoundPage";
import { useState } from "react";
function App() {
    const [employees, setEmployees] = useState([])
    function createEmployee (employeeData) {
        setEmployees([...employees, employeeData])
    }
    return (
        <div className="app">
            <Menu />
            <div className="content">
                <Routes>
                    <Route path="/" element = {<EmployeesPage employees = {employees}/>}/>
                    <Route path="/add" element ={<EmployeesAddPage createEmployee = {createEmployee}/>}/>
                    <Route path="*" element={<NotFoundPage/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
