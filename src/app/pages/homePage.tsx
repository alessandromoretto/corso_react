import {appService} from "../../services/appService.tsx";
import {fetchMenu} from "../../services/menuService.tsx";
import {MenuSection} from "../components/menuSection.tsx";

export function HomePage() {
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