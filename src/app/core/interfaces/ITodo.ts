import { ITodoTask } from './ITodoTask';

export interface ITodo {
  id: number;
  title: string;
  notes: string;
  date?: Date;
  isComplete: boolean;
  tasks: ITodoTask[];
}
