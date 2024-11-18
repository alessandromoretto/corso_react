import './App.css'
import {appService} from "./services/appService.tsx";
import {fetchMenu} from "./services/menuService.tsx";


export function App() {
    const pageObj = appService.getPageObject();
    const menuJson = fetchMenu();
    return (

        // <>
        //   { pageObj.title }
        //   <h3>{pageObj.subTitle}</h3>
        //   <p>{pageObj.mainContent}</p>
        //   <p>data di pubblicazione: {pageObj.publishDate}</p>
        // </>

        <>
            <h1>{pageObj.title}</h1>
            <ul>
                {pageObj.menuEntries.map(menuEntry => <li key={menuEntry}>{menuEntry}</li>)}
            </ul>
            {menuJson.map(el =>
                <>
                    <h2 className={'mt-2'}>{el.title}</h2>
                    <p>posted by {el.author}, {el.publishDate.toDateString()}</p>
                    <div>{el.subTitle}</div>
                    {el.menuSections.map(section =>
                    <>
                        <h3>{section.title}</h3>
                        {section.menuEntries.map(menuEntry =>
                        <>
                            <p>{menuEntry.plateTitle} {menuEntry.isNew ? <strong>- new item!</strong> : <></>}</p>
                            <p className={'ml-2'}>{menuEntry.plateDescription} <span>$ {menuEntry.price}</span></p>
                         </>
                        )}
                    </>)}
                </>
            )}
            <footer className={'mt-4'}>
                {pageObj.footer}
            </footer>
        </>
    )
}
