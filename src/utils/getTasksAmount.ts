import { ITask } from '~store/reducers/types';

export const getTasksAmount = (tasks: ITask[], filter: string) => {
    return String(tasks.filter((task) => task.chapter === filter).length);
};

export const getTasksAmountWithSearch = (tasks: ITask[], filter: string, search: string) => {
    return String(tasks.filter((task) => task.chapter === filter).filter((task) => task.title.includes(search)).length);
};

export const getDoneTasksAmount = (tasks: ITask[], filter: string) => {
    return String(tasks.filter((task) => task.chapter === filter).filter((task) => task.isDone).length);
};
