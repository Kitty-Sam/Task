import { addTaskAC, fetchTasksAC, removeTaskAC, TasksActions } from '~store/actions/tasksAC';

export type TaskType = {
    taskId: string;
    title: string;
    description: string;
    time: string;
    chapter: string;
};

const initialState: InitialStateType = {
    tasks: [],
};

type InitialStateType = {
    tasks: TaskType[];
};

type ActionsType = ReturnType<typeof addTaskAC> | ReturnType<typeof removeTaskAC> | ReturnType<typeof fetchTasksAC>;

// eslint-disable-next-line @typescript-eslint/default-param-last
export const tasksReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case TasksActions.ADD_TASK: {
            const { taskId, title, time, description, chapter } = action.payload;
            const hasTask = state.tasks.find((task) => task.taskId === taskId);

            if (!hasTask) {
                const newTask: TaskType = {
                    taskId,
                    title,
                    description,
                    time,
                    chapter,
                };

                return {
                    ...state,
                    tasks: [newTask, ...state.tasks],
                };
            }
            return state;
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
