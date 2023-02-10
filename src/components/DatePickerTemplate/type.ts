export interface DatePickerTemplateType {
    booleanValue: boolean;
    onConfirm: (value: Date) => void;
    onCancel: () => void;
    dateValue: Date;
    setIsOpen: (value: boolean) => void;
}
