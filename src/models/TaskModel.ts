/* Modelo de uma task individual */
export type TaskModel = {
  id: string;
  name: string;
  duration: number;
  startDate: number; //facilita salvar no localStorage com number 
  completeDate: number | null; // quando o timer chega ao final
  interruptedDate: number; // quando a task for interrompida
  type: 'workTime' | 'shortBreakTime' | 'longBreakTime';
}