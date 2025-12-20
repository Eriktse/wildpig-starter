import { NotFound } from "@/page/404";
import { Welcome } from "@/page/welcome";
import { WildPigRouteObject } from "wildpig/router/types";

export default [
    {
        path: "/",
        Component: Welcome,
        serverDataApi: "/api/server-data/welcome"
    },
    {
        path: "*",
        Component: NotFound,
        serverDataApi: "/api/server-data/404"
    }
] as WildPigRouteObject[];