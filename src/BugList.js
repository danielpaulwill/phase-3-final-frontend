import BugCard from "./BugCard";

function BugList({ currentBugsList }) {

  const allBugs = currentBugsList.map(bug => (
    <BugCard bug={bug} key={bug.id} />
  ))

  return (
    <div>
      {allBugs}
    </div>
  );
}

export default BugList;