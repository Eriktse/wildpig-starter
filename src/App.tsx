import { RouterProvider } from "react-router";
import { useStore } from "@nanostores/react";
import { serverDataStore } from "wildpig/store/serverDataStore";

export const App = ({router, serverData}: {router: any, serverData?: any}) => {
    serverDataStore.set(serverData);
    const serverDataState = useStore(serverDataStore);
    
    return <RouterProvider router={router} />;
}
