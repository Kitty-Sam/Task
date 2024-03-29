import moment from 'moment';

import { TaskType } from '~store/reducers/tasksReducer';

export const todayDate = moment(new Date()).format('dddd,  DD MMMM YYYY');

//filter params
export const now = moment();
export const start = now.startOf('day');
export const end = now.endOf('day');
export const week = moment().add(7, 'days');
export const month = moment().add(30, 'days');

//filter functions
export const sortTodayTasks = (values: TaskType[]) => {
    return (
        'You have ' +
        values.filter((task: TaskType) => moment(new Date(task.time.from)).isBetween(start, end, 'day', '[]')).length +
        ' task(s) today!'
    );
};

export const sortWeekTasks = (values: TaskType[]) => {
    return (
        'You have ' +
        values.filter((task: TaskType) => moment(new Date(task.time.from)).isBetween(start, week, 'day', '[]')).length +
        ' task(s) for this week!'
    );
};

export const sortMonthTasks = (values: TaskType[]) => {
    return (
        'You have ' +
        values.filter((task: TaskType) => moment(new Date(task.time.from)).isBetween(start, month, 'day', '[]'))
            .length +
        ' task(s) for this month!'
    );
};

export const sortToday = (values: TaskType[]) => {
    return values.filter((task: TaskType) => moment(new Date(task.time.from)).isBetween(start, end, 'day', '[]'));
};
export const sortWeek = (values: TaskType[]) => {
    return values.filter((task: TaskType) => moment(new Date(task.time.from)).isBetween(start, week, 'day', '[]'));
};
export const sortMonth = (values: TaskType[]) => {
    return values.filter((task: TaskType) => moment(new Date(task.time.from)).isBetween(start, month, 'day', '[]'));
};

//common function
export const setTasksFilter = (period: string, values: TaskType[]) => {
    switch (period) {
        case 'Today': {
            return sortTodayTasks(values);
        }
        case 'Week': {
            return sortWeekTasks(values);
        }
        case 'Month': {
            return sortMonthTasks(values);
        }
        default:
            return sortTodayTasks(values);
    }
};

export const setFilteredTasks = (period: string, values: TaskType[]) => {
    switch (period) {
        case 'Today':
            return sortToday(values);

        case 'Week': {
            return sortWeek(values);
        }
        case 'Month': {
            return sortMonth(values);
        }
        default:
            return sortToday(values);
    }
};

export const getFromFB = (value: string) => {
    return moment(new Date(value)).format('h:mm a');
};

export const getFromFBDay = (value: string) => {
    return moment(new Date(value)).format('dddd, MMMM DD');
};
export const getFromFBShortDay = (value: string) => {
    return moment(new Date(value)).format('ddd, MMM DD');
};

export const saveToFB = (value: Date) => {
    return moment(value).format('h:mm a');
};
