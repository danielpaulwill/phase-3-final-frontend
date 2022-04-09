import { useEffect, useState } from 'react'

function BugCard({ bug }) {
  const [bugOrFeature, setBugOrFeature] = useState("")
  const [categoryId, setCategoryId] = useState("")

  useEffect(() => {
    if (bug.category_id === 1) {
      setBugOrFeature("bug")
      setCategoryId("Bug")
    } else if (bug.category_id === 2) {
      setBugOrFeature("feature")
      setCategoryId("Feature")
    }
    else {
      setBugOrFeature("newApp")
      setCategoryId("New App")
  }
  }, [])

  function handleDeleteTask(e) {
    fetch(`http://localhost:9292/task/${e.target.value}`, {
      method: "DELETE",
    })
    .then(res => res.json())
    .then(data => console.log(data))
  }

  return (
    <div className="bugCards">
      <h3>{bug.name}</h3>
      <p>{bug.description}</p>
      <p className={bugOrFeature}>{categoryId}</p>
      {/* THIS BUTTON WILL SEND A DELETE REQUEST */}
      <button onClick={handleDeleteTask} value={bug.id} >Complete</button>
    </div>
  );
}

export default BugCard;