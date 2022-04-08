import React, { FC, useState, ChangeEvent } from "react";
import "./App.css";
import { TodoTask } from "./components/TodoTask";
import { Itask } from "./Interfaces";

const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [deadLine, setdeadLine] = useState<number>(0);
  const [todoList, settodoList] = useState<Itask[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    } else {
      setdeadLine(Number(event.target.value));
    }
  };

  const addTask = (): void => {
    const newTask = { taskName: task, deadLine: deadLine };
    settodoList([...todoList, newTask]);
    setTask("");
    setdeadLine(0);
  };

  return (
    <div className="App">
      <div className="header">
        <div className="inputContainer">
          <input
            type="text"
            placeholder="Task ..."
            onChange={handleChange}
            name="task"
            value={task}
          />
          <input
            type="number"
            placeholder="Deadline (in Days) ..."
            onChange={handleChange}
            name="deadLine"
            value={deadLine}
          />
        </div>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="todoList">
        {todoList.map(() => {
          return <todoTask></todoTask>;
        })}
      </div>
    </div>
  );
};

export default App;
