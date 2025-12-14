import { RouterProvider } from "react-router";
import { browserRouter } from "./router";
import { RouterMetaGuard } from "wildpig/router/MetaGuard";

export const App = () => <RouterProvider router={RouterMetaGuard(browserRouter)} />