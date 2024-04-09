import React, {useState} from "react";
import nextId from "react-id-generator";
import {useNavigate} from "react-router-dom"
function EmployeesAddPage(props) {
  const [name, setName] = useState("")
  const [surname, setSurname] = useState("")
  const [email, setEmail] = useState("")
  const [progLang, setProglang] = useState("")
  const [nameError, setNameError] = useState(false)
  const [surNameError, setSurNameError] = useState(false)
  const [emailError, setEmailError] = useState(false)
  const [languageError, setLanguageError] = useState(false)
  const navigate = useNavigate()
  function handleNameInput (event){
    const regExp = /^[a-zA-Z]+$/
    setName(event.target.value)
    if(regExp.test(event.target.value)){
        setNameError(false)
    }else{
        setNameError(true)
    }
  }
  function handleSurName (event){
    const regExp = /^[a-zA-Z]+$/
    setSurname(event.target.value)
    if(regExp.test(event.target.value)){
        setSurNameError(false)
    }else{
        setSurNameError(true)
    }
  }
  function handleEmail (event){
    const regExp = /^[\w\.-]+@\w+\.[a-zA-Z]{2,}$/
    setEmail(event.target.value)
    if(regExp.test(event.target.value)){
      setEmailError(false)
    }else{
      setEmailError(true)
    }
  }
  function handleLan (event){
    setProglang(event.target.value)
    const languages = ["python","javascript","java","c++", "c#"]
    if(languages.includes(event.target.value.toLowerCase())){
      setLanguageError(false)
    }else{
      setLanguageError(true)
    }
  }
  function handleSubmit (event){
    const employeeData = {
      name : name,
      surname : surname,
      email : email,
      language : progLang,
      id : nextId()
    }
    console.log("Данные отправлены")
    event.preventDefault()
    props.createEmployee(employeeData)
  navigate("/")
  }
    return (
        <div>
            <h1 className="employees">Add employees</h1>
            <form onSubmit={handleSubmit} className="add-form" action="">
                <input required className={nameError?"error": ""} value={name} onChange={handleNameInput} placeholder="Employee name" type="text" />
                <span className="error-message">Name must contain only letters!!!</span>

                <input required className={surNameError?"error": ""} value={surname} onChange={handleSurName}placeholder="Employee surname" type="text" />
                <span className="error-message">SurName must contain only letters!!!</span>

                <input required className={emailError?"error": ""} value={email} onChange={handleEmail} placeholder="Employee email" type="email" />
                <span className="error-message">Invalid Email!!!</span>

                <input required className={languageError?"error": ""} value={progLang} onChange={handleLan} placeholder="Employee programming language" type="text" />
                <span className="error-message">Invalid Programming Language!!!</span>
                <button disabled = {nameError||emailError||surNameError||languageError}>Add</button>
                
            </form>
        </div>
        
    );
}

export default EmployeesAddPage;
