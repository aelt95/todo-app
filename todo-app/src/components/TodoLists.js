import {useState} from "react";
import ListItem from "./ListItem/ListItem";

const TodoLists = () => {
    const [isNameList, setIsNameList] = useState(false);
    const [nameList, setNameList] = useState("");
    const [listTodo, setListTodo] = useState([]);
    const [todoItems, setTodoItems] = useState("");

    const editNameListHandler = () => {
        setIsNameList(false);
    };

    const listNameHandler = (e) => {
        e.preventDefault();
        setIsNameList(true);
    };

    const addTodoHandler = (e) => {
        e.preventDefault();
        setListTodo([...listTodo, todoItems]);
    };
    return (
        <div>
            {!isNameList && (
                <form onSubmit={listNameHandler}>
                    <input
                        type="text"
                        placeholder="Name your list"
                        value={nameList}
                        onChange={(e) => setNameList(e.target.value)}
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
                            value={todoItems}
                            onChange={(e) => setTodoItems(e.target.value)}
                            type="text"
                        ></input>
                        <button>Add</button>
                    </form>
                    {listTodo.map((item, index) => {
                        return (
                            <div key={index}>
                                <ListItem name={item}/>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default TodoLists;
