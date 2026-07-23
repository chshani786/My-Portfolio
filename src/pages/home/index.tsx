import { Separator } from "@/components/ui/separator";
import { useTheme } from "@/components/ui/contexts/theme-provider.tsx";
import { useApp } from "@/pages/utils/AppContext.tsx";
import { lazy, Suspense } from "react";
import { Loader2 } from "lucide-react";

const Banner = lazy(() => import("@/pages/home/components/Banner.tsx"));
const AboutMe = lazy(() => import("@/pages/home/components/AboutMe.tsx"));
const Skills = lazy(() => import("@/pages/home/components/Skills.tsx"));
const Projects = lazy(() => import("@/pages/home/components/Projects.tsx"));
const Experience = lazy(() => import("@/pages/home/components/Experience.tsx"));
const Contact = lazy(() => import("@/pages/home/components/Contact.tsx"));
// const Header = lazy(() => import("@/pages/home/components/Header.tsx"));
import { Header } from "@/pages/home/components/Header";
import Tools from "@/pages/home/components/Tools.tsx";

export default function Home() {
    const { theme } = useTheme();
    const { profile } = useApp();
    return (
        <Suspense
            fallback={
                <div className="w-screen h-screen flex items-center justify-center">
                    <Loader2 />
                </div>
            }
        >
            <div
                className={`min-h-screen bg-gradient-to-br from-background to-secondary/10 text-foreground ${theme}`}
            >
                {/* Header */}
                <Header />

                {/* Banner */}
                <Banner />

                <div className="container mx-auto px-20 py-8">
                    {/* About Me */}
                    <AboutMe />

                    {/* Skills */}
                    <Skills />


                    {/* Skills */}
                    <Tools />

                    {/* Projects */}
                    <Projects />

                    {/* Experience */}
                    <Experience />

                    {/* Contact */}
                    <Contact />

                    <footer className="text-center text-sm text-muted-foreground">
                        <Separator className="my-4" />© 2026 {profile.name}.
                        All rights reserved.
                    </footer>
                </div>
            </div>
        </Suspense>
    );
}
