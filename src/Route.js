import React from "react";
import {
    createBrowserRouter
} from "react-router-dom";
import App from "./App";
import Add_library from "./Components/Add_library";
import Add_group from "./Components/Add_group";
import Add_message from "./Components/Add_message";
import Add_contact from "./Components/Add_contact";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: 'add_library',
                element: <Add_library />
            },
            {
                path: 'add_group',
                element: <Add_group />
            },
            {
                path: 'add_message',
                element: <Add_message />
            },
            {
                path: 'add_contact',
                element: <Add_contact />
            }

        ]
    },
]);

export default router