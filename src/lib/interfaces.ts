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