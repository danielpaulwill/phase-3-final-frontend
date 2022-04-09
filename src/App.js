import { useEffect, useState } from 'react';
import './App.css';
import BugList from './BugList';
import NewBugForm from './NewBugForm';

function App() {
  const [currentBugsList, setCurrentBugsList] = useState([])

  useEffect(() => {
    getAllTasks()
    getAllCategories()
  }, [])
  
  function getAllTasks() {
    fetch("http://localhost:9292/tasks")
    .then(res => res.json())
    .then(data => setCurrentBugsList(data))
  }
  
  function getAllCategories() {
    fetch("http://localhost:9292/categories")
    .then(res => res.json())
    .then(data => console.log(data))
  }

  function handleDeleteTask() {

  }
  
  return (
    <div>
      <NewBugForm currentBugsList={currentBugsList} />
      <BugList currentBugsList={currentBugsList} onDelete={handleDeleteTask}/>
    </div>
  );
}

export default App;
