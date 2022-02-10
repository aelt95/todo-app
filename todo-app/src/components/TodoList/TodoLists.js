import { useState } from "react";
import TodoList from "./TodoList";
import "../../Styles/TodoList/TodoList.css";

const TodoLists = () => {
  const [todoListStore, setTodoListStore] = useState([1]);

  const newListHandler = () => {
    return setTodoListStore([...todoListStore, 1]);
  };

  return (
    <>
      {todoListStore.map((list, index) => {
        return (
          <div className="container" key={index}>
            <TodoList getNewList={newListHandler} />
          </div>
        );
      })}
    </>
  );
};

export default TodoLists;
