import { TaskType } from '~store/reducers/tasksReducer';

export const getTaskAmount = (tasks: TaskType[], filter: string) => {
    return String(tasks.filter((task) => task.chapter === filter).length);
};
