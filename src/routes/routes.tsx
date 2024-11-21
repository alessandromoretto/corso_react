import {LoginPage} from "../app/pages/login.tsx";
import {SignupPage} from "../app/pages/signup.tsx";
import {Layout} from "../app/components/layout.tsx";
import {HomePage} from "../app/pages/home.tsx";
import {AddCoursePage} from "../app/pages/addCourse.tsx";
import {EditCoursePage} from "../app/pages/editCoursePage.tsx";

export const routes = [
    {
        element: <Layout/>,
        children: [
            {
                path: "/",
                children: [
                    {
                        path: "",
                        element: <HomePage/>,
                    },
                    {
                        path: "add",
                        element: <AddCoursePage/>
                    },
                    {
                        path: ":id",
                        element: <EditCoursePage/>
                    },
                ]
            },
            // {
            //     path: "login",
            //     element: <h1>Login</h1>,
            // },
        ]

    },
    {
        path: "/signup",
        element: <SignupPage/>,
    },
    {
        path: "/login",
        element: <LoginPage/>,
    },
    {
        path: "*",
        element: <h1>NON TROVATA</h1>
    }
]