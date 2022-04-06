import { useEffect, useState } from 'react'

function BugCard({ bug }) {
  const [bugOrFeature, setBugOrFeature] = useState("")

  useEffect(() => {
    if (bug.entryType === "Bug") {
      setBugOrFeature("bug")
    } else if (bug.entryType === "Feature") {
      setBugOrFeature("feature")
    }
    else setBugOrFeature("newApp")
  }, [])

  return (
    <div className="bugCards">
      <h3>{bug.appName}</h3>
      <p>{bug.description}</p>
      <p className={bugOrFeature}>{bug.entryType}</p>
    </div>
  );
}

export default BugCard;