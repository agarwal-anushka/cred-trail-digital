import { useState } from 'react';
import { mockProviders, mockCredentials } from '@/data/mockData';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
  CheckCircle, 
  Clock, 
  XCircle, 
  Key, 
  Upload, 
  TrendingUp,
  Award,
  Users
} from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const ProviderDashboard = () => {
  const [selectedProvider] = useState(mockProviders[0]);
  const [showApiKey, setShowApiKey] = useState(false);
  
  const providerCredentials = mockCredentials.filter(c => c.providerId === selectedProvider.id);
  const verifiedCount = providerCredentials.filter(c => c.verificationStatus === 'verified').length;
  const pendingCount = providerCredentials.filter(c => c.verificationStatus === 'pending').length;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="mb-8 animate-fade-in">
          <div className="flex items-center gap-3 mb-2">
            <div className="text-4xl">{selectedProvider.logo}</div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold">{selectedProvider.name}</h1>
              <div className="flex items-center gap-2 mt-1">
                {selectedProvider.ncvetRecognized && (
                  <Badge className="verified-badge">
                    <CheckCircle className="h-3 w-3" />
                    NCVET Recognized
                  </Badge>
                )}
                <Badge variant={selectedProvider.status === 'approved' ? 'default' : 'secondary'}>
                  {selectedProvider.status}
                </Badge>
              </div>
            </div>
          </div>
          <p className="text-muted-foreground">
            Manage your credential issuance and track analytics
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="animate-scale-in">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Total Issued</p>
                  <p className="text-2xl font-bold">{selectedProvider.totalCredentialsIssued.toLocaleString()}</p>
                </div>
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="animate-scale-in" style={{ animationDelay: '100ms' }}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Verified</p>
                  <p className="text-2xl font-bold text-success">{verifiedCount}</p>
                </div>
                <div className="h-12 w-12 rounded-full bg-success/10 flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-success" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="animate-scale-in" style={{ animationDelay: '200ms' }}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Pending</p>
                  <p className="text-2xl font-bold text-warning">{pendingCount}</p>
                </div>
                <div className="h-12 w-12 rounded-full bg-warning/10 flex items-center justify-center">
                  <Clock className="h-6 w-6 text-warning" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="animate-scale-in" style={{ animationDelay: '300ms' }}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Active Learners</p>
                  <p className="text-2xl font-bold">1,245</p>
                </div>
                <div className="h-12 w-12 rounded-full bg-accent flex items-center justify-center">
                  <Users className="h-6 w-6 text-accent-foreground" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Issue Credential */}
          <div className="lg:col-span-2 space-y-6">
            {/* Issue New Credential */}
            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Upload className="h-5 w-5" />
                  Issue New Credential
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="learner-id">Learner ID</Label>
                    <Input id="learner-id" placeholder="e.g., L001" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="course-name">Course Name</Label>
                    <Input id="course-name" placeholder="e.g., Python Basics" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="domain">Domain</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select domain" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="programming">Programming</SelectItem>
                        <SelectItem value="data-science">Data Science</SelectItem>
                        <SelectItem value="ai">Artificial Intelligence</SelectItem>
                        <SelectItem value="cloud">Cloud Computing</SelectItem>
                        <SelectItem value="design">Design</SelectItem>
                        <SelectItem value="marketing">Marketing</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="nsqf-level">NSQF Level</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select level" />
                      </SelectTrigger>
                      <SelectContent>
                        {[1,2,3,4,5,6,7,8,9,10].map(level => (
                          <SelectItem key={level} value={level.toString()}>
                            Level {level}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="issue-date">Issue Date</Label>
                  <Input id="issue-date" type="date" />
                </div>

                <Button className="w-full">
                  <Upload className="h-4 w-4 mr-2" />
                  Issue Credential
                </Button>
              </CardContent>
            </Card>

            {/* Recent Credentials */}
            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle>Recent Credentials Issued</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {providerCredentials.slice(0, 5).map((credential) => (
                    <div key={credential.id} className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors">
                      <div className="flex-1">
                        <h4 className="font-semibold">{credential.courseName}</h4>
                        <p className="text-sm text-muted-foreground">
                          {credential.domain} • Level {credential.nsqfLevel} • Learner {credential.learnerId}
                        </p>
                      </div>
                      {credential.verificationStatus === 'verified' ? (
                        <Badge className="verified-badge">
                          <CheckCircle className="h-3 w-3" />
                          Verified
                        </Badge>
                      ) : credential.verificationStatus === 'pending' ? (
                        <Badge className="pending-badge">
                          <Clock className="h-3 w-3" />
                          Pending
                        </Badge>
                      ) : (
                        <Badge variant="destructive">
                          <XCircle className="h-3 w-3" />
                          Rejected
                        </Badge>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* API Access */}
            <Card className="animate-scale-in">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Key className="h-5 w-5" />
                  API Access
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="api-key">Your API Key</Label>
                  <div className="flex gap-2 mt-2">
                    <Input 
                      id="api-key" 
                      type={showApiKey ? 'text' : 'password'}
                      value={selectedProvider.apiKey}
                      readOnly
                    />
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => setShowApiKey(!showApiKey)}
                    >
                      {showApiKey ? 'Hide' : 'Show'}
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    Use this key to integrate with Skill Passport API
                  </p>
                </div>

                <Button variant="outline" className="w-full">
                  View API Documentation
                </Button>
              </CardContent>
            </Card>

            {/* NSQF Mapping */}
            <Card className="animate-scale-in" style={{ animationDelay: '100ms' }}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Award className="h-5 w-5" />
                  NSQF Distribution
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { level: 6, count: 45, color: 'bg-primary' },
                    { level: 5, count: 32, color: 'bg-success' },
                    { level: 4, count: 28, color: 'bg-warning' },
                    { level: 3, count: 12, color: 'bg-secondary' }
                  ].map(({ level, count, color }) => (
                    <div key={level}>
                      <div className="flex items-center justify-between text-sm mb-1">
                        <span className="font-medium">Level {level}</span>
                        <span className="text-muted-foreground">{count}%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div 
                          className={`h-full ${color} transition-all duration-500`}
                          style={{ width: `${count}%` }}
                        />
                      </div>
                    </div>
                  ))}
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

export default ProviderDashboard;
