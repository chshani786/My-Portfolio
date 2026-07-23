import { FC } from "react";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card.tsx";
import { Badge } from "@/components/ui/badge.tsx";
import { SectionTitle } from "@/components/SectionTitle.tsx";

const experiences = [
    {
        company: "FAMS by Falkenherz (Voltro)",
        location: "Lahore, Pakistan",
        role: "Senior Software Engineer – Full Stack",
        period: "February 2025 – Present",
        context:
            "FAMS delivers enterprise smart operations platforms for UAE government authorities including Dubai Municipality and Abu Dhabi Transport Authorities.",
        bullets: [
            "Engineered multi-criteria Preventive Maintenance engine (CAN bus engine hours, odometer distance, calendar period) with automated job card generation and missed-interval catch-up logic for a large-scale UAE municipal fleet",
            "Led forensic investigation resolving critical BioTime biometric attendance bug affecting 283 workers, 13,077+ records, eliminating ~370–400 daily ghost absences — authored full RCA and SQL remediation scripts",
            "Architected 12-module Inventory Management system with 5-stage PO approval workflow, rack-level batch stock tracking, and ExcelJS bulk exports — replacing entirely manual procurement processes",
            "Built real-time Leaflet.js geospatial dashboards with Turf.js zone geofencing, GPS route playback, zone entry detection via ray-casting, and heatmap visualization",
            "Maintained 13 production cron jobs; deployed on Oracle Cloud with Docker/Nginx, Node.js cluster mode (8 workers), and Bitbucket Pipelines CI/CD",
        ],
        stack: [
            "Node.js",
            "Express.js",
            "Vue 3",
            "TypeScript",
            "MySQL",
            "Leaflet.js",
            "Turf.js",
            "Docker",
            "Oracle Cloud",
            "Firebase FCM",
        ],
    },
    {
        company: "Septem Systems",
        location: "Lahore, Pakistan",
        role: "Software Engineer – Full Stack Developer",
        period: "January 2022 – February 2025",
        context:
            "Septem Systems delivers bespoke software for international clients across the USA, Europe, UAE, and Australia spanning IoT, AI/ML, SaaS, and government tech.",
        bullets: [
            "Delivered 8+ enterprise products end-to-end across IoT, AI/ML, FinTech, EdTech, and sports tech for clients in UAE, USA, Netherlands, and Australia",
            "Architected SIMI Connect & Smart: Stripe subscription billing (5 tiers), geo-targeted advertising, MAC-based device registry, NestJS IoT edge firmware on Raspberry Pi with Philips Hue, Tuya, Google Nest — 20% user engagement increase",
            "Engineered SIC Smart Interview Coach: multi-source AI pipeline (OpenAI GPT, Whisper + ffmpeg, Hume AI, computer vision) delivering automated multi-dimensional interview performance reports with Stripe billing and recruiter portal",
            "Built UltaHost Panel: dual-database (MySQL + MongoDB), 4-gateway payment abstraction (Stripe, PayPal, 2Checkout, Cryptomus + webhooks), CASL RBAC, 2FA TOTP, OAuth2, and virus-scanning upload pipeline",
            "Developed Terstal AI Product Enricher: GPT-4o-mini with Dutch retail prompt engineering, XML ERP feed ingestion, and Socket.IO real-time streaming for automated e-commerce content generation",
            "Designed shared NestJS internal boilerplate (global guards, interceptors, exception filters, role decorators) adopted across 5+ projects",
        ],
        stack: [
            "NestJS 9/10",
            "Node.js",
            "Vue.js 2/3",
            "React.js 18",
            "Next.js 14",
            "Nuxt.js 2/3",
            "TypeScript",
            "MySQL",
            "PostgreSQL",
            "MongoDB",
            "Redis",
            "OpenAI API",
            "Docker",
            "GitLab CI",
        ],
    },
    {
        company: "One Wood Solutions",
        location: "Lahore, Pakistan",
        role: "Associate Software Engineer",
        period: "March 2021 – January 2022",
        context: "",
        bullets: [
            "Developed RESTful backend APIs with Node.js/Express.js; implemented JWT authentication, bcrypt security, MongoDB/MySQL data layers, and third-party API integrations within Agile sprint cycles",
        ],
        stack: [
            "Node.js",
            "Express.js",
            "MongoDB",
            "MySQL",
            "JavaScript",
            "JWT",
            "Git",
        ],
    },
];

export const Experience: FC = () => {
    return (
        <section id="experience" className="mb-12">
            <SectionTitle title="Work Experience" />
            <div className="space-y-6">
                {experiences.map((exp, index) => (
                    <Card
                        key={index}
                        className="hover:shadow-lg transition-shadow duration-300 border border-secondary/20"
                    >
                        <CardHeader className="pb-2">
                            <div className="flex items-start justify-between gap-4 flex-wrap">
                                <div>
                                    <CardTitle className="text-lg">
                                        {exp.company}
                                    </CardTitle>
                                    <p className="text-primary font-semibold text-sm mt-0.5">
                                        {exp.role}
                                    </p>
                                </div>
                                <div className="text-right flex-shrink-0">
                                    <Badge
                                        variant="outline"
                                        className="text-xs mb-1"
                                    >
                                        {exp.period}
                                    </Badge>
                                    <p className="text-xs text-muted-foreground">
                                        {exp.location}
                                    </p>
                                </div>
                            </div>
                            {exp.context && (
                                <p className="text-xs text-muted-foreground italic mt-1 leading-relaxed">
                                    {exp.context}
                                </p>
                            )}
                        </CardHeader>
                        <CardContent className="pt-2">
                            <ul className="space-y-2 mb-4">
                                {exp.bullets.map((bullet, i) => (
                                    <li
                                        key={i}
                                        className="flex gap-2 text-sm text-muted-foreground"
                                    >
                                        <span className="text-primary mt-0.5 flex-shrink-0 text-xs">
                                            ▸
                                        </span>
                                        <span className="leading-relaxed">
                                            {bullet}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                            <div className="flex flex-wrap gap-1.5">
                                {exp.stack.map((tech, i) => (
                                    <Badge
                                        key={i}
                                        variant="secondary"
                                        className="text-xs"
                                    >
                                        {tech}
                                    </Badge>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    );
};

export default Experience;
