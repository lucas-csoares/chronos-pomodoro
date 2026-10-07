// Cria o contexto React que compartilha o estado das tarefas e a função para atualizá-lo.

// Seu valor padrão usa initialTaskState até que um TaskContextProvider envolva os componentes.

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

export const TaskContext = createContext<TaskContexProps>(initialContextValue);
