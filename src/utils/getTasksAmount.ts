import { TaskType } from '~store/reducers/tasksReducer';

export const getTasksAmount = (tasks: TaskType[], filter: string) => {
    return String(tasks.filter((task) => task.chapter === filter).length);
};

export const getTasksAmountWithSearch = (tasks: TaskType[], filter: string, search: string) => {
    return String(tasks.filter((task) => task.chapter === filter).filter((task) => task.title.includes(search)).length);
};

export const getDoneTasksAmount = (tasks: TaskType[], filter: string) => {
    return String(tasks.filter((task) => task.chapter === filter).filter((task) => task.isDone).length);
};
