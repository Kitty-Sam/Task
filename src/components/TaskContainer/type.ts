import { TaskType } from '~store/reducers/tasksReducer';

export interface TaskContainerPropsType {
    task: TaskType;
    updateTrashVisibility?: any;
    trashId?: string | null;
}
