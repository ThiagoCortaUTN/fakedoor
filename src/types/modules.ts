export interface TaskItemProps {
  task: Task;
}

export interface Task {
  id: number;
  title: string;
  isLocked: boolean;
}

export interface Modules {
  number: string;
  title: string;
  image: string;
  completed?: boolean;
  taskCount: number;
  lessons: {
    lessonModule: string;
    lessonTitle: string;
    completed?: boolean;
    tasks: Task[];
  }[];
}
