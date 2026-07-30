import { FC } from "react";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card.tsx";
import { Badge } from "@/components/ui/badge.tsx";
import { SectionTitle } from "@/components/SectionTitle.tsx";

const education = [
    {
        degree: "Bachelor of Science in Computer Science (BSCS)",
        institute: "PMAS-Arid Agriculture University Rawalpindi",
        location: "Rawalpindi, Pakistan",
        period: "March 2017 – February 2021",
        grade: "CGPA: 3.22 / 4.00",
    },
];

export const Education: FC = () => {
    return (
        <section id="education" className="mb-12">
            <SectionTitle title="Education" />
            <div className="space-y-6">
                {education.map((edu, index) => (
                    <Card
                        key={index}
                        className="hover:shadow-lg transition-shadow duration-300 border border-secondary/20"
                    >
                        <CardHeader className="pb-2">
                            <div className="flex items-start justify-between gap-4 flex-wrap">
                                <div>
                                    <CardTitle className="text-lg">
                                        {edu.degree}
                                    </CardTitle>
                                    <p className="text-primary font-semibold text-sm mt-0.5">
                                        {edu.institute}
                                    </p>
                                </div>
                                <div className="text-right flex-shrink-0">
                                    <Badge
                                        variant="outline"
                                        className="text-xs mb-1"
                                    >
                                        {edu.period}
                                    </Badge>
                                    <p className="text-xs text-muted-foreground">
                                        {edu.location}
                                    </p>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="pt-2">
                            <Badge variant="secondary" className="text-xs">
                                {edu.grade}
                            </Badge>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    );
};

export default Education;
