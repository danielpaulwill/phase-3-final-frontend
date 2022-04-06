import './App.css';
import BugList from './BugList';
import NewBugForm from './NewBugForm';

function App() {


  const currentBugsList = [
  {
    id: 1,
    appName: "Starbucks Caffeine",
    entryType: "Bug",
    description: "Fix the filter feature that allows a user to filter coffees based on a dropdown"
  },
  {
    id: 2,
    appName: "Coding Portfolio Page",
    entryType: "Feature",
    description: "Create an endless cycling color change background"
  },
  {
    id: 3,
    appName: "Wayfarer",
    entryType: "Feature",
    description: "Create a die function that can be used to roll a D20 or a D6"
  },
  {
    id: 4,
    appName: "Harry Potter House Quiz",
    entryType: "New App",
    description: "Have people answer a series of questions that sorts them into each house"
  }
]
  return (
    <div>
      <h1>I am here</h1>
      <NewBugForm currentBugsList={currentBugsList} />
      <BugList currentBugsList={currentBugsList} />
    </div>
  );
}

export default App;
