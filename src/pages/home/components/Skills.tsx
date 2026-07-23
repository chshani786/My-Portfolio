import { FC } from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardTitle,
} from "@/components/ui/card.tsx";
import {
    Bot,
    Braces,
    CreditCard,
    Database,
    Globe,
    Map,
    Monitor,
    Server,
} from "lucide-react";
import { SectionTitle } from "@/components/SectionTitle.tsx";

const skills = [
    {
        icon: <Braces className="h-12 w-12 mb-4" />,
        title: "Languages & Core",
        description:
            "JavaScript, TypeScript · Strong typing, generics, decorators, utility types · OOP, functional patterns, async/await, event-driven design",
    },
    {
        icon: <Server className="h-12 w-12 mb-4" />,
        title: "Backend",
        description:
            "Node.js, NestJS, Express.js · REST APIs, WebSocket Gateways, Microservices · Bull Queue, Node-Cron, Swagger/OpenAPI, Passport.js",
    },
    {
        icon: <Monitor className="h-12 w-12 mb-4" />,
        title: "Frontend",
        description:
            "React.js, Vue.js, Next.js, Nuxt.js · Vite, HTML5, CSS3, Tailwind CSS, Bootstrap 5 · Pinia, Vuex, Redux Toolkit · Vuetify, Ant Design, shadcn/ui",
    },
    {
        icon: <Database className="h-12 w-12 mb-4" />,
        title: "Databases & ORM",
        description:
            "MySQL, PostgreSQL, MongoDB, Redis, Firebase Firestore & RTDB · TypeORM, Prisma, Sequelize, Mongoose · AWS S3, Oracle Cloud Storage",
    },
    {
        icon: <Globe className="h-12 w-12 mb-4" />,
        title: "Cloud, DevOps & Infrastructure",
        description:
            "Docker, Nginx, AWS S3 · Git, GitHub, GitLab, Bitbucket · GitLab CI/CD, Bitbucket Pipelines · PM2 cluster, Node.js cluster mode, Linux server admin",
    },
    {
        icon: <Bot className="h-12 w-12 mb-4" />,
        title: "AI & Machine Learning",
        description:
            "OpenAI GPT-4 / GPT-4o-mini / Whisper / Assistant API · Hume AI (emotion scoring) · AssemblyAI · Computer Vision · Prompt Engineering · AI SaaS architecture",
    },
    {
        icon: <CreditCard className="h-12 w-12 mb-4" />,
        title: "Payments & Auth",
        description:
            "Stripe, PayPal, 2Checkout / Verifone, Cryptomus · Full webhook lifecycle · Firebase Auth, Auth0, OAuth2 (Google / Facebook / GitHub) · JWT, 2FA TOTP",
    },
    {
        icon: <Map className="h-12 w-12 mb-4" />,
        title: "Maps & Geospatial",
        description:
            "Leaflet.js, MapboxGL, MapLibre-GL, Turf.js · Geofencing (point-in-polygon, ray-casting), GPS route playback, Heatmaps, Zone entry detection · Google Maps API",
    },
];

export const Skills: FC = () => {
    return (
        <section id="skills" className="mb-12">
            <SectionTitle title="Technical Skills" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {skills.map((skill, index) => (
                    <Card
                        key={index}
                        className="text-center group hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-secondary/20"
                    >
                        <CardContent className="pt-6 relative">
                            <div className="flex justify-center mb-4 transition-transform duration-300 group-hover:scale-110 text-primary">
                                {skill.icon}
                            </div>
                            <CardTitle className="mb-2 relative z-10 text-base">
                                {skill.title}
                            </CardTitle>
                            <CardDescription className="relative z-10 text-xs leading-relaxed">
                                {skill.description}
                            </CardDescription>
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    );
};

export default Skills;
