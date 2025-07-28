import { useState } from "react";
import {
  Mail,
  Download,
  MapPin,
  Calendar,
  Coffee,
  Heart,
  Send,
  CheckCircle,
} from "lucide-react";
import Layout from "../components/Layout";
import profileImage from "../assets/profile.jpg";

const About = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const skills = [
    { name: "JavaScript", level: 90 },
    { name: "React/Next.js", level: 80 },
    { name: "Node.js", level: 75 },
    { name: "PostgreSQL/MongoDB", level: 85 },
    { name: "AWS/Cloud Services", level: 70 },
    { name: "C++/DSA", level: 90 },
  ];

  const experience = [
    
    {
      title: "Web Content Writer",
      company: "HRanker",
      period: "2024 - 2025",
      description:
        "Created SEO-focused blogs on government exams, optimizing content using targeted keywords.",
    },
    {
      title: "Video Editor",
      company: "Freelance",
      period: "2024 - Present",
      description:
        "Developing my skills as a video editor.",
    },
    {
      title: "Full-Stack Developer",
      company: "Freelance",
      period: "2022 - Present",
      description:
        "Creating projects for clients as a Paid Service.",
    }
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });

    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="animate-slide-up">
              <h1 className="text-hero text-5xl md:text-7xl lg:text-8xl font-bold mb-8">
                ABOUT
                <br />
                <span className="text-gradient">ME</span>
              </h1>
            </div>
            <div
              className="animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                Passionate developer and Programmer crafting digital experiences
                that make a difference
              </p>
            </div>
          </div>
        </div>

        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-20 left-20 w-32 h-32 bg-primary/10 rounded-full animate-float" />
          <div
            className="absolute bottom-20 right-20 w-24 h-24 bg-accent/15 rounded-full animate-float"
            style={{ animationDelay: "3s" }}
          />
        </div>
      </section>

      {/* Profile Section */}
      <section className="pb-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Profile Image */}
            <div className="scroll-reveal order-2 lg:order-1">
              <div className="relative max-w-md mx-auto lg:mx-0">
                <div className="aspect-square rounded-full overflow-hidden glass shadow-floating">
                  <img
                    src="/src/assets/gaurav.jpg"
                    alt="Gaurav Sharma"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/10 rounded-full animate-float" />
                <div
                  className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent/15 rounded-full animate-float"
                  style={{ animationDelay: "2s" }}
                />
              </div>
            </div>

            {/* Bio Content */}
            <div className="scroll-reveal order-1 lg:order-2">
              <h2 className="text-display text-4xl md:text-5xl font-bold mb-8">
                Hello, I'm Gaurav
              </h2>

              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed mb-8">
                <p>
                  I'm a passionate full-stack developer with 1 year of hands-on
                  experience building digital solutions that balance innovative
                  technology with seamless user experiences. My journey started
                  with a curiosity for turning ideas into reality through
                  code—now, I focus on building scalable web apps, crafting
                  sleek interfaces, and enhancing performance with tools like
                  Next.js, Node.js, and PostgreSQL.
                </p>

                <p>
                  Beyond coding, I love diving into new tech trends,
                  contributing to open-source projects, and brainstorming fresh
                  ideas over a great cup of coffee. I thrive in collaborative
                  environments, always looking to grow, learn, and deliver
                  meaningful impact to every project I join.
                </p>

                {/* <p>
                  When I'm not coding, you'll find me exploring the latest tech
                  trends, contributing to open-source projects, or enjoying a
                  perfect cup of coffee while brainstorming the next big idea.
                </p> */}
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="glass-subtle p-6 rounded-xl text-center">
                  <div className="text-3xl font-bold text-primary mb-2">
                    5+
                  </div>
                  <div className="text-muted-foreground">
                    Projects Completed
                  </div>
                </div>
                <div className="glass-subtle p-6 rounded-xl text-center">
                  <div className="text-3xl font-bold text-primary mb-2">1+</div>
                  <div className="text-muted-foreground">Years Experience</div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <MapPin size={18} />
                  <span>Jaipur, Rajasthan, India</span>
                </div>
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <Calendar size={18} />
                  <span>Available for projects</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/src/assets/Gaurav-Resume.pdf"
                  download
                  className="btn-primary inline-flex items-center justify-center"
                >
                  <Download size={18} className="mr-3" />
                  Download Resume
                </a>
                <a
                  href="mailto:gauravwasheree@gmail.com"
                  className="btn-ghost inline-flex items-center justify-center"
                >
                  <Mail size={18} className="mr-3" />
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="scroll-reveal text-center mb-16">
            <h2 className="text-display text-4xl md:text-5xl font-bold mb-6">
              Skills & Expertise
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Constantly evolving skillset across the full development spectrum
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="scroll-reveal glass-subtle p-6 rounded-xl"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-semibold text-primary">{skill.name}</h3>
                  <span className="text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="w-full bg-muted/30 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="scroll-reveal text-center mb-16">
            <h2 className="text-display text-4xl md:text-5xl font-bold mb-6">
              Experience
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A journey of growth, learning, and impactful contributions
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {experience.map((exp, index) => (
              <div
                key={index}
                className="scroll-reveal relative pl-8 pb-12 last:pb-0"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline Line */}
                <div className="absolute left-0 top-0 w-px h-full bg-border" />

                {/* Timeline Dot */}
                <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full ring-4 ring-background" />

                <div className="glass-subtle p-6 rounded-xl ml-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-xl font-semibold text-primary">
                      {exp.title}
                    </h3>
                    <span className="text-muted-foreground font-medium">
                      {exp.period}
                    </span>
                  </div>
                  <h4 className="text-lg text-accent font-medium mb-3">
                    {exp.company}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="scroll-reveal text-center mb-16">
            <h2 className="text-display text-4xl md:text-5xl font-bold mb-6">
              Let's Work Together
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Have a project in mind? I'd love to hear about it and discuss how
              we can bring your ideas to life.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="scroll-reveal space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-primary mb-2"
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 glass rounded-xl focus:ring-2 focus:ring-primary/50 focus:outline-none transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-primary mb-2"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 glass rounded-xl focus:ring-2 focus:ring-primary/50 focus:outline-none transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-primary mb-2"
                >
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 glass rounded-xl focus:ring-2 focus:ring-primary/50 focus:outline-none transition-all duration-300"
                  placeholder="Project inquiry"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-primary mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 glass rounded-xl focus:ring-2 focus:ring-primary/50 focus:outline-none transition-all duration-300 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              {/* Success Message */}
              {isSubmitted && (
                <div className="flex items-center space-x-3 p-4 bg-green-500/10 border border-green-500/20 rounded-xl">
                  <CheckCircle size={20} className="text-green-400" />
                  <span className="text-green-400">
                    Message sent successfully! I'll get back to you soon.
                  </span>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary py-4 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center space-x-3">
                    <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                    <span>Sending...</span>
                  </div>
                ) : (
                  <div className="flex items-center justify-center space-x-3">
                    <Send size={18} />
                    <span>Send Message</span>
                  </div>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 right-10 w-24 h-24 bg-primary/5 rounded-full animate-float" />
          <div
            className="absolute bottom-1/4 left-10 w-20 h-20 bg-accent/10 rounded-full animate-float"
            style={{ animationDelay: "4s" }}
          />
        </div>
      </section>

      {/* Fun Facts */}
      <section className="py-20 glass-subtle">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center">
            <div className="scroll-reveal flex items-center justify-center space-x-4 text-muted-foreground mb-8">
              <Coffee size={24} />
              <span className="text-lg">
                Fueled by coffee, driven by passion
              </span>
              <Heart size={24} className="text-destructive fill-destructive" />
            </div>
            <p className="scroll-reveal text-lg text-muted-foreground max-w-2xl mx-auto">
              When I'm not crafting code, you can find me exploring new
              technologies, contributing to open-source projects, or planning my
              next adventure.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
