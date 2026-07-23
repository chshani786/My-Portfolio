import { FC, ReactNode } from "react";
import { ThemeProvider } from "@/components/ui/contexts/theme-provider";
import { AppProvider } from "@/pages/utils/AppContext.tsx";

interface Props {
    children: ReactNode;
}

export const AppContexts: FC<Props> = ({ children }) => {
    return (
        <>
            <ThemeProvider>
                <AppProvider>{children}</AppProvider>
            </ThemeProvider>
        </>
    );
};
