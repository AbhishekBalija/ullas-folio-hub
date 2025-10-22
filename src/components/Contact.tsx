import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Instagram, Linkedin, Mail } from "lucide-react";

interface ContactProps {
  data: {
    email: string;
    social: {
      instagram: string;
      linkedin: string;
    };
  };
}

const Contact = ({ data }: ContactProps) => {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Let's Connect
        </h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          Feel free to reach out for collaborations, opportunities, or just a friendly chat.
        </p>
        
        <Card className="p-8 border-border bg-card inline-block">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-accent text-accent hover:bg-accent hover:text-accent-foreground"
              onClick={() => window.open(`mailto:${data.email}`)}
            >
              <Mail className="w-4 h-4 mr-2" />
              Email Me
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-accent text-accent hover:bg-accent hover:text-accent-foreground"
              onClick={() => window.open(data.social.linkedin, '_blank')}
            >
              <Linkedin className="w-4 h-4 mr-2" />
              LinkedIn
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-accent text-accent hover:bg-accent hover:text-accent-foreground"
              onClick={() => window.open(data.social.instagram, '_blank')}
            >
              <Instagram className="w-4 h-4 mr-2" />
              Instagram
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
