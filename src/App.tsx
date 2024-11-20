import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import {ChronometerHomePage} from "./app/pages/chronometerHomePage.tsx";
import {RegistrationHomePage} from "./app/pages/registrationHomePage.tsx";
import {TodoHomePage} from "./app/pages/todoHomePage.tsx";

export function App() {
    return (
        // <RestaurantHomePage />
        // <CustomComponentsHomePage/>
        <TodoHomePage/>
        // <ChronometerHomePage/>
        // <RegistrationHomePage/>
    )
}