// Reúne o acesso ao TaskContext em um hook para os componentes lerem e atualizarem o estado.

import { useContext } from "react";
import { TaskContext } from "./TaskContext";


export function useTaskContext() {
  return useContext(TaskContext);
}
