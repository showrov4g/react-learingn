import tick from "./assets/tick.png";
import not_tik from "./assets/not_tick.png";
import cross from "./assets/cross.png";

const ToDoItem = ({ no, display, text, setTodos }) => {

    const remove = (no)=>{
        let data = JSON.parse(localStorage.getItem("todos"));
        data = data.filter((todo)=>{todo.no!==0});
        setTodos(data);
    }

  const toggle = (no) => {
    let data = JSON.parse(localStorage.getItem("todos"));
    for (let i = 0; i < data.length; i++) {
      if (data[i].no === no) {
        if (data[i].display === "") {
          data[i].display = "line-through";
        } else {
          data[i].display = "";
        }
        break;
      }
    }
    setTodos(data);
  };

  return (
    <div className="flex justify-between items-center px-[16px] py-0 ">
      {/* container */}
      <div
        className={`flex ${display}`}
        onClick={(no) => {
          toggle();
        }}
      >
        {display === "" ? (
          <img src={not_tik} alt="" />
        ) : (
          <img src={tick} alt="" />
        )}
        {/* to dot items text */}
        <div className="pl-[16px] text-[#404040] text-[22px] ">{text}</div>
      </div>
      {/* cross icon */}
      <img onClick={()=> {remove(no)}} src={cross} alt="" className="cursor-pointer pr-[25px]" />
    </div>
  );
};

export default ToDoItem;
