import { Welcome } from "@/page/welcome";
import { createBrowserRouter } from "react-router";

export const browserRouter = createBrowserRouter([
    {
        path: "/",
        Component: Welcome
    },
]);