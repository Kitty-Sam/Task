import {
    addTaskAC,
    editTaskAC,
    fetchTasksAC,
    removeTaskAC,
    TasksActions,
    toggleIsDoneTaskAC,
    toggleIsImportantTaskAC,
} from '~store/actions/tasksAC';

export type TaskType = {
    taskId: string;
    title: string;
    description: string;
    time: { from: string; till: string };
    chapter: string;
    isDone: boolean;
    isImportant: boolean;
    extraInfo: string;
};

const initialState: InitialStateType = {
    tasks: [],
};

type InitialStateType = {
    tasks: TaskType[];
};

type ActionsType =
    | ReturnType<typeof addTaskAC>
    | ReturnType<typeof removeTaskAC>
    | ReturnType<typeof fetchTasksAC>
    | ReturnType<typeof toggleIsDoneTaskAC>
    | ReturnType<typeof toggleIsImportantTaskAC>
    | ReturnType<typeof editTaskAC>;

// eslint-disable-next-line @typescript-eslint/default-param-last
export const tasksReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case TasksActions.ADD_TASK: {
            const newTask: TaskType = action.payload;
            return {
                ...state,
                tasks: [newTask, ...state.tasks],
            };
        }

        case TasksActions.TOGGLE_IS_DONE: {
            const taskId = action.payload;
            return {
                ...state,
                tasks: state.tasks.map((task) => {
                    if (taskId === task.taskId) {
                        return { ...task, isDone: !task.isDone };
                    } else {
                        return task;
                    }
                }),
            };
        }

        case TasksActions.TOGGLE_IS_IMPORTANT: {
            const taskId = action.payload;
            return {
                ...state,
                tasks: state.tasks.map((task) => {
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
            };
        }

        case TasksActions.REMOVE_TASK: {
            const taskId = action.payload;
            return { ...state, tasks: state.tasks.filter((task) => task.taskId !== taskId) };
        }
        case TasksActions.FETCH_TASKS: {
            return {
                ...state,
                tasks: action.payload,
            };
        }
        default:
            return state;
    }
};
