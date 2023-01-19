export interface CustomTextInputType {
    value: string;
    onChangeText: (text: string) => void;
    resetValue: () => void;
    placeholder: string;
}
