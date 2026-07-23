import { createContext, ReactNode, useContext, useEffect } from "react";
import App from "@/types/types";

type AppProviderProps = {
    children: ReactNode;
};

type AppProviderState = {
    profile: App.Profile.Profile;
};

const initialState: AppProviderState = {
    profile: {} as App.Profile.Profile,
};

const AppProviderContext = createContext<AppProviderState>(initialState);

export function AppProvider({ children, ...props }: AppProviderProps) {
    const value: AppProviderState = {
        profile: {
            name: "Muhammad Arslan Anwer",
            email: "arslan.anwer778@gmail.com",
            phone: "+92 302 7993900",
            uk_phone: "+44 7450 637071",
            location: "Lahore, Pakistan",
            role: "Senior Full Stack Software Engineer",
            headline: "JavaScript · TypeScript · Node.js · NestJS · ExpressJS · Vue.js · React  |  IoT · AI · Cloud",
            bio: "Senior Full Stack Engineer with 5+ years building enterprise IoT platforms, AI-integrated SaaS, and government-scale operations systems across UAE, USA, and Europe.",
            social: [
                {
                    name: "GitHub",
                    url: "https://github.com/chshani786",
                    icon: "github",
                },
                {
                    name: "LinkedIn",
                    url: "https://www.linkedin.com/in/arsalnanwer/",
                    icon: "linkedin",
                },
                {
                    name: "Mail",
                    url: "arslan.anwer778@gmail.com",
                    icon: "mail",
                },
                {
                    name: "Twitter",
                    url: "https://x.com/arslananwer778",
                    icon: "twitter",
                },
                {
                    name: "Instagram",
                    url: "https://www.instagram.com/marslananwer/",
                    icon: "instagram",
                },
                {
                    name: "Facebook",
                    url: "https://www.facebook.com/marsalan.anwer",
                    icon: "facebook",
                },
                {
                    name: "WhatsApp",
                    url: "https://wa.me/923027993900",
                    icon: "whatsapp",
                },
                {
                    name: "HackerRank",
                    url: "https://www.hackerrank.com/arslan_anwer778",
                    icon: "hackerrank",
                },
            ],
            langs: ["JavaScript", "TypeScript"],
            frameworks: ["Node.js", "React.js", "Vue.js"],
        },
    };

    useEffect(() => {
        document.title = value.profile.name;
    }, []);

    return (
        <AppProviderContext.Provider {...props} value={value}>
            {children}
        </AppProviderContext.Provider>
    );
}

export const useApp = () => {
    const context = useContext(AppProviderContext);

    if (context === undefined)
        throw new Error("useApp must be used within a AppProvider");

    return context;
};
