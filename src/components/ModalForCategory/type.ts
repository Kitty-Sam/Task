import { UseInputResponseType } from '~hooks/UseInput';

export interface ModalForCategoryType {
    isOpen: boolean;
    setIsOpen: (value: boolean) => void;
    userCategory: UseInputResponseType;
    userColor: UseInputResponseType;
    catId: string;
}
