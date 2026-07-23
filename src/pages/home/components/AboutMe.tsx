import { FC } from "react";
import { SectionTitle } from "@/components/SectionTitle.tsx";

const highlights = [
    { label: "Experience", value: "5+ Years" },
    { label: "Enterprise Projects", value: "10+" },
    { label: "Client Markets", value: "PAK · UAE · USA · EU · AUS" },
    { label: "Specialization", value: "Full Stack · AI Solutions" },
];

export const AboutMe: FC = () => {
    return (
        <section id="about" className="mb-12">
            <SectionTitle title="About Me" />

            <div className="space-y-5">
                <p className="text-muted-foreground leading-relaxed">
                    Hi, I'm{" "}
                    <strong className="text-foreground">
                        Muhammad Arslan Anwer
                    </strong>
                    , a{" "}
                    <strong className="text-foreground">
                        Senior Full Stack Software Engineer
                    </strong>{" "}
                    with over{" "}
                    <strong className="text-foreground">
                        5+ years of experience
                    </strong>{" "}
                    building scalable web applications, enterprise platforms,
                    and AI-powered solutions. I help startups, businesses, and
                    enterprises transform ideas into secure, high-performance,
                    and production-ready software.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                    My expertise spans{" "}
                    <strong className="text-foreground">
                        Node.js, NestJS, Express.js, React.js, Vue.js, Nuxt.js,
                        TypeScript, PostgreSQL, MySQL, MongoDB, Firebase,
                        Docker, and cloud integrations
                    </strong>
                    . I enjoy designing scalable architectures, developing REST
                    APIs, optimizing databases, integrating third-party
                    services, and creating intuitive user experiences.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                    Throughout my career, I've contributed to{" "}
                    <strong className="text-foreground">
                        enterprise systems used by government authorities,
                        funded startups, and international organizations
                    </strong>
                    . At{" "}
                    <strong className="text-foreground">
                        FAMS by Falkenherz
                    </strong>
                    , I develop mission-critical platforms used by{" "}
                    <strong className="text-foreground">
                        Dubai Municipality
                    </strong>{" "}
                    to manage fleet operations, workforce management, IoT
                    infrastructure, GIS mapping, reporting, and smart city
                    services.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                    I believe great software is more than clean code—it's about
                    solving business problems. Whether I'm building a product
                    from scratch, modernizing an existing platform, optimizing
                    APIs, or integrating AI capabilities, my focus is always on
                    delivering scalable, maintainable, and business-driven
                    solutions that create measurable value.
                </p>

                <p className="text-sm text-primary font-medium">
                    🚀 Currently available for freelance projects, long-term
                    partnerships, and technical consulting worldwide.
                </p>

                <div className="flex flex-wrap gap-3 pt-2">
                    {highlights.map(({ label, value }) => (
                        <div
                            key={label}
                            className="flex flex-col items-center px-4 py-2.5 rounded-lg border border-secondary/30 bg-secondary/5 hover:border-primary/40 hover:bg-primary/5 transition-colors"
                        >
                            <span className="text-[11px] text-muted-foreground">
                                {label}
                            </span>
                            <span className="text-sm font-semibold text-primary mt-0.5">
                                {value}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
