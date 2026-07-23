import { FC } from "react";
import { AppContexts } from "./pages/utils/Contexts.tsx";
import Home from "./pages/home";

export const App: FC = () => {
    return (
        <AppContexts>
            <Home />
        </AppContexts>
    );
};

export default App;
