import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroProps {
  data: {
    name: string;
    title: string;
    location: string;
    contact: string;
    email: string;
    bio: string;
  };
}

const Hero = ({ data }: HeroProps) => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
        <div className="flex justify-center mb-8">
          <div className="relative w-48 h-48 md:w-56 md:h-56">
            <img 
              src="/profile.png" 
              alt={data.name}
              className="w-full h-full object-cover rounded-full shadow-lg ring-4 ring-accent/20"
            />
          </div>
        </div>
        
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            {data.name}
          </h1>
          <p className="text-2xl md:text-3xl text-muted-foreground font-light">
            {data.title}
          </p>
        </div>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          {data.bio}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-accent" />
            <span>{data.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-accent" />
            <span>{data.contact}</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-accent" />
            <span>{data.email}</span>
          </div>
        </div>

        <div className="pt-4">
          <Button 
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-medium px-8 shadow-lg hover:shadow-xl transition-all"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get In Touch
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
