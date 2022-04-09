import { useEffect, useState } from "react";
import BugCard from "./BugCard";

function BugList({ currentBugsList, onDelete }) {
  const [numOfBugs, setNumOfBugs] = useState(0)
  const [numOfFeatures, setNumOfFeatures] = useState(0)
  const [numOfNewApps, setNumOfNewApps] = useState(0)


  useEffect(() => {
    currentBugsList.map(bug => {
      if (bug.category.name === "Bug") {
        setNumOfBugs(numOfBugs => numOfBugs + 1)
      } else if (bug.category.name === "Feature") {
        setNumOfFeatures(numOfFeatures => numOfFeatures + 1)
      } else if (bug.category.name === "New App") {
        setNumOfNewApps(numOfNewApps => numOfNewApps + 1)
      }})
  }, [currentBugsList])

  let allBugs = currentBugsList.map(bug => (
    <BugCard bug={bug} key={bug.id} onDelete={onDelete} />
  ))

  return (
    <div>
      <p id="totalTickets">Total Tickets: {currentBugsList.length}</p>
      {allBugs}
    </div>
  );
}

export default BugList;