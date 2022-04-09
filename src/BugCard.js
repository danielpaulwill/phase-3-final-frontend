import { useEffect, useState } from 'react'

function BugCard({ bug, onDelete }) {
  const [bugOrFeature, setBugOrFeature] = useState("")

  useEffect(() => {
    if (bug.category.name === "Bug") {
      setBugOrFeature("bug")
    } else if (bug.category.name === "Feature") {
      setBugOrFeature("feature")
    }
    else {
      setBugOrFeature("newApp")
    }
  }, [])

  return (
    <div className="bugCards">
      <h3>{bug.name}</h3>
      <p>{bug.description}</p>
      <p className={bugOrFeature}>{bug.category.name}</p>
      <button onClick={onDelete} value={bug.id} >Complete</button>
    </div>
  );
}

export default BugCard;