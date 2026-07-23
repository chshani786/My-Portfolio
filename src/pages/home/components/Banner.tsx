import { FC } from "react";
import React from "react";
import {
    Code2,
    Github,
    Instagram,
    Linkedin,
    Mail,
    Twitter,
    Facebook,
    MessageCirclePlus,
    MapPin,
    Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button.tsx";
import { useApp } from "@/pages/utils/AppContext.tsx";
import { HackerRankIcon } from "@/components/HackerRankIcon.tsx";
import { useVisitorCount, formatCount } from "@/hooks/useVisitorCount.ts";

export const Banner: FC = () => {
    const { profile: { name, role, headline, langs, frameworks, social, location } } = useApp();
    const visitorCount = useVisitorCount();
    const icons: Record<string, React.ElementType> = {
        github: Github,
        linkedin: Linkedin,
        mail: Mail,
        twitter: Twitter,
        instagram: Instagram,
        facebook: Facebook,
        whatsapp: MessageCirclePlus,
        hackerrank: HackerRankIcon,
    };

    return (
        <div className="bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5 text-foreground px-4 md:px-16">
            <div className="container mx-auto px-4 py-16 md:py-20">
                <div className="flex flex-col md:flex-row items-center justify-between gap-10">
                    {/* ── Left: text content ── */}
                    <div className="md:w-1/2 flex flex-col items-start">
                        {/*<h2 className="text-2xl font-mono mb-2 animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-primary w-fit">*/}
                        {/*    AVAILABLE FOR FREELANCE & CONSULTING*/}
                        {/*</h2>*/}
                        <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                            <Sparkles className="mr-2 h-4 w-4" />
                            Available for Freelance & Consulting
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                            I'm {name}
                        </h1>
                        <p className="text-lg md:text-xl mb-1 font-semibold text-foreground/90">
                            {role}
                        </p>
                        <p className="text-sm md:text-base text-primary/80 font-mono mb-2 leading-relaxed">
                            {headline}
                        </p>
                        <p className="flex items-center gap-1.5 text-sm text-muted-foreground mb-5">
                            <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                            {location}
                        </p>

                        {/* Social icons */}
                        <div className="flex space-x-3 mb-6">
                            {social.map(({ icon, url }) => {
                                const Icon = icons[icon];
                                if (!Icon) return null;
                                return (
                                    <a
                                        key={icon}
                                        href={url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-muted-foreground hover:text-primary hover:scale-125 transition-all duration-200"
                                    >
                                        <Icon className="h-5 w-5" />
                                    </a>
                                );
                            })}
                        </div>

                        {/* CTA buttons */}
                        <div className="flex gap-3 flex-wrap">
                            <a href={"#projects"}>
                                <Button>
                                    View My Projects{" "}
                                    <Code2 className="ml-2 h-4 w-4" />
                                </Button>
                            </a>
                            <a href={"#contact"}>
                                <Button
                                    variant="outline"
                                    className="border-primary/50 hover:border-primary hover:bg-primary/10 transition-all"
                                >
                                    Get In Touch{" "}
                                    <Code2 className="ml-2 h-4 w-4" />
                                </Button>
                            </a>
                        </div>
                    </div>

                    {/* ── Right: profile photo ── */}
                    <div className="md:w-1/2 flex flex-col items-center gap-6 animate-float">
                        {/* Photo frame */}
                        <div className="relative">
                            {/* Outer glow ring */}
                            <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-primary via-secondary to-primary opacity-60 blur-sm" />
                            {/* Gradient border ring */}
                            <div className="relative rounded-full p-[3px] bg-gradient-to-br from-primary to-secondary shadow-2xl">
                                <div className="rounded-full overflow-hidden w-60 h-60 md:w-72 md:h-72 lg:w-80 lg:h-80 bg-background">
                                    <img
                                        src="/profile.png"
                                        alt={name}
                                        className="w-full h-full object-cover object-top"
                                    />
                                </div>
                            </div>

                            {/* Floating badge — experience */}
                            <div className="absolute -bottom-3 -left-4 bg-background border border-secondary/30 rounded-xl px-3 py-2 shadow-lg flex items-center gap-2">
                                <span className="text-xl">🏆</span>
                                <div className="leading-tight">
                                    <p className="text-[10px] text-muted-foreground">
                                        Experience
                                    </p>
                                    <p className="text-xs font-bold text-primary">
                                        5+ Years
                                    </p>
                                </div>
                            </div>

                            {/* Floating badge — projects */}
                            <div className="absolute -top-3 -right-4 bg-background border border-secondary/30 rounded-xl px-3 py-2 shadow-lg flex items-center gap-2">
                                <span className="text-xl">🚀</span>
                                <div className="leading-tight">
                                    <p className="text-[10px] text-muted-foreground">
                                        Projects
                                    </p>
                                    <p className="text-xs font-bold text-primary">
                                        10+ Enterprise
                                    </p>
                                </div>
                            </div>

                            {/* Floating badge — live visitor count */}
                            {visitorCount !== null && (
                                <div className="absolute -bottom-3 -right-4 bg-background border border-secondary/30 rounded-xl px-3 py-2 shadow-lg flex items-center gap-2">
                                    <span className="text-xl">👁️</span>
                                    <div className="leading-tight">
                                        <p className="text-[10px] text-muted-foreground">
                                            Visitors
                                        </p>
                                        <p className="text-xs font-bold text-primary">
                                            {formatCount(visitorCount)}
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Code snippet — compact, below the photo */}
                        <div className="w-full max-w-sm bg-gradient-to-r from-primary to-secondary p-[2px] rounded-lg shadow-lg">
                            <div className="bg-background rounded-lg px-4 py-3 overflow-hidden">
                                <pre
                                    className="text-primary"
                                    style={{
                                        fontSize: "11px",
                                        lineHeight: "1.6",
                                    }}
                                >
                                    <code>
                                        {`const arslan = {
  role:   "${role}",
  stack:  [${[...langs.slice(0, 2), ...frameworks.slice(0, 1)].map((el) => `"${el}"`).join(", ")}],
  status: "Open to opportunities 🟢",
};`}
                                    </code>
                                </pre>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
