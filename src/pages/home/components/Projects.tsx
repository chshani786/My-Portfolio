import { FC, useState, useEffect } from "react";
import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card.tsx";
import { Badge } from "@/components/ui/badge.tsx";
import { SectionTitle } from "@/components/SectionTitle.tsx";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog.tsx";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";

interface Project {
    emoji: string;
    title: string;
    shortDesc: string;
    domain: string;
    dates: string;
    url?: string;
    overview: string;
    features: string[];
    tech: string[];
    images?: string[];
}

const projects: Project[] = [
    {
        emoji: "🏙️",
        title: "DMT-ICMP / ICSP",
        shortDesc:
            "Enterprise fleet & operations management platform for UAE municipal Environmental Service Providers.",
        domain: "Smart City · Fleet Management · UAE Gov",
        dates: "Feb 2025 – Present",
        url: "https://dmt-icsp.fams.ae/#/",
        images: [
            "/projects/dmt/image_1.png",
            "/projects/dmt/image_2.png",
            "/projects/dmt/image_3.png",
            "/projects/dmt/image_4.png",
            "/projects/dmt/image_5.png",
            "/projects/dmt/image_6.png",
            "/projects/dmt/image_7.png",
            "/projects/dmt/image_8.png",
            "/projects/dmt/image_9.png",
            "/projects/dmt/image_10.png",
        ],
        overview:
            "Enterprise platform managing fleet, workforce, maintenance, and compliance for UAE municipal Environmental Service Providers across thousands of vehicles and workers. Serves Dubai Municipality and Abu Dhabi Transport Authorities via 7 client application contexts and 10+ user roles.",
        features: [
            "Real-time GPS tracking with Turf.js geofencing, zone entry detection via ray-casting, GPS route playback, and heatmap visualization",
            "Multi-criteria Preventive Maintenance engine (CAN bus engine hours, odometer distance, calendar period) with automated job card generation and missed-interval catch-up logic",
            "BioTime biometric attendance integration with 5-min sync — resolved critical bug affecting 283 workers & 13,077+ corrupted records, eliminating ~370–400 daily ghost absences",
            "12-module Inventory Management system with 5-stage PO approval workflow (draft → approved → in_procurement → procurement_completed → completed), rack-level batch stock tracking, and ExcelJS bulk exports",
            "5-dimension schedule compliance engine with Water Tanker PTO tracking (Vega ultrasonic sensors, digital input spray events)",
            "13 automated cron jobs · Node.js cluster mode (8 workers) · Docker/Nginx on Oracle Cloud · Bitbucket Pipelines CI/CD",
        ],
        tech: [
            "Node.js",
            "Express.js",
            "Vue 3",
            "TypeScript",
            "MySQL",
            "Leaflet.js",
            "MapboxGL",
            "Turf.js",
            "Docker",
            "Nginx",
            "Oracle Cloud",
            "Firebase FCM",
            "ExcelJS",
            "Puppeteer",
        ],
    },
    {
        emoji: "🗑️",
        title: "MM-UCCP",
        shortDesc:
            "Municipal IoT platform for smart waste management and urban cleaning control in UAE.",
        domain: "Smart Waste · IoT Bin Monitoring · UAE Gov",
        dates: "Feb 2025 – Present",
        url: "https://uccp.mm.gov.qa/",
        images: [
            "/projects/mm/image_1.jpg",
            "/projects/mm/image_2.jpg",
            "/projects/mm/image_3.jpg",
            "/projects/mm/image_4.jpg",
            "/projects/mm/image_5.jpg",
            "/projects/mm/image_6.jpg",
            "/projects/mm/image_7.jpg",
            "/projects/mm/image_8.jpg",
            "/projects/mm/image_9.jpg",
            "/projects/mm/image_10.jpg",
        ],
        overview:
            "Municipal IoT platform connecting smart bins (fill-level, RFID, temperature sensors), sewage tanker fleets, and field operators under a unified real-time control system for UAE government waste authorities.",
        features: [
            "Smart bin IoT monitoring: fill-level sensors, RFID, temperature — real-time dashboard and automated threshold alerts",
            "Full tanker order lifecycle: request → dispatch → collection → discharge → completion with status tracking",
            "Simulated annealing route optimization algorithm for efficient tanker dispatch routing",
            "Multi-type alarm management with escalation workflows and FCM push notifications",
            "On-demand e-services dispatch with customer-facing portal",
            "10+ report types across 4 app roles: admin, operator, driver, and customer",
        ],
        tech: [
            "Node.js",
            "Express.js",
            "Vue 3",
            "TypeScript",
            "MySQL",
            "Leaflet.js",
            "MapLibre-GL",
            "MQTT",
            "Firebase FCM",
            "Docker",
        ],
    },
    {
        emoji: "📡",
        title: "SIMI Connect & Smart",
        shortDesc:
            "Multi-platform SaaS for digital out-of-home advertising and smart building IoT automation.",
        domain: "IoT · Digital Signage (DOOH) · SaaS",
        dates: "Feb 2022 – Jun 2023",
        url: "https://simiconnect.com/",
        images: [
            "/projects/simi/image_1.jpg",
            "/projects/simi/image_2.png",
            "/projects/simi/image_3.jpg",
            "/projects/simi/image_4.jpg",
            "/projects/simi/image_5.jpg",
            "/projects/simi/image_6.jpg",
            "/projects/simi/image_7.jpg",
            "/projects/simi/image_8.jpg",
            "/projects/simi/image_9.jpg",
        ],
        overview:
            "Multi-platform SaaS ecosystem for digital out-of-home advertising and smart building IoT automation. Comprises web portals, Android apps, and edge hardware (NestJS on Raspberry Pi). Achieved 20% increase in user engagement.",
        features: [
            "Stripe-billed group subscriptions (5 tiers, auto-renewal, grace-period) with MAC-based digital signage device registry",
            "Geo-targeted advertising engine: location/radius/budget/time-slot device discovery and banner campaign management",
            "NestJS IoT edge firmware deployed on Raspberry Pi with Socket.IO cloud bridge for real-time device communication",
            "Full Philips Hue (mDNS auto-discovery), Tuya Cloud API (control, energy monitoring, streaming, IR, locks), Google Nest OAuth integration",
            "MongoDB time-series energy analytics, carbon footprint calculation & electricity bill estimation",
            "40+ database migrations · Auth0 authentication · real-time WebSocket event streaming",
        ],
        tech: [
            "NestJS",
            "Vue.js",
            "PostgreSQL",
            "MongoDB",
            "Redis",
            "Socket.IO",
            "MQTT",
            "Stripe",
            "Auth0",
            "Firebase",
            "Tuya Cloud API",
            "Philips Hue API",
            "Google Nest API",
        ],
    },
    {
        emoji: "🤖",
        title: "SIC — Smart Interview Coach",
        shortDesc:
            "AI-powered SaaS delivering automated multi-dimensional interview performance analysis from 4 concurrent AI sources.",
        domain: "AI SaaS · HR Technology · Interview Prep",
        dates: "Sep 2023 – Jun 2024",
        url: "https://smartinterviewcoach.com/",
        images: [
            "/projects/sic/image_original.jpg",
            "/projects/sic/image_original_1.jpg",
            "/projects/sic/image_original_2.jpg",
            "/projects/sic/image_original_3.jpg",
            "/projects/sic/image_original_4.jpg",
            "/projects/sic/image_original_5.jpg",
        ],
        overview:
            "AI-driven SaaS platform that delivers automated multi-dimensional interview performance analysis by running 4 concurrent AI sources simultaneously — helping candidates improve and giving recruiters objective scoring tools.",
        features: [
            "OpenAI GPT: AI-powered question generation tailored to job roles + automated answer analysis with scoring rubrics",
            "OpenAI Whisper + ffmpeg pipeline: video-to-text transcription for speech pace, clarity, and content evaluation",
            "Hume AI: real-time emotion scoring and sentiment analysis during recorded interview sessions",
            "Computer vision analysis: posture detection and eye contact tracking using video frame processing",
            "3 separate React portals: candidate dashboard, recruiter portal (batch review), and admin panel",
            "Stripe subscription billing with referral/coupon system + OpenAI Assistant API HR analyst chatbot + CSV report exports",
        ],
        tech: [
            "NestJS",
            "React.js 18",
            "TypeScript",
            "MySQL",
            "OpenAI GPT-4",
            "OpenAI Whisper",
            "OpenAI Assistant API",
            "Hume AI",
            "AssemblyAI",
            "Stripe",
            "AWS S3",
            "ffmpeg",
        ],
    },
    {
        emoji: "🖥️",
        title: "UltaHost Panel",
        shortDesc:
            "Full-featured web hosting billing & management SaaS — WHMCS alternative with 4 payment gateways.",
        domain: "SaaS · Web Hosting · FinTech · Billing",
        dates: "2022 – 2024",
        url: "https://ultahost.com/",
        images: [
            "/projects/ultahost/image_original.jpg",
            "/projects/ultahost/image_original_1.jpg",
            "/projects/ultahost/image_original_2.jpg",
            "/projects/ultahost/image_original_3.jpg",
            "/projects/ultahost/image_original_4.jpg",
        ],
        overview:
            "Full-featured hosting management SaaS — a complete WHMCS alternative — with enterprise-grade billing, multi-gateway payments, RBAC security, and i18n support across 12+ languages.",
        features: [
            "4-gateway payment abstraction: Stripe, PayPal, 2Checkout/Verifone, Cryptomus — each with full webhook lifecycle handling",
            "Dual-database architecture: MySQL (TypeORM) for structured data + MongoDB (Mongoose) for audit logs via NestJS interceptor",
            "CASL RBAC + 2FA TOTP + OAuth2 (Google/Facebook/GitHub) + virus-scanning uploads (Cloudmersive + AWS S3)",
            "Invoice lifecycle cron automation, multi-currency auto rate refresh, full i18n (12+ languages), Sentry error tracking",
            "Next.js 14 frontend with Stripe Elements, Redux Toolkit, Bootstrap 5, jsPDF invoice generation across 25+ pages",
            "Bull Queue background jobs · Redis caching · Docker deployment",
        ],
        tech: [
            "NestJS 10",
            "Next.js 14",
            "TypeScript",
            "MySQL",
            "MongoDB",
            "Redis",
            "Bull Queue",
            "Stripe",
            "PayPal",
            "2Checkout",
            "Cryptomus",
            "AWS S3",
            "Docker",
            "CASL",
            "Sentry",
        ],
    },
    {
        emoji: "📚",
        title: "Kean OLT",
        shortDesc:
            "Multi-tenant fire safety LMS with automated OMR paper exam scanning and dual online/offline delivery.",
        domain: "EdTech · Fire Safety · LMS",
        dates: "2022 – 2023",
        overview:
            "Multi-tenant fire safety Learning Management System with both online and offline dual exam delivery modes, automated paper exam scanning via Aspose OMR API, and per-student unique test paper generation for exam integrity.",
        features: [
            "Aspose OMR API integration for automated paper exam scanning and student fire ID card matching",
            "Auto-generated per-student unique test papers to prevent cheating across exam sessions",
            "Online + offline dual exam delivery with consistent grading engine",
            "33.33% pass threshold automated grading with at-risk student flagging and instructor alerts",
            "Bull/Redis async job queues for background OMR processing and certificate generation",
            "AWS S3 storage for exam papers, scanned OMR sheets, and certificates · multi-tenant academy isolation",
        ],
        tech: [
            "NestJS",
            "Next.js",
            "TypeScript",
            "MySQL",
            "Aspose OMR API",
            "Bull/Redis",
            "AWS S3",
            "Firebase",
            "Docker",
        ],
    },
    {
        emoji: "🌿",
        title: "Terstal AI Product Enricher",
        shortDesc:
            "AI-powered product description generator for a Dutch fashion e-commerce retailer using GPT-4o-mini.",
        domain: "AI · E-commerce · Dutch Retail Tech",
        dates: "2023",
        url: "https://www.terstal.nl/",
        images: ["/projects/terstal/images.png"],
        overview:
            "Automated product content generation platform for a Dutch fashion e-commerce retailer — using OpenAI GPT-4o-mini with custom Dutch retail prompt engineering to generate high-quality product descriptions from XML ERP feed data.",
        features: [
            "OpenAI GPT-4o-mini with custom Dutch retail prompt engineering: fabric, fit, category, and brand-voice rules",
            "XML ERP feed ingestion pipeline: parse → enrich → review → publish automated workflow",
            "Socket.IO real-time progress streaming during batch enrichment jobs for live operator feedback",
            "Cron-scheduled automated batch enrichment runs with configurable thresholds",
            "GPT-4o vision integration: product image analysis for enhanced visual descriptions",
            "Vue 3 admin dashboard for content review, manual override, and enrichment history",
        ],
        tech: [
            "NestJS",
            "Vue 3",
            "TypeScript",
            "MySQL",
            "OpenAI GPT-4o-mini",
            "OpenAI Vision",
            "Socket.IO",
            "node-cron",
            "Docker",
        ],
    },
    {
        emoji: "🏈",
        title: "The Platform — NFL/NIL",
        shortDesc:
            "Sports intelligence and NIL deal marketing platform for college football athletes and brand collectives.",
        domain: "Sports Tech · NIL · Marketing Platform",
        dates: "2023 – 2024",
        overview:
            "Sports intelligence and marketing platform for NFL/NIL (Name, Image, Likeness) deal management — connecting college athletes with brand partnerships and collectives for NIL monetization opportunities.",
        features: [
            "NIL marketing offer workflows: brand → collective → athlete deal pipelines with multi-stage approval",
            "Twilio SMS OTP for secure athlete identity verification and onboarding",
            "Firebase Auth with mobile deep-link integration for seamless app-to-web session bridging",
            "College collective and deal tracking with status workflows and notification triggers",
            "NestJS 10 API backend with Nuxt 3 SSR frontend for SEO and performance",
            "Real-time notifications and status updates for deal progression and offer acceptance",
        ],
        tech: [
            "NestJS 10",
            "Nuxt 3",
            "TypeScript",
            "MySQL",
            "Firebase Auth",
            "Twilio SMS",
            "AWS S3",
            "Docker",
            "GitLab CI",
        ],
    },
    {
        emoji: "📊",
        title: "Ready 3.0",
        shortDesc:
            "Project management enhancement platform with TargetProcess bidirectional sync and advanced Gantt charts.",
        domain: "PM Tool · SaaS · Enterprise Integration",
        dates: "2022 – 2023",
        overview:
            "Project management enhancement platform integrating with TargetProcess (Apptio) for bidirectional data sync, advanced Gantt chart visualization, and smart entity management features for enterprise PM teams.",
        features: [
            "Bidirectional TargetProcess (Apptio) data synchronization with conflict resolution and delta-sync logic",
            "dhtmlx Gantt chart integration with custom rendering, drag-drop rescheduling, and dependency lines",
            "FakeEntity merge/unmerge system for managing composite project items across TP entities",
            "Algolia-powered full-text search across all project entities with instant results",
            "Role-based access control with custom permission matrices per project context",
            "Nuxt 2 SSR frontend · Prisma ORM · Redis caching layer",
        ],
        tech: [
            "Node.js",
            "Nuxt 2",
            "TypeScript",
            "PostgreSQL",
            "Prisma",
            "Algolia",
            "Redis",
            "TargetProcess API",
            "dhtmlx Gantt",
        ],
    },
    {
        emoji: "⚡",
        title: "G-Tensor IoT Platform",
        shortDesc:
            "Smart building IoT platform with embedded MQTT broker, device scheduling, and multi-site management.",
        domain: "Smart Building · IoT · Edge Computing",
        dates: "2023 – 2024",
        images: [
            "/projects/g-tensor/image_original.jpg",
            "/projects/g-tensor/image_original_1.jpg",
            "/projects/g-tensor/image_original_2.jpg",
            "/projects/g-tensor/image_original_3.jpg",
        ],
        overview:
            "Smart building IoT platform with a custom embedded MQTT broker for device communication, Redis-backed real-time client registry, multi-site device scheduling automation, and 3-tier role management.",
        features: [
            "Custom embedded MQTT broker (pigeon-mqtt-nest, port 1884) for direct IoT device communication without external broker",
            "Redis-backed client registry tracking all connected devices, their state, and last-seen timestamps",
            "Device scheduling engine with time-based automation rules and recurring schedule support",
            "3-tier role management: super-admin (all sites), site-admin (single site), operator (device control)",
            "Firebase FCM push notifications for device alerts, status changes, and offline device warnings",
            "Multi-site management with isolated device namespaces and per-site dashboards",
        ],
        tech: [
            "NestJS",
            "Vue 3",
            "TypeScript",
            "MySQL",
            "MQTT",
            "Redis",
            "Firebase FCM",
            "Socket.IO",
            "Docker",
        ],
    },
];

