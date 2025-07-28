import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/The-gaurav-sharma', label: 'GitHub' },
    { icon: Linkedin, href: 'www.linkedin.com/in/gauravsharma12', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Mail, href: 'mailto:gauravwasheree@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="relative">
      {/* Main Footer */}
      <div className="glass border-t border-border">
        <div className="container mx-auto px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* Logo & Tagline */}
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-orbitron font-black text-primary mb-2">
                Gaurav.Tech
              </h3>
              <p className="text-muted-foreground font-medium">
              
              </p>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-8">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                  aria-label={label}
                >
                  <div className="glass-subtle p-4 rounded-full glow-hover group-hover:scale-110 transition-all duration-300">
                    <Icon 
                      size={24} 
                      className="text-muted-foreground group-hover:text-primary transition-colors duration-300" 
                    />
                  </div>
                  
                  {/* Tooltip */}
                  <span className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-card text-card-foreground px-3 py-1 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                    {label}
                  </span>
                </a>
              ))}
            </div>

            {/* Quick Contact */}
            <div className="text-center md:text-right">
              <p className="text-muted-foreground mb-2">Ready to collaborate?</p>
              <a
                href="mailto:gauravwasheree@gmail.com"
                className="btn-ghost inline-flex items-center space-x-2"
              >
                <Mail size={16} />
                <span>Get in Touch</span>
              </a>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent my-8" />

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-muted-foreground">
              <span>© 2024 Gaurav Sharma. Made with</span>
              <Heart size={16} className="text-destructive fill-destructive animate-pulse" />
              <span>and lots of coffee</span>
            </div>

            <div className="flex items-center space-x-6 text-sm">
              <a
                href="/privacy"
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 left-10 w-20 h-20 bg-primary/5 rounded-full animate-float" />
        <div className="absolute bottom-10 right-10 w-16 h-16 bg-accent/10 rounded-full animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-muted/20 rounded-full animate-float" style={{ animationDelay: '4s' }} />
      </div>
    </footer>
  );
};

export default Footer;