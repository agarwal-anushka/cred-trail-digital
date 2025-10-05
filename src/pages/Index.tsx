import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  GraduationCap, 
  Shield, 
  Award, 
  TrendingUp, 
  CheckCircle,
  Users,
  Building2,
  Settings
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Index = () => {
  const features = [
    {
      icon: Shield,
      title: 'Secure & Verified',
      description: 'Multi-layer verification through DigiLocker, NCVET recognition, and blockchain technology'
    },
    {
      icon: Award,
      title: 'NSQF Aligned',
      description: 'All credentials mapped to National Skills Qualifications Framework (Levels 1-10)'
    },
    {
      icon: TrendingUp,
      title: 'Skill Progression',
      description: 'Visualize your learning journey and stack micro-credentials toward diplomas and degrees'
    },
    {
      icon: CheckCircle,
      title: 'Trusted by Employers',
      description: 'Industry-recognized credentials accepted by top companies across India'
    }
  ];

  const userTypes = [
    {
      icon: Users,
      title: 'For Learners',
      description: 'Build your unified digital skills passport',
      link: '/learner',
      color: 'bg-primary'
    },
    {
      icon: GraduationCap,
      title: 'For Providers',
      description: 'Issue verified micro-credentials',
      link: '/provider',
      color: 'bg-secondary'
    },
    {
      icon: Building2,
      title: 'For Employers',
      description: 'Verify candidate skills instantly',
      link: '/employer',
      color: 'bg-success'
    },
    {
      icon: Settings,
      title: 'For Regulators',
      description: 'Monitor and manage the ecosystem',
      link: '/admin',
      color: 'bg-warning'
    }
  ];

  const stats = [
    { label: 'Active Learners', value: '45,623+' },
    { label: 'Verified Credentials', value: '187K+' },
    { label: 'Partner Providers', value: '128+' },
    { label: 'Hiring Partners', value: '450+' }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden gov-gradient text-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
              <Shield className="h-4 w-4" />
              <span className="text-sm font-medium">Ministry of Skill Development & Entrepreneurship × NCVET</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              India's Unified Digital
              <br />
              <span className="text-white/90">Skills Passport</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Aggregate, verify, and showcase your micro-credentials from multiple providers in one secure, lifetime skills profile
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/learner">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                  <Users className="mr-2 h-5 w-5" />
                  Access Your Passport
                </Button>
              </Link>
              <Link to="/nsqf-ladder">
                <Button size="lg" variant="outline" className="w-full sm:w-auto bg-white/10 border-white/30 text-white hover:bg-white/20">
                  <Award className="mr-2 h-5 w-5" />
                  Explore NSQF Framework
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Skill Passport?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive, secure, and industry-recognized platform for managing your lifelong learning journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="hover-lift animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* User Types Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Choose Your Portal
            </h2>
            <p className="text-lg text-muted-foreground">
              Select your role to access the relevant dashboard
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {userTypes.map((type, index) => (
              <Link key={index} to={type.link}>
                <Card className="hover-lift cursor-pointer h-full animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <CardContent className="p-6 text-center">
                    <div className={`h-16 w-16 rounded-full ${type.color} text-white flex items-center justify-center mx-auto mb-4`}>
                      <type.icon className="h-8 w-8" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{type.title}</h3>
                    <p className="text-sm text-muted-foreground">{type.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 text-center md:text-left">
            <div className="flex items-center gap-3">
              <Shield className="h-8 w-8 text-success" />
              <div>
                <div className="font-semibold">DigiLocker Integrated</div>
                <div className="text-sm text-muted-foreground">Government Verified</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Award className="h-8 w-8 text-primary" />
              <div>
                <div className="font-semibold">NCVET Recognized</div>
                <div className="text-sm text-muted-foreground">Nationally Accepted</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="h-8 w-8 text-warning" />
              <div>
                <div className="font-semibold">Blockchain Secured</div>
                <div className="text-sm text-muted-foreground">Immutable Records</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
