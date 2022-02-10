import { useState } from "react";
import ListItem from "../ListItem/ListItem";
import Form from "../Shared/Form";
import "../../Styles/TodoList/TodoList.css";

const TodoList = ({ getNewList }) => {
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
          className="form"
          handler={listNameHandler}
          value={listName}
          onChange={(e) => setListName(e.target.value)}
        />
      ) : (
        <div>
          <div className="main_header">
            <div>
              <h1>{listName}</h1>
              <button className="btn btn_edit" onClick={editListNameHandler}>
                Edit
              </button>
            </div>
            <button className="btn btn_new-list" onClick={getNewList}>
              New List
            </button>
          </div>
          <Form
            className="form"
            handler={addTodoHandler}
            value={todoItem}
            onChange={(e) => setTodoItem(e.target.value)}
            text=""
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
