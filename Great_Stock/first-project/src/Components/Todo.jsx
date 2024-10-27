import { useEffect, useRef, useState } from "react";
import ToDoItem from "./ToDoItem";

let count = 0;
const Todo = () => {
  const [todos, setTodos] = useState([]);

  const inputRef = useRef(null);

  const add = () => {
    setTodos([
      ...todos,
      { no: count++, text: inputRef.current.value, display: "" },
    ]);
    inputRef.current.value = "";
    localStorage.setItem("todos_count", count);
  };

  useEffect(() => {
    setTodos(JSON.parse(localStorage.getItem("todos")));
    count = localStorage.getItem("todos_count");
  }, []);

  useEffect(() => {
    setTimeout(() => {
      console.log(todos);
      localStorage.setItem("todos", JSON.stringify(todos));
    }, 1000);
  }, [todos]);

  return (
    <div className="w-[660px] h-[732px] rounded-2xl bg-white mx-auto mt-[174px] flex flex-col px-[44px] py-[44px] mb-[100px] ">
      {/* to do header  */}
      <div className="mt-[84px] text-5xl text-[#002756] font-bold">
        To-Do List
      </div>
      {/* to do add  */}
      <div className="flex justify-center items-center mt-[45px]">
        <input
          ref={inputRef}
          type="text"
          placeholder="Add your list"
          className="rounded-full bg-[#edeef0] border-none outline-none w-[576px] h-[80px] text-base pl-[35px]"
        />
        {/* to do add button  */}
        <button
          onClick={() => {
            add();
          }}
          className="rounded-full bg-[#ff6739] w-[187px] h-[80px] flex justify-center items-center -ml-[100px] text-base font-normal text-white"
        >
          Add
        </button>
      </div>
      {/* to do list  */}
      <div>
        {todos.map((item, index) => {
          return (
            <ToDoItem
                setTodos={setTodos}
              no={item.no}
              display={item.display}
              text={item.text}
              key={index}
            ></ToDoItem>
          );
        })}
      </div>
    </div>
  );
};

export default Todo;
