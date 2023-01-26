import { TaskType } from '~store/reducers/tasksReducer';
import { setFilteredTasks } from '~utils/getProperTime';

export const getTasksAmount = (tasks: TaskType[], filter: string) => {
    return String(tasks.filter((task) => task.chapter === filter).length);
};

export const getTasksAmountWithSearch = (tasks: TaskType[], filter: string, search: string) => {
    const filteredByChapter = tasks.filter((task) => task.chapter === filter);
    const filteredByChapterAndSearch = filteredByChapter.filter((el) => el.title.includes(search));
    return String(filteredByChapterAndSearch.length);
};

export const getTasksWithSearchAndPeriod = (tasks: TaskType[], chapter: string, search: string, period: string) => {
    const filteredByChapter = tasks.filter((task) => task.chapter === chapter);
    const filteredByChapterAndSearch = filteredByChapter.filter((el) => el.title.includes(search));
    return setFilteredTasks(period, filteredByChapterAndSearch);
};

export const getTasksWithPeriod = (tasks: TaskType[], chapter: string, period: string) => {
    const filteredByChapter = tasks.filter((task) => task.chapter === chapter);
    return setFilteredTasks(period, filteredByChapter);
};

export const getTasksWithSearch = (tasks: TaskType[], chapter: string, search: string) => {
    const filteredByChapter = tasks.filter((task) => task.chapter === chapter);
    return filteredByChapter.filter((el) => el.title.includes(search));
};

export const getDoneTasksAmount = (tasks: TaskType[], filter: string) => {
    return String(tasks.filter((task) => task.isDone).filter((el) => el.chapter === filter).length);
};
