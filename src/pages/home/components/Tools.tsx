import { FC } from "react";
import {
    Bot,
    GitBranch,
    Monitor,
    Terminal,
    PenTool,
    ClipboardList,
} from "lucide-react";
import {
    Card,
    CardContent,
    CardDescription,
    CardTitle,
} from "@/components/ui/card";
import { SectionTitle } from "@/components/SectionTitle";

const tools = [
    {
        icon: <Bot className="h-12 w-12 mb-4" />,
        title: "AI Development Tools",
        description:
            "Claude Code · Cursor · GitHub Copilot · Warp AI · Windsurf · OpenAI Codex · MCP Servers · LLM-Assisted workflows across architecture, code generation, review, and debugging",
        highlight: false,
    },
    {
        icon: <GitBranch className="h-12 w-12 mb-4" />,
        title: "Version Control & CI/CD",
        description:
            "Git, GitHub, GitLab, Bitbucket · GitLab CI, Bitbucket Pipelines, GitHub Actions · PR reviews, branch strategies, semantic versioning, automated deployments",
        highlight: false,
    },
    {
        icon: <Monitor className="h-12 w-12 mb-4" />,
        title: "IDEs & Code Editors",
        description:
            "VS Code, WebStorm, Cursor IDE, Windsurf IDE · ESLint, Prettier, Husky · Chrome DevTools, Vue DevTools, React DevTools · Warp terminal",
        highlight: false,
    },
    {
        icon: <Terminal className="h-12 w-12 mb-4" />,
        title: "API & Testing Tools",
        description:
            "Postman, Insomnia, Thunder Client · Swagger UI / OpenAPI · WebSocket clients · Contract Testing · REST & GraphQL API debugging",
        highlight: false,
    },
    {
        icon: <PenTool className="h-12 w-12 mb-4" />,
        title: "Design & Prototyping",
        description:
            "Figma · UI wireframing & prototyping · Design system tokens · Developer handoff · Responsive design QA · Component documentation & storybook",
        highlight: false,
    },
    {
        icon: <ClipboardList className="h-12 w-12 mb-4" />,
        title: "Project & Team Workflow",
        description:
            "Atlassian, Jira, Trello · Agile / Scrum · Sprint planning · Slack, Discord, Linear, ClickUp · Technical documentation & RCA writing",
        highlight: false,
    },
];

export const Tools: FC = () => {
    return (
        <section id="tools" className="mb-12">
            <SectionTitle title="Tools & Software" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {tools.map((tool, index) => (
                    <Card
                        key={index}
                        className={`text-center group hover:shadow-lg transition-all duration-300 overflow-hidden ${
                            tool.highlight
                                ? "border-primary/50 bg-gradient-to-br from-primary/5 to-secondary/5 shadow-md"
                                : "border border-secondary/20"
                        }`}
                    >
                        <CardContent className="pt-6 relative">
                            <div
                                className={`flex justify-center mb-4 transition-transform duration-300 group-hover:scale-110 ${
                                    tool.highlight ? "text-primary" : "text-muted-foreground"
                                }`}
                            >
                                {tool.icon}
                            </div>
                            <CardTitle
                                className={`mb-2 relative z-10 text-base ${
                                    tool.highlight ? "text-primary" : ""
                                }`}
                            >
                                {tool.title}
                            </CardTitle>
                            <CardDescription className="relative z-10 text-xs leading-relaxed">
                                {tool.description}
                            </CardDescription>
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    );
};

export default Tools;
