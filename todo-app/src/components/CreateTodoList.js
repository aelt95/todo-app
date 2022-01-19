import { useState, useRef } from "react";

const CreateTodoList = () => {
  const [isNameList, setIsNameList] = useState(false);
  const [nameList, setNameList] = useState();
  const [listTodo, setListTodo] = useState([]);
  const nameListInput = useRef();
  const todoRef = useRef();

  const editNameListHandler = () => {
    setIsNameList(false);
  };

  const listNameHandler = (e) => {
    e.preventDefault();
    setNameList(nameListInput.current.value);
    setIsNameList(true);
  };

  const addTodoHandler = (e) => {
    e.preventDefault();
    setListTodo([...listTodo, todoRef.current.value]);
  };
  return (
    <div>
      {!isNameList && (
        <form onSubmit={listNameHandler}>
          <input
            type="text"
            ref={nameListInput}
            placeholder="Name your list"
          ></input>
          <button>Create</button>
        </form>
      )}
      {isNameList && (
        <div>
          <div>
            <h1>{nameList}</h1>
            <button onClick={editNameListHandler}>Edit</button>
          </div>
          <form onSubmit={addTodoHandler}>
            <input
              placeholder="Add your todo"
              ref={todoRef}
              type="text"
            ></input>
            <button>Add</button>
          </form>
          {listTodo.map((item) => {
            return (
              <div>
                <input type="checkbox"></input>
                <h3>{item}</h3>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default CreateTodoList;
