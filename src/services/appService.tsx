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
            appMenuEntries: ['Home', ' Menu', 'News', 'Contact'],
            footer:
                <>
                    <div>
                        <p><strong>Location:</strong></p>
                        <p>Baker's Corner, Seekonk, MA</p>
                    </div>
                    <div>
                        <p><strong>Hours:</strong></p>
                        <p>Tuesday to Saturday, 11am to 11pm</p>
                    </div>
                </>
        }
    }
}

export const appService = new AppService();