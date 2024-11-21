import {Layout} from "../app/components/layout.tsx";
import {TodoHomePage} from "../app/pages/todoHomePage.tsx";
import {AddTodoPage} from "../app/pages/addTodoPage.tsx";
import {EditTodoPage} from "../app/pages/editTodoPage.tsx";
import {Login} from "../app/pages/login.tsx";
import {SignupPage} from "../app/pages/signup.tsx";

export const routes = [
    // {
    //     element: <Layout/>,
    //     children: [
    //         {
    //             path: "/",
    //             children: [
    //                 {
    //                     path: "",
    //                     element: <TodoHomePage/>,
    //                 },
    //                 {
    //                     path: "add",
    //                     element: <AddTodoPage/>
    //                 },
    //                 {
    //                     path: ":id",
    //                     element: <EditTodoPage/>
    //                 },
    //                 {
    //                     path: 'login',
    //                     element: <Login/>,
    //                 },
    //             ]
    //         },
    //         // {
    //         //     path: "login",
    //         //     element: <h1>Login</h1>,
    //         // },
    //     ]
    //
    // },
    {
        path: "/signup",
        element: <SignupPage/>,
    },
    {
        path: "*",
        element: <h1>NON TROVATA</h1>
    }
]