import { useState } from "react";
import ListItem from "../ListItem/ListItem";
import Form from "../Shared/Form";

const TodoList = () => {
  const [hasListName, setHasListName] = useState(false);
  const [listName, setListName] = useState("");
  const [todoItems, setTodoItems] = useState([]);
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

  return (
    <>
      {!hasListName ? (
        <Form
          handler={listNameHandler}
          value={listName}
          onChange={(e) => setListName(e.target.value)}
        />
      ) : (
        <div>
          <div>
            <h1>{listName}</h1>
            <button onClick={editListNameHandler}>Edit</button>
          </div>
          <br />
          <h3>Todo Items:</h3>
          <Form
            handler={addTodoHandler}
            value={todoItem}
            onChange={(e) => setTodoItem(e.target.value)}
          />
          {todoItems.map((item, index) => {
            return (
              <div key={index}>
                <ListItem name={item} />
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default TodoList;
