import { Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="mt-auto border-t border-border bg-card">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold text-lg mb-3">About Skill Passport</h3>
            <p className="text-sm text-muted-foreground">
              India's unified digital skills passport platform, developed under the Ministry of Skill Development & Entrepreneurship (MSDE) in partnership with NCVET.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">NSQF Framework</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">FAQs</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-3">Contact Us</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>support@skillpassport.gov.in</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>1800-XXX-XXXX (Toll Free)</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-border text-center text-sm text-muted-foreground">
          <p>© 2025 Skill Passport | Ministry of Skill Development & Entrepreneurship × NCVET</p>
          <p className="mt-1">Powered by Digital India Initiative</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
