import { useState } from "react";
import { ExperienceCard } from "./components/ExperienceCard";
import { ThemeToggle } from "./components/ThemeToggle";
import { Button } from "./components/ui/button";
import { Badge } from "./components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";
import { Card } from "./components/ui/card";
import {
  Github,
  Linkedin,
  Mail,
  Code2,
  Globe,
  BookOpen,
  Award,
  Download,
  Zap,
} from "lucide-react";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");

  const skills = {
    frontend: [
      "React",
      "Next.js",
      "Angular",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "SCSS",
      "Redux",
    ],
    backend: ["Node.js", "Express.js", "RESTful APIs", "GraphQL", "PostgreSQL"],
    tools: [
      "Git",
      "Docker",
      "GCP",
      "AWS",
      "Webpack",
      "Vite",
      "npm/yarn",
      "CI/CD",
      "Jest",
      "Figma",
      "Adobe XD",
      "Chrome DevTools",
      "Agile/Scrum",
    ],
    others: [
      "Micofrontends",
      "Responsive Design",
      "Web Accessibility",
      "Performance Optimization",
      "SEO",
      "PWA",
      "Microservices",
      "System Design",
      "Code Reviews",
      "Technical Documentation",
      "Team Leadership",
      "Problem Solving",
      "OAuth",
      "JWT",
      "Redis",
      "Tailwind CSS",
      "Styled Components",
    ],
  };

  const experiences = [
    {
      title: "Principal Consultant | Frontend Lead",
      company: "Genpact India Pvt. Ltd.",
      period: "Aug 2024 - Present, Noida",
      description: [
        "Responsible for separating feature requirements, estimating front-end tasks, estimation & assigning them to team members.",
        "Led the incremental migration of a React web application from JavaScript to TypeScript, enhancing code reliability, type safety, and reducing runtime errors.",
        "Developed a Human-in-the-Loop (HITL) web application to streamline multi-stage document review and quality-control workflows.",
        "Led the team and defined the overall application architecture to ensure scalability, maintainability, and performance.",
        "Owned release processes for the timely delivery of high-quality products to production.",
      ],
      technologies: [
        "React",
        "Next",
        "TypeScript",
        "TailwindCSS",
        "React Testing Library",
        "Jest",
        "REST APIs",
        "NodeJs",
        "Express",
        "PostgreSQL",
        "Redis",
        "GCP",
        "Docker",
        "Vite",
      ],
    },
    {
      title: "Senior Platform Engineer",
      company: "Milestone Technologies, Inc.",
      period: "Mar 2023 – Jun 2024, Hyderabad",
      description: [
        "Engaged in team code reviews, identifying and addressing bugs to enhance overall codebase quality and stability by maintaining minimum 90% UI unit test coverage before build.",
        "Coordinated with PMs to provide a technical perspective and ensure successful implementation of require- ments.",
        "Developed responsive React interfaces for an enhanced and user-friendly customer experience.",
      ],
      technologies: [
        "React",
        "Angular",
        "Redux",
        "TypeScript",
        "SCSS",
        "React Testing Library",
        "Jest",
        "Webpack",
        "Docker",
      ],
    },
    {
      title: "Senior Software Engineer",
      company: "Innominds Software",
      period: "Feb 2021 – Jan 2023, Pune",
      description: [
        "Crafted responsive user interfaces, coordinating closely with project managers for smooth implementation.",
        "Participated in code reviews and testing, identifying and resolving issues to uphold codebase quality.",
        "Worked alongside the backend team to seamlessly integrate APIs, improving app functionality and performance.",
      ],
      technologies: [
        "TypeScript",
        "JavaScript",
        "ReactJS",
        "Redux",
        "GraphQL",
        "Jest",
        "Enzyme",
        "HTML5",
        "CSS3",
        "Styled Components",
        "Git",
      ],
    },
    {
      title: "Software Engineer",
      company: "Darkhorse Digital Pvt. Ltd.",
      period: "Jan 2018 – Jan 2021, Mumbai",
      description: [
        "Built the frontend of the application for client TATA AIG using React.",
        "Collaborated closely with the development team and product managers to ensure smooth delivery of high quality products.",
      ],
      technologies: [
        "JavaScript",
        "ReactJS",
        "Context API",
        "HTML5",
        "CSS3",
        "Jest",
        "Enzyme",
        "Git",
      ],
    },
  ];

  const handleDownload = () => {
    const resumeUrl =
      "https://drive.google.com/file/d/1uv20XZN51sSlp66Fvya9a56_O_ofvmzr/view";
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Pankaj_Singh_Resume.pdf";
    link.click();
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Code2 className="w-6 h-6 text-primary" />
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a href="#home" className="hover:text-primary transition-colors">
                Home
              </a>
              <a href="#about" className="hover:text-primary transition-colors">
                About
              </a>
              <a
                href="#skills"
                className="hover:text-primary transition-colors"
              >
                Skills
              </a>
              <a
                href="#experience"
                className="hover:text-primary transition-colors"
              >
                Experience
              </a>
              <a
                href="#contact"
                className="hover:text-primary transition-colors"
              >
                Contact
              </a>
            </div>
            <div className="flex items-center gap-3">
              <ThemeToggle />
              <Button variant="default" size="sm">
                <a
                  href="https://drive.google.com/file/d/1uv20XZN51sSlp66Fvya9a56_O_ofvmzr/view"
                  target="_blank"
                  download="Pankaj_Singh_Resume.pdf"
                  className="flex items-center gap-2"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Resume
                </a>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
                <Zap className="w-4 h-4" />
                <span> Hi, I'm Pankaj Singh</span>
              </div>
              {/* <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Hi, I'm Pankaj Singh
              </h1> */}
              <h1 className="mb-4">Full Stack Engineer | Frontend Heavy</h1>
              <p className="text-muted-foreground mb-6">
                Building robust web applications with modern technologies. I
                specialize in creating seamless user experiences with React,
                Node.js, and cloud technologies, backed by strong
                problem-solving skills and a deep understanding of scalable
                system design.
              </p>
              <div className="flex gap-4 mb-6">
                <Button size="lg" asChild>
                  <a href="#contact">Get In Touch</a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="#experience">View Experience</a>
                </Button>
              </div>
              <div className="flex gap-4">
                <a
                  href="https://github.com/pnk0011/"
                  target="_blank"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/pankaj-singh-207035146/"
                  target="_blank"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="mailto:pnk.work0011@gmail.com"
                  target="_blank"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img
                  src="https://avatars.githubusercontent.com/u/53445261?s=400&u=b1eafae4a7faa75dcfb89a0de724d80445b36951&v="
                  alt="Workspace"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-lg">
                <div className="flex items-center gap-3">
                  <Award className="w-8 h-8" />
                  <div>
                    <div>7.5 Years</div>
                    <div className="text-primary-foreground/80">Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="mb-4">About Me</h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left side - Text description */}
            <div className="space-y-6">
              <p className="text-foreground leading-relaxed">
                Results oriented Frontend Team Lead with 7.5 years of experience
                in ReactJs development and asynchronous team leadership. Adept
                at building scalable applications, leading cross-functional
                teams, and delivering exceptional solutions. Proven ability to
                merge technical expertise with effective leadership, driving
                project success.
              </p>
              <p className="text-foreground leading-relaxed">
                Throughout my career, I've specialized in JavaScript/TypeScript
                ecosystems, building scalable frontend applications with React,
                Angular, and modern frameworks while developing robust backend
                services with Node.js.
              </p>
              <p className="text-foreground leading-relaxed">
                I'm passionate about creating efficient, maintainable code and
                consistently delivering high-quality solutions that solve
                real-world problems.
              </p>
            </div>

            {/* Right side - Feature cards */}
            <div className="space-y-6">
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Code2 className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-2">Software Development</h3>
                    <p className="text-muted-foreground">
                      Skilled in full-stack development with expertise in React,
                      Angular, Node.js, and cloud services. I build performant,
                      accessible web applications that deliver exceptional user
                      experiences.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Globe className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-2">Technical Leadership</h3>
                    <p className="text-muted-foreground">
                      Experience leading technical teams, architecting
                      solutions, and mentoring junior developers. I excel at
                      translating business requirements into technical
                      implementations.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-2">Continuous Learning</h3>
                    <p className="text-muted-foreground">
                      Dedicated to staying current with emerging technologies
                      and industry best practices. I'm always exploring new
                      tools and approaches to enhance my development skills.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div
          className="container mx-auto max-w-6xl"
          style={{ maxWidth: "55%" }}
        >
          <div className="text-center mb-12">
            <h2 className="mb-4">Skills & Technologies</h2>
            <p className="text-muted-foreground">
              Technologies and tools I work with on a daily basis
            </p>
          </div>

          <Tabs defaultValue="frontend" className="w-full">
            <TabsList className="!grid w-full mx-auto grid-cols-1 sm:!grid-cols-2 md:!grid-cols-4 gap-2 mb-8 max-w-full">
              <TabsTrigger value="frontend" className="w-full text-center">
                Frontend
              </TabsTrigger>
              <TabsTrigger value="concepts" className="w-full text-center">
                Backend
              </TabsTrigger>
              <TabsTrigger value="tools" className="w-full text-center">
                DevOps & Tools
              </TabsTrigger>
              <TabsTrigger value="others" className="w-full text-center">
                Others
              </TabsTrigger>
            </TabsList>

            <TabsContent value="frontend" className="mt-6">
              <div className="flex flex-wrap justify-center gap-3">
                {skills.frontend.map((skill) => (
                  <Badge key={skill} variant="secondary" className="px-4 py-2">
                    {skill}
                  </Badge>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="concepts" className="mt-6">
              <div className="flex flex-wrap justify-center gap-3">
                {skills.backend.map((skill) => (
                  <Badge key={skill} variant="secondary" className="px-4 py-2">
                    {skill}
                  </Badge>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="tools" className="mt-6">
              <div className="flex flex-wrap justify-center gap-3">
                {skills.tools.map((skill) => (
                  <Badge key={skill} variant="secondary" className="px-4 py-2">
                    {skill}
                  </Badge>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="others" className="mt-6">
              <div className="flex flex-wrap justify-center gap-3">
                {skills.others.map((skill) => (
                  <Badge key={skill} variant="secondary" className="px-4 py-2">
                    {skill}
                  </Badge>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="mb-4">Work Experience</h2>
            <p className="text-muted-foreground">My professional journey</p>
          </div>
          <div className="space-y-0">
            {experiences.map((experience, index) => (
              <ExperienceCard key={index} {...experience} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-4xl text-center">
          {/* <h2 className="mb-4">Let's Work Together</h2> */}
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            I'm always interested in hearing about new projects and
            opportunities. Whether you have a question or just want to say hi,
            feel free to reach out!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <a href="mailto:pnk.work0011@gmail.com">
                <Mail className="w-5 h-5 mr-2" />
                Send Email
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a
                href="https://www.linkedin.com/in/pankaj-singh-207035146/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-5 h-5 mr-2" />
                Connect on LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t">
        <div className="container mx-auto max-w-6xl text-center text-muted-foreground">
          <p>© 2025 Pankaj Singh. Built with React & Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
}
