import {AppContent} from "../lib/interfaces.ts";

class AppService {

    // getPageObject(): AppContent {
    //     return {
    //         title: <h1>Corso React</h1>,
    //         subTitle: 'con Typescript',
    //         mainContent: 'Lezioni introduttive',
    //         publishDate: 2024
    //     }
    // }

    getPageObject(): AppContent {
        return {
            title: 'The Black Goose Bistro News',
            menuEntries: ['Home', ' Menu', 'News', 'Contact'],
            footer:
                <>
                    <div>
                        <p>Location:</p>
                        <p>Baker's Corner, Seekonk, MA</p>
                    </div>
                    <div>
                        <p>Hours:</p>
                        <p>Tuesday to Saturday, 11am to 11pm</p>
                    </div>
                </>
        }
    }
}

export const appService = new AppService();