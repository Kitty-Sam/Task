import { TaskType } from '~store/reducers/tasksReducer';

export const getTasksAmount = (tasks: TaskType[], filter: string) => {
    return String(tasks.filter((task) => task.chapter === filter).length);
};

export const getTasksAmountWithSearch = (tasks: TaskType[], filter: string, search: string) => {
    const filteredByChapter = tasks.filter((task) => task.chapter === filter);
    const filteredByChapterAndSearch = filteredByChapter.filter((el) => el.title.includes(search));

    return String(filteredByChapterAndSearch.length);
};

export const getDoneTasksAmount = (tasks: TaskType[], filter: string) => {
    return String(tasks.filter((task) => task.isDone).filter((el) => el.chapter === filter).length);
};
