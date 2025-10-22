import { useEffect, useState } from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

interface PortfolioData {
  name: string;
  title: string;
  college: string;
  department: string;
  location: string;
  contact: string;
  email: string;
  bio: string;
  skills: Array<{
    name: string;
    level: number;
  }>;
  social: {
    instagram: string;
    linkedin: string;
  };
}

const Index = () => {
  const [data, setData] = useState<PortfolioData | null>(null);

  useEffect(() => {
    fetch('/data.json')
      .then(response => response.json())
      .then(jsonData => setData(jsonData))
      .catch(error => console.error('Error loading data:', error));
  }, []);

  if (!data) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-accent border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading portfolio...</p>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      <Hero data={data} />
      <About data={data} />
      <Skills data={data} />
      <Contact data={data} />
      
      <footer className="py-8 text-center text-sm text-muted-foreground border-t border-border">
        <p>&copy; {new Date().getFullYear()} {data.name}. All rights reserved.</p>
      </footer>
    </main>
  );
};

export default Index;
