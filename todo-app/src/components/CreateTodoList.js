import { useState, useRef } from "react";

const CreateTodoList = () => {
  const [isNameList, setIsNameList] = useState(false);
  const [nameList, setNameList] = useState();
  const nameListInput = useRef();

  const editNameListHandler = () => {
    setIsNameList(false);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setNameList(nameListInput.current.value);
    setIsNameList(true);
  };

  return (
    <div>
      {!isNameList && (
        <form onSubmit={submitHandler}>
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
          <h1>{nameList}</h1>
          <button onClick={editNameListHandler}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default CreateTodoList;
