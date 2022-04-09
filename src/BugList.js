import BugCard from "./BugCard";

function BugList({ currentBugsList, onDelete }) {

  const allBugs = currentBugsList.map(bug => (
    <BugCard bug={bug} key={bug.id} onDelete={onDelete}/>
  ))

  return (
    <div>
      {allBugs}
    </div>
  );
}

export default BugList;