/* ── Image Gallery (used inside modal) ── */
const ImageGallery: FC<{ images: string[] }> = ({ images }) => {
    const [idx, setIdx] = useState(0);
    const [lightbox, setLightbox] = useState(false);

    useEffect(() => {
        setIdx(0);
        setLightbox(false);
    }, [images]);

    const prev = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        setIdx((i) => (i - 1 + images.length) % images.length);
    };
    const next = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        setIdx((i) => (i + 1) % images.length);
    };

    /* Keyboard nav when lightbox is open */
    useEffect(() => {
        if (!lightbox) return;
        const handler = (e: KeyboardEvent) => {
            if (e.key === "ArrowLeft") prev();
            else if (e.key === "ArrowRight") next();
            else if (e.key === "Escape") setLightbox(false);
        };
        window.addEventListener("keydown", handler);
        return () => window.removeEventListener("keydown", handler);
    }, [lightbox, images.length]);

    return (
        <>
            {/* ── Gallery strip ── */}
            <div className="relative w-full bg-black/5 dark:bg-white/5 rounded-lg overflow-hidden select-none border border-secondary/20">
                {/* Main image — click to open lightbox */}
                <div
                    className="relative w-full h-56 sm:h-72 flex items-center justify-center bg-secondary/5 cursor-pointer"
                    onClick={() => setLightbox(true)}
                    title="Click to view fullscreen"
                >
                    <img
                        src={images[idx]}
                        alt={`Screenshot ${idx + 1}`}
                        className="w-full h-full object-contain"
                        loading="lazy"
                    />
                    {/* Expand hint */}
                    <span className="absolute top-2 right-2 bg-black/40 text-white text-[9px] font-medium rounded px-1.5 py-0.5 pointer-events-none">
                        ⤢ expand
                    </span>
                    {/* Gradient + counter */}
                    <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
                    <span className="absolute bottom-2 right-3 text-[10px] text-white/80 font-medium pointer-events-none">
                        {idx + 1} / {images.length}
                    </span>
                </div>

                {/* Prev / Next arrows */}
                {images.length > 1 && (
                    <>
                        <button
                            onClick={prev}
                            className="absolute left-2 top-[calc(50%-16px)] -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-1 transition-colors"
                            aria-label="Previous image"
                        >
                            <ChevronLeft className="h-4 w-4" />
                        </button>
                        <button
                            onClick={next}
                            className="absolute right-2 top-[calc(50%-16px)] -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-1 transition-colors"
                            aria-label="Next image"
                        >
                            <ChevronRight className="h-4 w-4" />
                        </button>
                    </>
                )}

                {/* Dot indicators */}
                {images.length > 1 && (
                    <div className="flex justify-center gap-1.5 py-2">
                        {images.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setIdx(i)}
                                className={`h-1.5 rounded-full transition-all ${
                                    i === idx
                                        ? "w-4 bg-primary"
                                        : "w-1.5 bg-secondary/50 hover:bg-secondary"
                                }`}
                                aria-label={`Go to image ${i + 1}`}
                            />
                        ))}
                    </div>
                )}
            </div>

            {/* ── Lightbox Dialog ── */}
            <Dialog open={lightbox} onOpenChange={setLightbox}>
                <DialogContent className="max-w-5xl w-[95vw] p-0 bg-black border-0 overflow-hidden">
                    {/* Header bar */}
                    <div className="flex items-center justify-between px-4 py-2 bg-black/80">
                        <span className="text-white/60 text-sm font-medium">
                            {idx + 1} / {images.length}
                        </span>
                    </div>

                    {/* Image */}
                    <div className="relative flex items-center justify-center bg-black px-12 py-4" style={{ minHeight: "70vh" }}>
                        <img
                            src={images[idx]}
                            alt={`Screenshot ${idx + 1}`}
                            className="max-w-full max-h-[75vh] object-contain rounded"
                        />

                        {/* Prev / Next arrows */}
                        {images.length > 1 && (
                            <>
                                <button
                                    onClick={prev}
                                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/25 text-white rounded-full p-2 transition-colors"
                                    aria-label="Previous image"
                                >
                                    <ChevronLeft className="h-6 w-6" />
                                </button>
                                <button
                                    onClick={next}
                                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/25 text-white rounded-full p-2 transition-colors"
                                    aria-label="Next image"
                                >
                                    <ChevronRight className="h-6 w-6" />
                                </button>
                            </>
                        )}
                    </div>

                    {/* Dot indicators */}
                    {images.length > 1 && (
                        <div className="flex justify-center gap-2 py-3 bg-black/80">
                            {images.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setIdx(i)}
                                    className={`h-1.5 rounded-full transition-all ${
                                        i === idx
                                            ? "w-5 bg-white"
                                            : "w-1.5 bg-white/30 hover:bg-white/60"
                                    }`}
                                    aria-label={`Go to image ${i + 1}`}
                                />
                            ))}
                        </div>
                    )}
                </DialogContent>
            </Dialog>
        </>
    );
};

