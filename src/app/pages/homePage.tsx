import {appService} from "../../services/appService.tsx";
import {MenuSection} from "../components/menuSection.tsx";
import {Footer} from "../components/footer.tsx";
import {useEffect, useState} from "react";
import {Section} from "../../lib/interfaces.ts";
import {fetchMenu, fetchMenuUpdates} from "../../services/menuService.tsx";

export function HomePage() {
    const pageObj = appService.getPageObject();

    const [menuJson, setMenuJson] = useState<Section[]>(fetchMenu());
    const [menuShown, setMenuShown] = useState<Section[]>([]);
    const [showAll, setShowAll] = useState<boolean>(true);
    // const menuJson = fetchMenu();

    const addMenuSection = () => {
        setMenuJson((menuJson) =>
            [
                ...menuJson,
                ...fetchMenuUpdates()
            ]
        )
    }

    const showFiltered = () => {
        setMenuShown(() => {
            const res = [...menuJson];
            res.forEach(sec =>
                sec.menuSubSections.forEach(subSec => {
                    subSec.plates = subSec.plates.filter(plate => showAll || plate.isNew);
                }))
                return res;
            })
    }

    const toggleVisibility = () => {
        setShowAll((showAll) => !showAll);
    }

    useEffect(() => {
        showFiltered();
    },[showAll])

    return (
        <>
            <h1>{pageObj.title}</h1>
            <ul>
                {pageObj.appMenuEntries.map(menuEntry => <li key={menuEntry}>{menuEntry}</li>)}
            </ul>
            <div>
                <button onClick={addMenuSection} style={{background: '#003423'}}>Add menu section</button>
            </div>
            <div>
                <button onClick={toggleVisibility} style={{background: '#003423'}}>Show {showAll ? 'only NEW PLATES' : 'ALL'}</button>
            </div>
            {menuShown?.map(sec =>
                <MenuSection key={Math.random()} title={sec.title} author={sec.author} publishDate={sec.publishDate}
                             subTitle={sec.subTitle} menuSubSections={sec.menuSubSections}/>
            )}
            <Footer>
                {pageObj.footer}
            </Footer>
        </>
    )
}