import { FC, ReactNode } from "react";
import { Switch } from "@/components/ui/switch.tsx";
import {
    Moon,
    Sun,
    Terminal,
    Computer,
    Menu,
    LucideIcon,
    Monitor,
} from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet.tsx";
import { Button } from "@/components/ui/button.tsx";
import {
    ThemeProvider,
    useTheme,
} from "@/components/ui/contexts/theme-provider.tsx";
import { useApp } from "@/pages/utils/AppContext.tsx";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const ThemeSwitcher: FC = () => {
    const { setTheme, theme } = useTheme();
    const ThemeIcons: Record<string, LucideIcon> = {
        dark: Moon,
        light: Sun,
        system: Monitor,
    };

    const renderThemeIcon = (): ReactNode => {
        const Icon = ThemeIcons[theme];
        return (
            <Icon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
        );
    };
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                    {renderThemeIcon()}
                    <span className="sr-only">Toggle theme</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("light")}>
                    Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                    Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>
                    System
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export const Header: FC = () => {
    const { theme, setTheme } = useTheme();

    const {
        profile: { name },
    } = useApp();
    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    const navItems = [
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" },
        { name: "Experience", href: "#experience" },
        { name: "Contact", href: "#contact" },
    ];
    return (
        <nav className="bg-background/80 sticky top-0 z-50 border-b border-primary/30 w-full rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center py-4">
                    <span className="text-2xl font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary">
                        &lt;{name} /&gt;
                    </span>
                    <div className="hidden md:flex items-center space-x-6">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="hover:text-primary transition-colors"
                            >
                                {item.name}
                            </a>
                        ))}
                        <ThemeSwitcher />
                    </div>
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button
                                variant="outline"
                                size="icon"
                                className="md:hidden"
                            >
                                <Menu className="h-6 w-6" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent
                            side="right"
                            className="w-[300px] sm:w-[400px]"
                        >
                            <nav className="flex flex-col space-y-4">
                                {navItems.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="hover:text-primary transition-colors"
                                    >
                                        {item.name}
                                    </a>
                                ))}
                                <div className="flex items-center space-x-2">
                                    <ThemeSwitcher />
                                </div>
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </nav>
    );
};
export default Header;
