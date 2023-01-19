import { TaskType } from '~store/reducers/tasksReducer';

export const getTasksAmount = (tasks: TaskType[], filter: string) => {
    return String(tasks.filter((task) => task.chapter === filter).length);
};

export const getDoneTasksAmount = (tasks: TaskType[]) => {
    return String(tasks.filter((task) => task.isDone).length);
};
