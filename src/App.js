import "./App.css";
import TodoApp from "./components/TodoApp";

function App() {
  return (
    <div className="container">
      <div className="todoBackground"><h2>To Do List</h2></div>
      <TodoApp />
      <footer>
        <div class="footer-box">
          <p>
            Developed by
            <a href="#"> Antony U. </a>
            All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
