import { useCallback, useState } from "react";
import { addTodo, toggle, deleteTodo, editTodo } from "./store/todo/todoSlice";
import { useDispatch, useSelector } from "react-redux";
import Header from "./component/header";
import './App.css';

function App() {
  const dispatch = useDispatch();
  const todos = useSelector((store) => store.todos);

  const [todo, setTodo] = useState("");
  const [currentText, setCurrentText] = useState("");
  const [isEditing, setIsEditing] = useState('');

  const handleAddTodo = useCallback(() => {
    const payload = { id: Date.now(), text: todo, isCompleted: false };
    if (todo !== "") {
      dispatch(addTodo(payload));
    }
    setTodo("");
  }, [dispatch, todo]);

  const handleEditTask = useCallback((index) => {
    setIsEditing(index)
    setCurrentText(todos[index].text)
  }, [todos]);

  const handleSaveTodo = useCallback((index) => {
    // console.log(currentText)
    dispatch(editTodo({ newText: currentText, index }))
    setIsEditing('');
    setCurrentText('');
  }, [dispatch, currentText])

  // console.log(isEditing);
  // console.log(currentText);

  // console.log(todos)

  return (
    <div>
      <Header />
      <div className="content">
        <div className="main-div">
          <div className="input-container">
            <input
              type="text"
              placeholder="Enter Task"
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
            />
            <button className="add-button" onClick={handleAddTodo}>Add</button>
          </div>
          <ul>
            {todos.map((value, index) => isEditing === index ? (
              <div className="task-div" key={value.id}>
                <textarea className="textarea" contentEditable value={currentText} onChange={(e) => setCurrentText(e.target.value)}/>
                <div className="button-div">
                  <button onClick={() => handleSaveTodo(index)}>Save changes</button>
                </div>
              </div>
            ) : (
              <div className={`task-div ${value.isCompleted ? 'completed-div' : ''}`} key={value.id}>
                <div className={`task-text ${value.isCompleted ? 'completed-text' : ''}`}>{value.text}</div>
                <div className="button-div">
                  <button onClick={() => dispatch(toggle(index))}>Completed</button>
                  <button onClick={() => handleEditTask(index)}>Edit</button>
                  <button onClick={() => dispatch(deleteTodo(index))}>Delete</button>
                </div>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
