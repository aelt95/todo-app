import { useState } from "react";
import ListItem from "../ListItem/ListItem";
import Input from "../Shared/Input";

const TodoList = () => {
  const [hasListName, setHasListName] = useState(false);
  const [listName, setListName] = useState("");
  const [todoItems, setTodoItems] = useState([]);
  // const [listTodo, setListTodo] = useState([]);
  const [todoItem, setTodoItem] = useState("");

  const editListNameHandler = () => {
    setHasListName(false);
  };

  const listNameHandler = (e) => {
    e.preventDefault();
    setHasListName(true);
  };

  const addTodoHandler = (e) => {
    e.preventDefault();
    setTodoItems([...todoItems, todoItem]);
    setTodoItem("");
  };

  const renderForm = (handler, value, onChange) => {
    return(
        <form onSubmit={handler}>
          <Input
              value={value}
              onChange={onChange}
          />
          <button type='submit'>Create</button>
        </form>
    )
  }


  return (
    <>
      {!hasListName ? renderForm(listNameHandler, listName, (e) => setListName(e.target.value))
      : (
        <div>
          <div>
            <h1>{listName}</h1>
            <button onClick={editListNameHandler}>Edit</button>
          </div>
          <br/>
          <br/>
          <h3>Todo Items:</h3>
          {renderForm(addTodoHandler, todoItem, (e) => setTodoItem(e.target.value))}
          {todoItems.map((item, index) => {
            return (
              <div key={index}>
                <ListItem name={item} />
                {/*<TodoItem name={item} />*/}
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default TodoList;
