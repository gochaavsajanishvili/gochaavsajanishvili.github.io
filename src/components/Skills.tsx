import React from 'react';
import {
    Card,
    CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type SkillsProps = {
    className?: string;
};

const skills = ["MongoDB", "ExpressJS", "ReactJS", "NodeJS", "PostgreSQL", "TailwindCSS", "NextJS", "Git", "TypeScript", "Styled Components", "CSS Modules", "Sass", "Less", "Redux", "Zustand", "Recoil", "Context API", "Jest", "React Testing Library", "Cypress", "Next.js", "Remix", "Gatsby", "Material UI", "Ant Design", "Chakra UI", "Recharts", "Chart.js", "D3.js", "React Spring", "Framer Motion", "react-i18next", "FormatJS", "Axios", "Fetch API", "GraphQL", "Formik", "React Hook Form", "Figma", "Photoshop", "Illustrator", "WordPress", "PHP", "jQuery", "PugJS"]

export const Skills: React.FC<SkillsProps> = ({ className }) => {
    return (
        <div className={className}>
            <h2 className="text-xl font-bold mt-4 md:mt-0 mb-4">Skills</h2>
            <Card className="mb-6">
                <CardContent className="pt-6">
                    <div className="flex flex-wrap gap-2">
                        {skills.map((s, i) => (
                            <Badge key={i} variant="secondary">
                                {s}
                            </Badge>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}