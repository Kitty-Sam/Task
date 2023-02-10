export type UseDatePickerResponseType = {
    booleanValue: boolean;
    onConfirm: (value: Date) => void;
    onCancel: () => void;
    dateValue: Date;
    setIsOpen: () => void;
};
