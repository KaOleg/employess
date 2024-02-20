import Menu from "./components/Menu/Menu";
import EmployeesPage from "./pages/employeesPage";
import { Routes, Route } from "react-router-dom";
import EmployeesAddPage from "./pages/employeesAddPage";
import NotFoundPage from "./pages/notFoundPage";
function App() {
    return (
        <div className="app">
            <Menu />
            <div className="content">
                <Routes>
                    <Route path="/" element = {<EmployeesPage/>}/>
                    <Route path="/add" element ={<EmployeesAddPage/>}/>
                    <Route path="*" element={<NotFoundPage/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
