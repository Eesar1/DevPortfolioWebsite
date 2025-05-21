import { scrollToSection } from "@/lib/utils";

export function Footer() {
  const handleLinkClick = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    scrollToSection(sectionId);
  };

  const quickLinks = [
    { href: "hero", label: "Home" },
    { href: "about", label: "About" },
    { href: "skills", label: "Skills" },
    { href: "projects", label: "Projects" },
    { href: "experience", label: "Experience" },
    { href: "contact", label: "Contact" }
  ];

  const services = [
    { href: "#", label: "Web Development" },
    { href: "#", label: "Mobile App Development" },
    { href: "#", label: "UI/UX Design" },
    { href: "#", label: "Consulting" },
    { href: "#", label: "Code Review" }
  ];

  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <a 
              href="#hero" 
              onClick={(e) => handleLinkClick(e, "hero")}
              className="text-2xl font-bold mb-6 block"
            >
              Eesar<span className="text-primary">.</span>
            </a>
            <p className="text-slate-400 mb-6">
              A passionate full-stack developer focused on creating exceptional digital experiences.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/Eesar1" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors duration-300" 
                aria-label="GitHub"
              >
                <i className="ri-github-fill"></i>
              </a>
              <a 
                href="https://www.linkedin.com/in/eesar-hussain-094436181?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors duration-300" 
                aria-label="LinkedIn"
              >
                <i className="ri-linkedin-fill"></i>
              </a>
              <a 
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors duration-300" 
                aria-label="Twitter"
              >
                <i className="ri-twitter-fill"></i>
              </a>
              <a 
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors duration-300" 
                aria-label="Instagram"
              >
                <i className="ri-instagram-line"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a 
                    href={`#${link.href}`} 
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-slate-400 hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href={service.href}
                    className="text-slate-400 hover:text-white transition-colors duration-300"
                  >
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <i className="ri-map-pin-line text-primary mt-1 mr-3"></i>
                <span className="text-slate-400">Lahore, Pakistan</span>
              </li>
              <li className="flex items-start">
                <i className="ri-mail-line text-primary mt-1 mr-3"></i>
                <span className="text-slate-400">eesarhussain99@gmail.com</span>
              </li>
              <li className="flex items-start">
                <i className="ri-phone-line text-primary mt-1 mr-3"></i>
                <span className="text-slate-400">+92 3211090949</span>
              </li>
            </ul>
          </div>
        </div>
        
            <div className="border-t border-slate-800 pt-8 flex flex-col items-center justify-center text-center">
          <p className="text-slate-500 mb-4">© {new Date().getFullYear()} Eesar Hussain. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
