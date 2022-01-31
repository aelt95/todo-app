import { useState } from "react";
import TodoList from "./TodoList";

const TodoLists = () => {
  const [todoListStore, setTodoListStore] = useState([]);

  const newListHandler = () => {
    return setTodoListStore([...todoListStore, 1]);
  };

  return (
    <>
      <button onClick={newListHandler}>New List</button>
      {todoListStore.map((list, index) => {
        return (
          <div key={index}>
            <TodoList />
          </div>
        );
      })}
    </>
  );
};

export default TodoLists;
