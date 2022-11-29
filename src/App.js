import NewTask from './Components/NewTask/NewTask';
import Tasks from './Components/Tasks/Tasks';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NewTask></NewTask>
        <Tasks></Tasks>
      </header>
      
    </div>
  );
}

export default App;
