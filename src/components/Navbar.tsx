import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { GraduationCap, Globe } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const location = useLocation();
  const [language, setLanguage] = useState<'en' | 'hi'>('en');

  const isActive = (path: string) => location.pathname === path;

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'hi' : 'en');
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <GraduationCap className="h-6 w-6" />
            </div>
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {language === 'en' ? 'Skill Passport' : 'स्किल पासपोर्ट'}
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            <Link to="/learner">
              <Button 
                variant={isActive('/learner') ? 'default' : 'ghost'}
                size="sm"
              >
                {language === 'en' ? 'Learner' : 'शिक्षार्थी'}
              </Button>
            </Link>
            <Link to="/provider">
              <Button 
                variant={isActive('/provider') ? 'default' : 'ghost'}
                size="sm"
              >
                {language === 'en' ? 'Provider' : 'प्रदाता'}
              </Button>
            </Link>
            <Link to="/employer">
              <Button 
                variant={isActive('/employer') ? 'default' : 'ghost'}
                size="sm"
              >
                {language === 'en' ? 'Employer' : 'नियोक्ता'}
              </Button>
            </Link>
            <Link to="/admin">
              <Button 
                variant={isActive('/admin') ? 'default' : 'ghost'}
                size="sm"
              >
                {language === 'en' ? 'Admin' : 'व्यवस्थापक'}
              </Button>
            </Link>
          </div>

          <Button 
            variant="outline" 
            size="sm"
            onClick={toggleLanguage}
            className="flex items-center gap-2"
          >
            <Globe className="h-4 w-4" />
            <span className="hidden sm:inline">{language === 'en' ? 'हिंदी' : 'English'}</span>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
