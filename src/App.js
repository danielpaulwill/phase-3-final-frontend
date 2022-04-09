import { useEffect, useState } from 'react';
import './App.css';
import BugList from './BugList';
import NewBugForm from './NewBugForm';

function App() {
  const [currentBugsList, setCurrentBugsList] = useState([])
  const [categoryList, setCategoryList] = useState([])

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
    .then(data => setCategoryList(data))
  }

  function handleDeleteTask(e) {
    fetch(`http://localhost:9292/task/${e.target.value}`, {
      method: "DELETE",
    })
    .then(res => res.json())
    .then(data => {
      let newBugsList = currentBugsList.filter(bug => {
        if (bug.id === data.id) {
        } else return bug
      })
      setCurrentBugsList(newBugsList)
    })
  }

  return (
    <div>
      <NewBugForm currentBugsList={currentBugsList} />
      <BugList currentBugsList={currentBugsList} onDelete={handleDeleteTask}/>
    </div>
  );
}

export default App;
