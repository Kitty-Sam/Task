import { TasksActions } from '~store/actions/actionsType';
import { ActionsType, ITask } from '~store/reducers/types';

const initialState = {
    tasks: [] as ITask[],
    currentTasks: [] as ITask[],
};

export const tasksReducer = (state = initialState, action: ActionsType) => {
    switch (action.type) {
        case TasksActions.ADD_TASK: {
            const newTask: ITask = action.payload.task;
            return {
                ...state,
                tasks: [newTask, ...state.tasks],
                currentTasks: [newTask, ...state.currentTasks],
            };
        }

        case TasksActions.TOGGLE_IS_DONE: {
            const taskId = action.payload.id;
            return {
                ...state,
                tasks: state.tasks.map((task) => {
                    if (taskId === task.taskId) {
                        return { ...task, isDone: !task.isDone };
                    } else {
                        return task;
                    }
                }),
                currentTasks: state.currentTasks.map((task) => {
                    if (taskId === task.taskId) {
                        return { ...task, isDone: !task.isDone };
                    } else {
                        return task;
                    }
                }),
            };
        }

        case TasksActions.TOGGLE_IS_IMPORTANT: {
            const taskId = action.payload.id;
            return {
                ...state,
                tasks: state.tasks.map((task) => {
                    if (taskId === task.taskId) {
                        return { ...task, isImportant: !task.isImportant };
                    } else {
                        return task;
                    }
                }),
                currentTasks: state.currentTasks.map((task) => {
                    if (taskId === task.taskId) {
                        return { ...task, isImportant: !task.isImportant };
                    } else {
                        return task;
                    }
                }),
            };
        }

        case TasksActions.EDIT_TASK: {
            const { taskId, title, extraInfo, description } = action.payload;
            return {
                ...state,
                tasks: state.tasks.map((task) => {
                    if (taskId === task.taskId) {
                        return { ...task, title, extraInfo, description };
                    } else {
                        return task;
                    }
                }),
                currentTasks: state.currentTasks.map((task) => {
                    if (taskId === task.taskId) {
                        return { ...task, title, extraInfo, description };
                    } else {
                        return task;
                    }
                }),
            };
        }

        case TasksActions.REMOVE_TASK: {
            const taskId = action.payload.id;
            return {
                ...state,
                tasks: state.tasks.filter((task) => task.taskId !== taskId),
                currentTasks: state.currentTasks.filter((task) => task.taskId !== taskId),
            };
        }
        case TasksActions.FETCH_TASKS: {
            return {
                ...state,
                tasks: action.payload.tasks,
                currentTasks: action.payload.tasks,
            };
        }

        case TasksActions.FETCH_CURRENT_TASKS: {
            return {
                ...state,
                currentTasks: action.payload.tasks,
            };
        }
        default:
            return state;
    }
};
