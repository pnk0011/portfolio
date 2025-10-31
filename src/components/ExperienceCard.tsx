import { Badge } from "./ui/badge";

interface ExperienceCardProps {
  title: string;
  company: string;
  period: string;
  description: string[];
  technologies: string[];
}

export function ExperienceCard({ 
  title, 
  company, 
  period, 
  description, 
  technologies 
}: ExperienceCardProps) {
  return (
    <div className="relative pl-8 pb-8 border-l-2 border-border last:pb-0">
      <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-background"></div>
      <div className="mb-1 text-muted-foreground">{period}</div>
      <h3 className="mb-1">{title}</h3>
      <div className="mb-3 text-muted-foreground">{company}</div>
      <ul className="space-y-2 mb-4 list-disc list-inside">
        {description.map((item, index) => (
          <li key={index} className="text-muted-foreground">{item}</li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <Badge key={tech} variant="outline">{tech}</Badge>
        ))}
      </div>
    </div>
  );
}
