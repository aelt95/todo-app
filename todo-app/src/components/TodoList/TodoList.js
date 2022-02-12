import { useState } from "react";
import ListItem from "../ListItem/ListItem";
import Form from "../Shared/Form";
import "../../Styles/TodoList/TodoList.css";
import Footer from "../Shared/Footer";

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
          className="form form_todo-list"
          handler={listNameHandler}
          value={listName}
          onChange={(e) => setListName(e.target.value)}
        />
      ) : (
        <>
          <div className="main_header">
            <div>
              <h1>{listName}</h1>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.0204 1.0204C15.2787 0.752967 15.5877 0.539656 15.9293 0.392911C16.2709 0.246166 16.6383 0.168925 17.0101 0.165694C17.3819 0.162463 17.7506 0.233308 18.0947 0.374095C18.4388 0.514881 18.7514 0.72279 19.0143 0.985689C19.2772 1.24859 19.4851 1.56121 19.6259 1.90532C19.7667 2.24943 19.8375 2.61814 19.8343 2.98992C19.8311 3.3617 19.7538 3.72912 19.6071 4.07073C19.4603 4.41234 19.247 4.7213 18.9796 4.9796L17.8694 6.08979L13.9102 2.1306L15.0204 1.0204ZM11.9306 4.1102L0.200001 15.8408V19.8H4.1592L15.8912 8.0694L11.9292 4.1102H11.9306Z"
                  fill="#8F8F8F"
                />
              </svg>
              <button className="btn btn_edit" onClick={editListNameHandler}>
                Edit
              </button>
            </div>
            <button className="btn btn_new-list" onClick={getNewList}>
              New List
            </button>
          </div>
          <Form
            className="form form_todo-item"
            handler={addTodoHandler}
            value={todoItem}
            onChange={(e) => setTodoItem(e.target.value)}
            text=""
            placeholder="Add a to-do..."
          />
          {todoItems.map((item, index) => {
            return (
              <div className="list-item" key={index}>
                <ListItem name={item} />
              </div>
            );
          })}
          <Footer />
        </>
      )}
    </>
  );
};

export default TodoList;
