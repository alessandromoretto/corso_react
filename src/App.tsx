import './App.css'
import {appService} from "./services/appService.tsx";
import {fetchMenu} from "./services/menuService.tsx";
import {Plate, Section, SubSection} from "./lib/interfaces.ts";

export function App() {
    const pageObj = appService.getPageObject();
    const menuJson = fetchMenu();
    return (
        <>
            <h1>{pageObj.title}</h1>
            <ul>
                {pageObj.appMenuEntries.map(menuEntry => <li key={menuEntry}>{menuEntry}</li>)}
            </ul>
            {menuJson.map(sec =>
                <MenuSection title={sec.title} author={sec.author} publishDate={sec.publishDate} subTitle={sec.subTitle} menuSubSections={sec.menuSubSections}/>
            )}
            <footer className={'mt-4'}>
                {pageObj.footer}
            </footer>
        </>
    )
}

function MenuSection({title, subTitle, author, publishDate, menuSubSections}: Section) {
    return (
        <>
            <h2 className={'mt-2'}>{title}</h2>
            <p>posted by {author}, {publishDate.toDateString()}</p>
            <div>{subTitle}</div>
            {menuSubSections.map(subSection =>
                <MenuSubSection title={subSection.title} plates={subSection.plates} />
            )}
        </>
    )
}

function MenuSubSection({title, plates}: SubSection) {
    return (
        <>
            <h3>{title}</h3>
            {plates.map(menuEntry =>
                <MenuPlate plateTitle={menuEntry.plateTitle} plateDescription={menuEntry.plateDescription} isNew={menuEntry.isNew} price={menuEntry.price} />
            )}
        </>
    )
}

function MenuPlate({plateTitle, plateDescription, price, isNew}: Plate) {
    return (
        <>
            <p>{plateTitle} {isNew && <strong>- new item!</strong>}</p>
            <p className={'ml-2'}>{plateDescription} <span>$ {price}</span></p>
        </>
    )
}