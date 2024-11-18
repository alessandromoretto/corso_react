// export interface AppContent {
//     title: JSX.Element;
//     subTitle: string;
//     mainContent: string;
//     publishDate: number;
// }

export interface AppContent {
    title: string;
    menuEntries: string[];
    footer: JSX.Element;
}

export interface Section {
    title: string;
    author: string;
    publishDate: Date;
    subTitle: JSX.Element;
    menuSections: MenuSection[];
}

export interface MenuSection {
    title: string;
    menuEntries: MenuEntry[];
}

export interface MenuEntry {
    plateTitle: string;
    plateDescription: string;
    isNew: boolean;
    price: number;
}