import { useState } from 'react';
import { mockLearners, mockCredentials } from '@/data/mockData';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CredentialCard from '@/components/CredentialCard';
import NSQFProgress from '@/components/NSQFProgress';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  User, 
  Mail, 
  Phone, 
  Shield, 
  Download, 
  Share2, 
  Plus,
  Eye,
  EyeOff
} from 'lucide-react';

const LearnerDashboard = () => {
  const [selectedLearner] = useState(mockLearners[0]);
  const [profileVisibility, setProfileVisibility] = useState(selectedLearner.profileVisibility);
  
  const learnerCredentials = mockCredentials.filter(c => c.learnerId === selectedLearner.id);
  
  const toggleVisibility = () => {
    const options: Array<'public' | 'employers-only' | 'private'> = ['public', 'employers-only', 'private'];
    const currentIndex = options.indexOf(profileVisibility);
    const nextIndex = (currentIndex + 1) % options.length;
    setProfileVisibility(options[nextIndex]);
  };

  const getVisibilityBadge = () => {
    const configs = {
      'public': { icon: Eye, label: 'Public', variant: 'default' as const },
      'employers-only': { icon: Shield, label: 'Employers Only', variant: 'secondary' as const },
      'private': { icon: EyeOff, label: 'Private', variant: 'outline' as const }
    };
    
    const config = configs[profileVisibility];
    const Icon = config.icon;
    
    return (
      <Badge variant={config.variant} className="cursor-pointer" onClick={toggleVisibility}>
        <Icon className="h-3 w-3 mr-1" />
        {config.label}
      </Badge>
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8 animate-fade-in">
          <div className="flex items-center justify-between mb-2">
            <h1 className="text-3xl md:text-4xl font-bold">My Skills Passport</h1>
            {getVisibilityBadge()}
          </div>
          <p className="text-muted-foreground">
            Your unified lifelong learning profile
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Profile & NSQF */}
          <div className="space-y-6">
            {/* Profile Card */}
            <Card className="animate-scale-in">
              <CardHeader>
                <CardTitle className="text-lg">Learner Profile</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center text-3xl">
                    {selectedLearner.profilePicture}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">{selectedLearner.name}</h3>
                    <Badge variant="outline" className="mt-1">
                      DigiLocker ID: {selectedLearner.digiLockerId}
                    </Badge>
                  </div>
                </div>

                <div className="space-y-3 pt-4 border-t">
                  <div className="flex items-center gap-3 text-sm">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <span>{selectedLearner.email}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <span>{selectedLearner.phone}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <User className="h-4 w-4 text-muted-foreground" />
                    <span>Current NSQF Level: <strong>Level {selectedLearner.currentNSQFLevel}</strong></span>
                  </div>
                </div>

                <div className="flex gap-2 pt-4">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Download className="h-4 w-4 mr-2" />
                    Export PDF
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <Share2 className="h-4 w-4 mr-2" />
                    Share
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* NSQF Progress */}
            <Card className="animate-scale-in" style={{ animationDelay: '100ms' }}>
              <CardHeader>
                <CardTitle className="text-lg">NSQF Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <NSQFProgress 
                  currentLevel={selectedLearner.currentNSQFLevel}
                  completedLevels={[1, 2, 3, 4, 5, 6]}
                />
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Credentials */}
          <div className="lg:col-span-2 space-y-6">
            {/* Actions */}
            <Card className="animate-fade-in">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-lg mb-1">My Credentials</h3>
                    <p className="text-sm text-muted-foreground">
                      {learnerCredentials.length} credentials • {learnerCredentials.filter(c => c.verificationStatus === 'verified').length} verified
                    </p>
                  </div>
                  <Button className="gap-2">
                    <Plus className="h-4 w-4" />
                    Add Credential
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Credentials Grid */}
            {learnerCredentials.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {learnerCredentials.map((credential, index) => (
                  <div key={credential.id} style={{ animationDelay: `${index * 100}ms` }}>
                    <CredentialCard credential={credential} />
                  </div>
                ))}
              </div>
            ) : (
              <Card>
                <CardContent className="p-12 text-center">
                  <Shield className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-2">No Credentials Yet</h3>
                  <p className="text-muted-foreground mb-4">
                    Start building your skills passport by adding your first credential
                  </p>
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Add Your First Credential
                  </Button>
                </CardContent>
              </Card>
            )}

            {/* Offline Access Notice */}
            <Card className="bg-accent/50 border-accent animate-fade-in">
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <Shield className="h-5 w-5 text-primary mt-0.5" />
                  <div className="flex-1">
                    <h4 className="font-semibold text-sm mb-1">Offline Access Enabled</h4>
                    <p className="text-xs text-muted-foreground">
                      Your last 5 credentials are cached for offline viewing
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default LearnerDashboard;
