export type CustomButtonProps = {
    children: React.ReactNode;
    type?: ButtonType;
    clickHandler?: () => void;
    className?: string;
}

type ButtonType = 'button' | 'reset' | 'submit';

export type CustomInputProps = {
    type?: InputType;
    name: string;
    id: string;
    label: string;
    required?: boolean;
    className?: string;
    min?: number;
    max?: number;
    minLength?: number;
    maxLength?: number;
}

export enum InputType {
    text = 'text',
    number = 'number',
    email = 'email',
    password = 'password',
}