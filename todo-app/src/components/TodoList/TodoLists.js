import { useState } from "react";
import TodoList from "./TodoList";
import "../../Styles/TodoList/TodoList.css";

const TodoLists = () => {
  const [todoListStore, setTodoListStore] = useState([]);

  const newListHandler = () => {
    return setTodoListStore([...todoListStore, 1]);
  };

  return (
    <div className="container">
      {todoListStore.map((list, index) => {
        return (
          <div key={index}>
            <TodoList />
          </div>
        );
      })}
      <button className="btn__new-list" onClick={newListHandler}>
        New List
      </button>
    </div>
  );
};

export default TodoLists;
