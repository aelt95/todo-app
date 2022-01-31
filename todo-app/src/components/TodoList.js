import { useState } from "react";
import ListItem from "./ListItem/ListItem";
import Input from "./Shared/Input";

const TodoList = () => {
  const [hasListName, setHasListName] = useState(false);
  const [listName, setListName] = useState("");
  const [listTodo, setListTodo] = useState([]);
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
    setListTodo([...listTodo, todoItem]);
  };

  return (
    <div>
      {!hasListName ? (
        <form onSubmit={listNameHandler}>
          <Input
            type="text"
            value={listName}
            onChange={(e) => setListName(e.target.value)}
          />
          <button>Create</button>
        </form>
      ) : (
        <div>
          <div>
            <h1>{listName}</h1>
            <button onClick={editListNameHandler}>Edit</button>
          </div>
          <form onSubmit={addTodoHandler}>
            <Input
              value={todoItem}
              onChange={(e) => setTodoItem(e.target.value)}
              type="text"
            />
            <button>Add</button>
          </form>
          {listTodo.map((item, index) => {
            return (
              <div key={index}>
                <ListItem name={item} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default TodoList;
