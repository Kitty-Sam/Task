export interface CategoryPropsType {
    title: string;
    counter: string;
    icon: string;
    backgroundColor: string;
    onPress: () => void;
    style?: { width: number; height: number };
}
