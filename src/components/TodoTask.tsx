import React from "react";
import { Itask } from "../Interfaces";
// import "../index.css";

interface Props {
  task: Itask;
  completeTask(taskNameToDelete: string): void;
}

export const TodoTask = ({ task, completeTask }: Props) => {
  return (
    <div className="task">
      <div className="content">
        <span>{task.taskName}</span>
        <span>{task.deadLine}</span>
      </div>
      <button
        onClick={() => {
          completeTask(task.taskName);
        }}
      >
        x
      </button>
    </div>
  );
};
