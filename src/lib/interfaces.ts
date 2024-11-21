// export interface AppContent {
//     title: JSX.Element;
//     subTitle: string;
//     mainContent: string;
//     publishDate: number;
// }

export interface AppContent {
    title: string;
    appMenuEntries: string[];
    footer: JSX.Element;
}

export interface Section {
    title: string;
    author: string;
    publishDate: Date;
    subTitle: JSX.Element;
    menuSubSections: SubSection[];
}

export interface SubSection {
    title: string;
    plates: Plate[];
}

export interface IMenuPlate {
    plate: Plate;
}
export interface Plate {
    plateTitle: string;
    plateDescription: string;
    isNew: boolean;
    price: number;
}

export interface ITodo {
    id?: number;
    title: string;
    description: string;
    done: boolean;
}

export interface TodoItemProps {
    todo: ITodo,
    onDoneClick: (value: any) => void,
    onRemoveClick: (value: any) => void,
}

export interface TodoFormItemProps {
    value?: ITodo,
    onSaveClick: (todo: ITodo) => void,
    buttonLabel: string
}


export interface UserFormData {
    firstName: string,
    enabled: boolean;
    category: number;
}

export interface User {
    firstName: string;
    lastName: string;
    email: string;
    password?: string;
}

export interface IAuthContext {
    token: string,
    tokenContent: ITokenContent,
    handleSetToken: (token: string) => void,
    isLogged: () => boolean,
    isAdmin: () => boolean,
}


export interface IRegister {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}


export interface ILogin {
    email: string;
    password: string;
}

export interface ITokenContent {
    "firstName": string,
    "lastName": string,
    "email": string,
    "role": string,
}

export interface AddCourseRequest{
    id?: number;
    categoryId?: number;
    title: string;
    description: string;
    duration: number;
    category?: number;
}

export interface CourseFormItemProps {
    value?: ITodo,
    onSaveClick: (todo: ITodo) => void,
    buttonLabel: string
}

export interface Category{
    id: number;
    name: string;
}

export interface Course {
    id: number;
    title: string;
    description: string;
    duration: number;
    category: Category;
}

export interface CourseUpdateModel{
    title: string;
    description: string;
    duration: number;
    categoryId: number;
}