export const Projects: FC = () => {
    const [selected, setSelected] = useState<Project | null>(null);

    return (
        <section id="projects" className="mb-12">
            <SectionTitle title="Featured Projects" />
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project, index) => (
                    <Card
                        key={index}
                        className="overflow-hidden group hover:shadow-lg transition-all duration-300 border border-secondary/20 cursor-pointer flex flex-col hover:border-primary/40"
                        onClick={() => setSelected(project)}
                    >
                        {/* Thumbnail */}
                        {project.images && project.images.length > 0 ? (
                            <div className="h-40 w-full overflow-hidden bg-secondary/10 flex-shrink-0 flex items-center justify-center">
                                <img
                                    src={project.images[0]}
                                    alt={project.title}
                                    className="w-full h-full object-contain"
                                    loading="lazy"
                                />
                            </div>
                        ) : (
                            <div className="h-40 w-full flex-shrink-0 bg-gradient-to-br from-secondary/20 to-primary/10 flex items-center justify-center">
                                <span className="text-5xl opacity-30 select-none">
                                    {project.emoji}
                                </span>
                            </div>
                        )}

                        <CardHeader className="pb-2">
                            <div className="flex items-start gap-2.5">
                                <span className="text-2xl mt-0.5 select-none">
                                    {project.emoji}
                                </span>
                                <div className="min-w-0">
                                    <CardTitle className="group-hover:text-primary transition-colors text-base leading-snug">
                                        {project.title}
                                    </CardTitle>
                                    <p className="text-[11px] text-muted-foreground mt-0.5 leading-tight">
                                        {project.domain}
                                    </p>
                                </div>
                            </div>
                            <CardDescription className="mt-2 text-xs leading-relaxed">
                                {project.shortDesc}
                            </CardDescription>
                        </CardHeader>
                        <CardFooter className="mt-auto flex-col items-start gap-2 pt-0">
                            <div className="flex flex-wrap gap-1.5">
                                {project.tech.slice(0, 4).map((tech, i) => (
                                    <Badge
                                        key={i}
                                        variant="secondary"
                                        className="group-hover:bg-primary/20 transition-colors text-[10px] px-1.5 py-0"
                                    >
                                        {tech}
                                    </Badge>
                                ))}
                                {project.tech.length > 4 && (
                                    <Badge
                                        variant="outline"
                                        className="text-[10px] px-1.5 py-0 text-muted-foreground"
                                    >
                                        +{project.tech.length - 4} more
                                    </Badge>
                                )}
                            </div>
                            <span className="text-xs text-primary font-medium group-hover:underline">
                                View details →
                            </span>
                        </CardFooter>
                    </Card>
                ))}
            </div>

            <Dialog
                open={!!selected}
                onOpenChange={(open) => !open && setSelected(null)}
            >
                <DialogContent className="max-h-[88vh] overflow-y-auto p-0">
                    {selected && (
                        <>
                            {/* Modal header band */}
                            <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/5 px-6 pt-6 pb-4 border-b border-secondary/20">
                                <DialogHeader>
                                    <div className="flex items-center gap-3 pr-6">
                                        <span className="text-4xl select-none">
                                            {selected.emoji}
                                        </span>
                                        <div>
                                            <DialogTitle className="text-xl text-primary leading-tight">
                                                {selected.title}
                                            </DialogTitle>
                                            <p className="text-xs text-muted-foreground mt-0.5">
                                                {selected.domain}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 flex-wrap mt-3">
                                        <Badge
                                            variant="outline"
                                            className="text-xs"
                                        >
                                            {selected.dates}
                                        </Badge>
                                        {selected.url && (
                                            <a
                                                href={selected.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                onClick={(e) =>
                                                    e.stopPropagation()
                                                }
                                            >
                                                <Badge className="text-xs bg-primary text-primary-foreground hover:bg-primary/90 cursor-pointer flex items-center gap-1 transition-colors">
                                                    <ExternalLink className="h-3 w-3" />
                                                    Live Site ↗
                                                </Badge>
                                            </a>
                                        )}
                                    </div>
                                </DialogHeader>
                            </div>

                            {/* Modal body */}
                            <div className="px-6 py-5 space-y-5">
                                {/* Image Gallery */}
                                {selected.images &&
                                    selected.images.length > 0 && (
                                        <ImageGallery
                                            images={selected.images}
                                        />
                                    )}

                                {/* Overview */}
                                <div>
                                    <h4 className="text-sm font-semibold text-primary mb-1.5 flex items-center gap-1.5">
                                        <span>📋</span> Overview
                                    </h4>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        {selected.overview}
                                    </p>
                                </div>

                                {/* Features */}
                                <div>
                                    <h4 className="text-sm font-semibold text-primary mb-2 flex items-center gap-1.5">
                                        <span>🔧</span> Key Features & Modules
                                    </h4>
                                    <ul className="space-y-2">
                                        {selected.features.map(
                                            (feature, i) => (
                                                <li
                                                    key={i}
                                                    className="flex gap-2 text-sm"
                                                >
                                                    <span className="text-primary mt-1 flex-shrink-0 text-xs">
                                                        ▸
                                                    </span>
                                                    <span className="text-muted-foreground leading-relaxed">
                                                        {feature}
                                                    </span>
                                                </li>
                                            ),
                                        )}
                                    </ul>
                                </div>

                                {/* Tech Stack */}
                                <div>
                                    <h4 className="text-sm font-semibold text-primary mb-2 flex items-center gap-1.5">
                                        <span>⚙️</span> Tech Stack
                                    </h4>
                                    <div className="flex flex-wrap gap-1.5">
                                        {selected.tech.map((tech, i) => (
                                            <Badge
                                                key={i}
                                                variant="secondary"
                                                className="text-xs"
                                            >
                                                {tech}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                </DialogContent>
            </Dialog>
        </section>
    );
};

export default Projects;
