import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../../assects/logo.png";

const Navbar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Restaurant", href: "/restaurant" },
    // { name: 'Review', href: '/review' },
  ];

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 flex items-center justify-center">
                {logoError ? (
                  <div className="w-8 h-8 bg-gradient-to-r from-teal-400 to-teal-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">Y</span>
                  </div>
                ) : (
                  <img
                    src={logo}
                    alt="YetiAlos Logo"
                    className="w-8 h-8 object-contain"
                    onError={() => setLogoError(true)}
                  />
                )}
              </div>
              <span className="text-xl font-bold text-gray-900">FoodieRev</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                    location.pathname === item.href
                      ? "text-teal-600 border-b-2 border-teal-600"
                      : "text-gray-700 hover:text-teal-600 hover:border-b-2 hover:border-teal-300"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="ghost"
              className="text-gray-700 hover:text-teal-600 flex items-center space-x-2"
              asChild
            >
              <Link to="/ai-assistant">
                <div className="w-5 h-5 bg-teal-100 rounded-full flex items-center justify-center">
                  <span className="text-teal-600 text-xs font-bold">AI</span>
                </div>
                <span>AI Assistance</span>
              </Link>
            </Button>
            <Button className="bg-teal-600 hover:bg-teal-700 text-white px-6">
              Log in
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 text-base font-medium transition-colors duration-200 ${
                    location.pathname === item.href
                      ? "text-teal-600 bg-teal-50"
                      : "text-gray-700 hover:text-teal-600 hover:bg-gray-50"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="flex items-center px-5 space-y-3 flex-col">
                <Button
                  variant="ghost"
                  className="w-full text-gray-700 hover:text-teal-600 flex items-center justify-center space-x-2"
                  asChild
                >
                  <Link
                    to="/ai-assistant"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <div className="w-5 h-5 bg-teal-100 rounded-full flex items-center justify-center">
                      <span className="text-teal-600 text-xs font-bold">
                        AI
                      </span>
                    </div>
                    <span>AI Assistance</span>
                  </Link>
                </Button>
                <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white">
                  Log in
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
