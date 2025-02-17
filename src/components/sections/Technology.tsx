import React, { useEffect, useRef } from 'react';
import { 
  Brain, 
  Lock, 
  Server,
  BarChart4,
  Shield,
  Cpu,
  Database,
  Zap,
  Network,
  LucideIcon // Import LucideIcon for typing the icon prop
} from 'lucide-react';
import './style.css'; 

// Define the type for a particle
interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
}

// Simple particle effect component
const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    
    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    
    setCanvasDimensions();
    window.addEventListener('resize', setCanvasDimensions);
    
    // Particle settings
    const particlesArray: Particle[] = [];
    const numberOfParticles = 100;
    
    // Create particles
    for (let i = 0; i < numberOfParticles; i++) {
      particlesArray.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        speedX: Math.random() * 0.5 - 0.25,
        speedY: Math.random() * 0.5 - 0.25,
        color: `rgba(100, 149, 237, ${Math.random() * 0.5 + 0.1})`
      });
    }
    
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particlesArray.length; i++) {
        const p = particlesArray[i];
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        
        p.x += p.speedX;
        p.y += p.speedY;
        
        if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
        if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;
      }
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', setCanvasDimensions);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full opacity-30"
    />
  );
};

// Define the type for a tech category
interface TechCategory {
  icon: LucideIcon;
  title: string;
  features: string[];
}

const TechnologySection = () => {
  const techCategories: TechCategory[] = [
    {
      icon: Brain,
      title: "AI-Driven Analysis",
      features: [
        "Real-time market data processing",
        "Predictive analytics and pattern recognition",
        "Risk assessment algorithms",
        "Behavioral finance modeling",
        "Automatic anomaly detection"
      ]
    },
    {
      icon: Lock,
      title: "Security Framework",
      features: [
        "Bank-level 256-bit encryption",
        "Multi-factor authentication",
        "24/7 security monitoring",
        "Regular penetration testing",
        "Regulatory compliance across jurisdictions"
      ]
    },
    {
      icon: Server,
      title: "Trading Infrastructure",
      features: [
        "Low-latency execution engines",
        "Smart order routing for optimal pricing",
        "Distributed system architecture",
        "Automatic failover and redundancy",
        "Scalable cloud-native platform"
      ]
    }
  ];

  return (
    <div className="relative bg-slate-900 py-24 overflow-hidden">
      <ParticleBackground />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            The Power Behind Your Portfolio
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Our cutting-edge technology stack is designed to give you an edge in today's fast-moving markets.
          </p>
        </div>
        
        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {techCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div key={index} className="relative">
                {/* Card background with glow effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl opacity-30 blur-md"></div>
                
                <div className="relative bg-slate-800/70 backdrop-blur-sm rounded-xl p-8 h-full">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 rounded-lg bg-blue-500/30 flex items-center justify-center mr-4">
                      <Icon className="w-6 h-6 text-blue-300" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                  </div>
                  
                  <ul className="space-y-3">
                    {category.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="w-5 h-5 text-blue-400 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-slate-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Technology diagram/visualization */}
        <div className="mt-24 relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-96 h-96 bg-blue-500/10 rounded-full animate-pulse-slow"></div>
            <div className="absolute w-64 h-64 bg-purple-500/10 rounded-full animate-pulse-slow animation-delay-1000"></div>
          </div>
          
          <div className="relative bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-white text-center mb-6">Our Integrated Technology Stack</h3>
            
            <div className="relative w-full aspect-[16/9]">
              {/* Central node */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-blue-500/40 rounded-full flex items-center justify-center z-10">
                <Database className="w-8 h-8 text-blue-200" />
              </div>
              
              {/* Orbital nodes */}
              {[Cpu, Shield, Network, BarChart4, Zap].map((NodeIcon, i) => {
                const angle = (i * (2 * Math.PI / 5)) + Math.PI/10;
                const x = 50 + 40 * Math.cos(angle);
                const y = 50 + 40 * Math.sin(angle);
                return (
                  <div 
                    key={i}
                    className="absolute w-16 h-16 bg-slate-700/80 rounded-full flex items-center justify-center"
                    style={{
                      left: `${x}%`,
                      top: `${y}%`,
                      animation: `orbit ${10 + i * 2}s linear infinite`,
                      animationDelay: `${i * 0.5}s`
                    }}
                  >
                    <NodeIcon className="w-6 h-6 text-blue-300" />
                  </div>
                );
              })}
              
              {/* Connection lines */}
              <svg className="absolute inset-0 w-full h-full opacity-60">
                <defs>
                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.4" />
                  </linearGradient>
                </defs>
                {[0, 1, 2, 3, 4].map(i => {
                  const angle = (i * (2 * Math.PI / 5)) + Math.PI/10;
                  const x = 50 + 40 * Math.cos(angle);
                  const y = 50 + 40 * Math.sin(angle);
                  return (
                    <line 
                      key={i}
                      x1="50%" 
                      y1="50%" 
                      x2={`${x}%`} 
                      y2={`${y}%`} 
                      stroke="url(#lineGradient)"
                      strokeWidth="1.5"
                      strokeDasharray="4 4"
                    />
                  );
                })}
              </svg>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-slate-300 text-sm">
                Our system architecture ensures seamless integration between all components, 
                providing real-time data flow and exceptional performance.
              </p>
            </div>
          </div>
        </div>
      </div>
      
  
    </div>
  );
};

export default TechnologySection;