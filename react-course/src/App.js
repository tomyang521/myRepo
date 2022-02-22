import Todo from './components/Todo.js';

function App() {
  return (
    <div>
      <h1>Tom's To-do List</h1>
      <Todo text='Learn React'/>
      <Todo text='Master React'/>
      <Todo text='Explore the full React course'/>
    </div>
  );
}

export default App;
