import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import {NavigationProvider} from "./routes/navigationProvider.tsx";
import {AuthContextProvider} from "./app/context/authContextProvider.tsx";

export function App() {
    // return (
    //     // <RestaurantHomePage />
    //     // <CustomComponentsHomePage/>
    //     // <TodoHomePage/>
    //     // <ChronometerHomePage/>
    //     // <RegistrationHomePage/>
    // )

    // resetDB();
    return (
        <>
            <AuthContextProvider>
                <NavigationProvider/>
            </AuthContextProvider>
        </>
    )
}