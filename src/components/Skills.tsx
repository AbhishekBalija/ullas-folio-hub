import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface SkillsProps {
  data: {
    skills: Array<{
      name: string;
      level: number;
    }>;
  };
}

const Skills = ({ data }: SkillsProps) => {
  return (
    <section id="skills" className="py-20 px-6 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Skills
        </h2>
        
        <Card className="p-8 border-border bg-card">
          <div className="space-y-6">
            {data.skills.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
                <Progress value={skill.level} className="h-2" />
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Skills;
