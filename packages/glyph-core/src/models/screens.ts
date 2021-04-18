export interface Screen {
    name: string;
    beta?: boolean;
    icon: string;
    navigation?: () => void;
    order?: number;
    active?: boolean;
}
