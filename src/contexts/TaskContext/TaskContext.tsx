import { createContext } from "react";
import type { TaskStateModel } from "../../models/TaskStateModel";
import { initialTaskState } from "./initialTaskState";

type TaskContexProps = {
  state: TaskStateModel;
  setState: React.Dispatch<React.SetStateAction<TaskStateModel>>;
}

const initialContextValue: TaskContexProps = {
  state: initialTaskState,
  setState: () => {}
};

/*Cria o context React para compartilhar o estado das tarefas e a função que atualiza esse estado entre diferentes componentes.*/
export const TaskContext = createContext<TaskContexProps>(initialContextValue);
