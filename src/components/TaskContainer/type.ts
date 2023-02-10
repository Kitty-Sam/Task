import { ITask } from '~store/reducers/types';

export interface TaskContainerPropsType {
    task: ITask;
    updateTrashVisibility?: any;
    trashId?: string | null;
}

export type ContextAnimationType = {
    translateX: number;
};
