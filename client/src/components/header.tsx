import { useState, useEffect } from "react";
import { Menu, X, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  activeSection: string;
}

export default function Header({ activeSection }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const menuItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#contact", label: "Contact" },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(sectionId);
    if (element) {
      const offsetTop = (element as HTMLElement).offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white/95 backdrop-blur-sm shadow-sm py-3" 
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2" onClick={() => scrollToSection("#home")}>
          <div className="h-9 w-9 rounded-full bg-primary flex items-center justify-center">
            <Camera className="h-5 w-5 text-white" />
          </div>
          <span className="heading text-2xl font-bold">
            Focus<span className="text-primary">Studio</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.href);
              }}
              className={`nav-link font-medium transition-colors hover:text-primary ${
                activeSection === item.href.substring(1) ? "active text-primary" : ""
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Contact Button (Desktop) */}
        <div className="hidden md:block">
          <Button 
            className="rounded-full bg-primary hover:bg-primary/90 text-white shadow-sm shadow-primary/30"
            asChild
          >
            <a href="#contact" onClick={(e) => {
              e.preventDefault();
              scrollToSection("#contact");
            }}>
              Book a Session
            </a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden py-4 px-4 bg-white/95 backdrop-blur-sm border-t shadow-md">
          <div className="flex flex-col space-y-4">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className={`font-medium py-2 transition-colors hover:text-primary ${
                  activeSection === item.href.substring(1) ? "text-primary" : ""
                }`}
              >
                {item.label}
              </a>
            ))}
            <Button 
              className="rounded-full bg-primary hover:bg-primary/90 text-white w-full mt-2"
              asChild
            >
              <a href="#contact" onClick={(e) => {
                e.preventDefault();
                scrollToSection("#contact");
              }}>
                Book a Session
              </a>
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}
