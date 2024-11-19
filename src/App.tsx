import './App.css'
import {RestaurantHomePage} from "./app/pages/restaurantHomePage.tsx";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import {TodoHomePage} from "./app/pages/todoHomePage.tsx";

export function App() {
    return (
        // <RestaurantHomePage />
        // <CustomComponentsHomePage/>
        <TodoHomePage/>
    )
}