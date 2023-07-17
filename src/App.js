import './App.css';
import TaskListComponent from './components/container/TaskListComponent';
import LoginFormik from './components/pure/forms/LoginFormik';
import RegisterFormik from './components/pure/forms/RegisterFormik';

function App() {
  return (
    <div className="App">
      <TaskListComponent/>
      <RegisterFormik></RegisterFormik>
    </div>
  );
}

export default App;
