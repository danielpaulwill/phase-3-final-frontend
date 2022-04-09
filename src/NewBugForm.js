import './App.css';
import { useEffect, useState } from 'react'

function NewBugForm() {
  const [nameOfApp, setNameOfApp] = useState("")
  const [nameError, setNameError] = useState(false)
  const [typeOfEntry, setTypeOfEntry] = useState("")
  const [entryError, setEntryError] = useState(false)
  const [descOfApp, setDescOfApp] = useState("")
  const [descriptionError, setDescriptionError] = useState(false)
  const [currentAppNames, setCurrentAppNames] = useState([])

  function handleAppName(e) {
    setNameOfApp(e.target.value)
  }

  function handleEntryType(e) {
    setTypeOfEntry(e.target.value)
  }

  function handleAppDescription(e) {
    setDescOfApp(e.target.value)
  }

  function handleFormSubmit() {
    setNameError(false)
    setEntryError(false)
    setDescriptionError(false)

    if (nameOfApp === "") {
      setNameError(nameError => !nameError)
    } else if (typeOfEntry === "") {
      setEntryError(entryError => !entryError)
    } else if (descOfApp === "") {
      setDescriptionError(descriptionError => !descriptionError)
    }
    else {
    // SWITCH OUT THESE CONSOLE.LOGs WITH A POST
    console.log({ nameOfApp })
    console.log({ typeOfEntry })
    console.log({ descOfApp })

    setNameOfApp("")
    setTypeOfEntry("")
    setDescOfApp("")
  }
  }

  useEffect(() => {
    fetch("http://localhost:9292/app-names")
    .then(res => res.json())
    .then(data => setCurrentAppNames(data))
  }, [])

  // NEED TO GRAB UNIQUE NAMES FROM BACKEND
  const appNamesList = currentAppNames.map(name => (
    <li key={name}>{name}</li>
  ))
  return (
    <div id='newBugForm'>
      <div id='newBugFormTitle'>
        <h3>Add a new Bug, Feature, or all new App</h3>
      </div>

      <br></br>
      Current Apps: {appNamesList}
      <br></br>

      <div>
        <label>Name of App</label>
        <br></br>
        <input type="text" onChange={handleAppName} id="bugFormAppName" value={nameOfApp}></input>
        <p id={nameError ? "nameError" : "hidden"}>Please enter name of app</p>
       <br></br>
        <label>Entry Type</label>
        <form onChange={handleEntryType} id="bugFormRadio" >
          <input type="radio" value="Bug" name="entryType" checked={typeOfEntry === "Bug"}></input>
          <label>Bug</label>
          <br></br>
          <input type="radio" value="Feature" name="entryType" checked={typeOfEntry === "Feature"}></input>
          <label>Feature</label>
          <br></br>
          <input type="radio" value="New App" name="entryType" checked={typeOfEntry === "New App"}></input>
          <label>New App</label>
        </form>
        <p id={entryError ? "entryError" : "hidden"}>Select entry type</p>


        <label>Description of Ticket</label>
        <br></br>
        <textarea onChange={handleAppDescription} id="bugFormDescription" value={descOfApp}></textarea>
        <p id={descriptionError ? "descriptionError" : "hidden"}>Enter a description of the bug, feature, or app</p>
      </div>

      <button id="bugFormButton" onClick={handleFormSubmit}>Submit Ticket</button>

    </div>
  );
}

export default NewBugForm;
