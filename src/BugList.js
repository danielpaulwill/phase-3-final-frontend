import BugCard from "./BugCard";

function BugList({ currentBugsList, onDelete }) {

  let allBugs = currentBugsList.map(bug => (
    <BugCard bug={bug} key={bug.id} onDelete={onDelete}/>
  ))

  return (
    <div>
      {allBugs}
    </div>
  );
}

export default BugList;