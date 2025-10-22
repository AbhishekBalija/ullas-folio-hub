import { Card } from "@/components/ui/card";
import { GraduationCap, MapPin } from "lucide-react";

interface AboutProps {
  data: {
    college: string;
    department: string;
    location: string;
  };
}

const About = ({ data }: AboutProps) => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-8 hover:shadow-lg transition-all border-border bg-card">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-accent/10">
                <GraduationCap className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Education</h3>
                <p className="text-muted-foreground">{data.department}</p>
                <p className="text-sm text-muted-foreground mt-1">{data.college}</p>
              </div>
            </div>
          </Card>

          <Card className="p-8 hover:shadow-lg transition-all border-border bg-card">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-accent/10">
                <MapPin className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Location</h3>
                <p className="text-muted-foreground">{data.location}</p>
                <p className="text-sm text-muted-foreground mt-1">Available for opportunities</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
