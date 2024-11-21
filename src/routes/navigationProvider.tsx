import {router} from "./router.ts"
import {RouterProvider} from "react-router-dom";

export function NavigationProvider() {


    return (
        <RouterProvider router={router}></RouterProvider>
    );
}