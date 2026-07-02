import {useState,useRef,useEffect} from "react";
import ToDoList from "./Todolist.jsx";



function app() {

    const [Tasks, setTasks] = useState([]); 
    const taskNameRef = useRef(null);

    useEffect(function () {
        const storedTasks = JSON.parse(localStorage.getItem("Tasks"));
        if (storedTasks) setTasks(storedTasks);
    }, []);
    useEffect(function () {
        localStorage.setItem("Tasks", JSON.stringify(Tasks));
    }, [Tasks]);

    useEffect(() => {
  const light = document.querySelector(".cursor-light");

  const move = (e) => {
    if (!light) return;

    light.style.left = `${e.clientX}px`;
    light.style.top = `${e.clientY}px`;
  };

  window.addEventListener("mousemove", move);

  return () => {
    window.removeEventListener("mousemove", move);
  };
}, []);


    function handleaddTask() {
        const name = taskNameRef.current.value;
        setTasks(function (currentask) {
            return [...currentask, {id: Date.now(), name: name, completed: false}];
        })
        taskNameRef.current.value = "";
    }
    function toggleTodo(id) {
        setTasks(function (currentask) {
            return currentask.map(function (task) {
                if (task.id === id) {
                    return {...task, completed: !task.completed};
                }
                return task;
            });
        });
    }
    function handleClearTask() {
        setTasks(currentask => currentask.filter(task => !task.completed));
    };
    
    return (
  <div className="app">
    <div className="background"></div>
    <div className="grid"></div>
    <div className="cursor-light"></div>

    <div className="hero">
      <div className="card">
        <h1 className="title">Todo List</h1>

        <p className="subtitle">
          Stay organized and get things done.
        </p>

        <div className="todo-container">
          <ToDoList
            Tasks={Tasks}
            toggleTodo={toggleTodo}
          />

          <div className="input-row">
            <input
              type="text"
              placeholder="Add a task..."
              ref={taskNameRef}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  handleaddTask();
                }
              }}
            />

            <button onClick={handleaddTask}>
              Add
            </button>

            <button onClick={handleClearTask}>
              Clear
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);
}
export default app;