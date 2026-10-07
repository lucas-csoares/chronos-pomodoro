import type { TaskModel } from "./TaskModel";

/* Estado completo da aplicação, incluindo todas as tasks e o estado do timer */
export type TaskStateModel = {
  tasks: TaskModel[]; 
  secondsRemaining: number; 
  formattedSecondsRemaining: string; // secondsRemaining formatado como string para exibição
  activeTask: TaskModel | null; // task atualmente ativa, se houver
  currentCycle: number; // número do ciclo atual (1 a 8)
  config: {
    workTime: number; // duração do tempo de trabalho em minutos
    shortBreakTime: number; // duração do tempo de descanso curto em minutos
    longBreakTime: number; // duração do tempo de descanso longo em minutos
  }
} 