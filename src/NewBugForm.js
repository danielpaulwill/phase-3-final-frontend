import './App.css';

function NewBugForm({ currentBugsList }) {

  const appNamesList = currentBugsList.map(bug => (
    <li>{bug.appName}</li>
  ))
  return (
    <div id='newBugForm'>
      <div id='newBugFormTitle'>
        <h3>Add a new Bug, Feature, or all new App</h3>
      </div>

      <br></br>
      Current Apps: {appNamesList}
      <br></br>
      
      <div>
        <label>Name of App</label>
        <br></br>
        <input type="text"></input>
        <form>
          <input type="radio" value="1" name="entryType"></input>
          <label>Bug</label>
          <br></br>
          <input type="radio" value="2" name="entryType"></input>
          <label>Feature</label>
          <br></br>
          <input type="radio" value="3" name="entryType"></input>
          <label>New App</label>
        </form>
<br></br>
        <form>
          <input type="radio" value="x" name="two"></input>
          <label>x</label>
          <br></br>
          <input type="radio" value="y" name="two"></input>
          <label>y</label>
          <br></br>
          <input type="radio" value="z" name="two"></input>
          <label>z</label>
        </form>
      </div>

      <button>Press me!</button>

    </div>
  );
}

export default NewBugForm;
