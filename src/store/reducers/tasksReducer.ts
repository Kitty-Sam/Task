import { addTaskAC, fetchTasksAC, removeTaskAC, TasksActions } from '~store/actions/tasksAC';

type TaskType = {
    id: string;
    title: string;
    description: string;
    time: string;
};

const initialState: InitialStateType = {
    tasks: [],
};

type InitialStateType = {
    tasks: TaskType[];
};

type ActionsType = ReturnType<typeof addTaskAC> | ReturnType<typeof removeTaskAC> | ReturnType<typeof fetchTasksAC>;

export const tasksReducer = (state: InitialStateType, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case TasksActions.ADD_TASK: {
            const { id, title, time, description } = action.payload;
            const hasTask = state.tasks.find((task) => task.id === id);

            if (!hasTask) {
                const newTask: TaskType = {
                    id,
                    title,
                    description,
                    time,
                };
                return {
                    ...state,
                    tasks: [newTask, ...state.tasks],
                };
            }
            return state;
        }

        case TasksActions.REMOVE_TASK: {
            const { id } = action.payload;
            return { ...state, tasks: state.tasks.filter((task) => task.id !== id) };
        }
        case TasksActions.FETCH_TASKS: {
            return {
                ...state,
                tasks: action.payload,
            };
        }
        default:
            return initialState;
    }
};
