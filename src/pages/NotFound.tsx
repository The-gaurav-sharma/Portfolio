import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft } from "lucide-react";
import Layout from "../components/Layout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/5 rounded-full animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-accent/10 rounded-full animate-float" style={{ animationDelay: '2s' }} />
        </div>

        <div className="text-center px-6 max-w-2xl mx-auto relative z-10">
          <div className="animate-slide-up">
            <h1 className="text-hero text-8xl md:text-9xl font-black mb-8 text-primary">
              404
            </h1>
          </div>
          
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Page Not Found
            </h2>
          </div>
          
          <div className="animate-slide-up mb-12" style={{ animationDelay: '0.4s' }}>
            <p className="text-xl text-muted-foreground leading-relaxed">
              The page you're looking for seems to have vanished into the digital void. 
              Let's get you back to familiar territory.
            </p>
          </div>

          <div className="animate-slide-up flex flex-col sm:flex-row gap-4 justify-center" style={{ animationDelay: '0.6s' }}>
            <Link to="/" className="btn-primary inline-flex items-center justify-center">
              <Home size={18} className="mr-3" />
              Back to Home
            </Link>
            
            <button 
              onClick={() => window.history.back()} 
              className="btn-ghost inline-flex items-center justify-center"
            >
              <ArrowLeft size={18} className="mr-3" />
              Go Back
            </button>
          </div>

          {/* Decorative Quote */}
          <div className="animate-slide-up mt-16 glass-subtle p-6 rounded-xl" style={{ animationDelay: '0.8s' }}>
            <p className="text-muted-foreground italic">
              "Not all who wander are lost, but this page definitely is."
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
