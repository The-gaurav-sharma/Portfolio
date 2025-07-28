import { Link } from "react-router-dom";
import { ArrowDown, Code, Sparkles, Zap } from "lucide-react";
import Layout from "../components/Layout";
import heroImage from "../assets/hero-bg.jpg";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Dynamic Background */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Hero background"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-radial" />

          {/* Animated Grid Overlay */}
          <div className="absolute inset-0 opacity-10">
            <div className="w-full h-full bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse" />
          </div>
        </div>

        {/* Enhanced Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-20 w-32 h-32 bg-primary/10 rounded-full animate-float glow-primary" />
          <div
            className="absolute top-1/3 right-20 w-20 h-20 bg-accent/15 rounded-full animate-float"
            style={{ animationDelay: "2s" }}
          />
          <div
            className="absolute bottom-1/3 left-1/3 w-16 h-16 bg-muted/20 rounded-full animate-float"
            style={{ animationDelay: "4s" }}
          />
          <div
            className="absolute top-1/2 right-1/3 w-24 h-24 bg-primary/5 rounded-full animate-float"
            style={{ animationDelay: "6s" }}
          />

          {/* Geometric Shapes */}
          <div
            className="absolute top-40 left-1/2 w-12 h-12 border border-primary/20 rotate-45 animate-float"
            style={{ animationDelay: "1s" }}
          />
          <div
            className="absolute bottom-40 right-1/4 w-8 h-8 border border-accent/30 rotate-12 animate-float"
            style={{ animationDelay: "3s" }}
          />
        </div>

        {/* Enhanced Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto pt-20 sm:pt-8">
          {/* Glowing background for text */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5 rounded-3xl blur-3xl" />
          <br></br>
          <br></br>
          <div className="relative">
            <div className="animate-slide-up">
              <div className="relative inline-block">
                <h1 className="text-hero text-6xl md:text-8xl lg:text-9xl mb-8 tracking-tight relative">
                  <span className="relative z-10">Gaurav</span>
                  <div
                    className="absolute inset-0 text-hero text-6xl md:text-8xl lg:text-9xl text-primary/20 animate-pulse"
                    style={{ animationDelay: "0.5s" }}
                  >
                    Gaurav
                  </div>
                </h1>
                <h1 className="text-hero text-6xl md:text-8xl lg:text-9xl mb-8 tracking-tight">
                  <span className="text-gradient relative">
                    Sharma
                    <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 blur-xl rounded-lg" />
                  </span>
                </h1>
              </div>
            </div>

            <div
              className="animate-slide-up space-y-6"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="glass-subtle inline-block px-8 py-4 rounded-full">
                <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground font-light tracking-wide">
                  Full-Stack Developer & C++ Programmer
                </p>
              </div>
            </div>

            <br></br>
            <br></br>

            <div
              className="animate-slide-up mb-12"
              style={{ animationDelay: "0.4s" }}
            >
              <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Full-Stack Developer and skilled C++ Programmer with
                a passion for building high-performance web and software
                solutions. Transforming ideas into seamless digital experiences
                from concept to launch.
              </p>
            </div>

            <div
              className="animate-slide-up flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
              style={{ animationDelay: "0.6s" }}
            >
              <Link to="/projects" className="btn-primary group">
                <Sparkles size={20} className="mr-3 group-hover:animate-spin" />
                View My Work
              </Link>

              <Link to="/about" className="btn-ghost group">
                <Code
                  size={20}
                  className="mr-3 group-hover:scale-110 transition-transform duration-300 "
                />
                More About Me
              </Link>
            </div>

            {/* Tech Stack Preview */}
            <div
              className="animate-slide-up"
              style={{ animationDelay: "0.8s" }}
            >
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                {["React", "Next.js", "Node.js", "AWS", "PostgreSQL"].map(
                  (tech, index) => (
                    <div
                      key={tech}
                      className="glass-subtle px-4 py-2 rounded-full text-sm font-medium glow-hover"
                      style={{ animationDelay: `${0.8 + index * 0.1}s` }}
                    >
                      {tech}
                    </div>
                  )
                )}
              </div>
            </div>
          </div>

          {/* Enhanced Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="flex flex-col items-center space-y-2 animate-bounce">
              <span className="text-xs text-muted-foreground font-medium tracking-wider">
                SCROLL
              </span>
              <ArrowDown size={24} className="text-muted-foreground" />
              <div className="w-px h-8 bg-gradient-to-b from-muted-foreground to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Highlights */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="scroll-reveal text-center mb-20">
            <div className="relative inline-block">
              <h2 className="text-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 relative">
                What do I Do?
                <div className="absolute inset-0 text-display text-4xl md:text-5xl lg:text-6xl text-primary/10 blur-sm">
                What do I Do?
                </div>
              </h2>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Transforming ideas into powerful digital solutions that drive
              results 

                <br></br>
              or do I say
              <br>
              </br>
         Software Developer hu !
            </p>

            {/* Decorative Line */}
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-8" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Code,
                title: "Full-Stack Development",
                description:
                  "End-to-end web applications using modern frameworks and cloud technologies",
                color: "from-blue-500/20 to-cyan-500/20",
              },
              {
                icon: Sparkles,
                title: "UI/UX Design",
                description:
                  "User-centered design that combines aesthetics with exceptional functionality",
                color: "from-purple-500/20 to-pink-500/20",
              },
              {
                icon: Zap,
                title: "Performance Optimization",
                description:
                  "Lightning-fast applications optimized for speed, scalability, and user experience",
                color: "from-orange-500/20 to-red-500/20",
              },
            ].map((feature, index) => (
              <div
                key={feature.title}
                className="scroll-reveal glass p-8 rounded-2xl glow-hover text-center group relative overflow-hidden"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Background Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                <div className="relative z-10">
                  <div className="mb-6">
                    <div className="inline-flex items-center justify-center w-20 h-20 glass-subtle rounded-full mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                      <feature.icon
                        size={36}
                        className="text-primary group-hover:text-accent transition-colors duration-300"
                      />
                    </div>
                    <h3 className="text-2xl font-semibold text-primary mb-4 group-hover:text-accent transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">
                      {feature.description}
                    </p>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-8 h-8 border border-primary/20 rotate-45 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-4 left-4 w-6 h-6 bg-accent/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Background Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 left-10 w-24 h-24 bg-primary/5 rounded-full animate-float" />
          <div
            className="absolute bottom-1/4 right-10 w-20 h-20 bg-accent/10 rounded-full animate-float"
            style={{ animationDelay: "3s" }}
          />
          <div
            className="absolute top-1/2 left-1/2 w-16 h-16 border border-primary/10 rotate-45 animate-float"
            style={{ animationDelay: "5s" }}
          />

          {/* Animated Lines */}
          <div className="absolute top-20 left-1/4 w-32 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent animate-pulse" />
          <div
            className="absolute bottom-20 right-1/4 w-24 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent animate-pulse"
            style={{ animationDelay: "2s" }}
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
        </div>

        <div className="container mx-auto px-6 lg:px-8 text-center relative z-10">
          <div className="scroll-reveal max-w-5xl mx-auto">
            <div className="glass-subtle p-16 rounded-3xl relative overflow-hidden">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />

              <div className="relative z-10">
                <h2 className="text-display text-4xl md:text-5xl font-bold mb-8">
                  Ready to Build Something
                  <br />
                  <span className="text-gradient relative">
                    Extra -
                    ordinary?
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
                  </span>
                </h2>
                <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
                  Let's collaborate to bring your vision to life with
                  cutting-edge technology and innovative design.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                  <Link
                    to="/about"
                    className="btn-primary text-lg px-12 py-6 group"
                  >
                    <span className="relative z-10">START A PROJECT</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-full" />
                  </Link>

                  <Link to="/projects" className="btn-ghost text-lg px-12 py-6">
                    VIEW PORTFOLIO
                  </Link>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-8 left-8 w-12 h-12 border border-primary/20 rounded-full animate-pulse" />
              <div
                className="absolute bottom-8 right-8 w-8 h-8 bg-accent/20 rotate-45 animate-pulse"
                style={{ animationDelay: "1s" }}
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
