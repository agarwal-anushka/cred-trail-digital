import { useState } from 'react';
import { mockEmployers, mockLearners, mockCredentials } from '@/data/mockData';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { 
  Search, 
  CheckCircle, 
  Download, 
  Users, 
  TrendingUp,
  Award,
  Shield,
  Filter
} from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const EmployerPortal = () => {
  const [selectedEmployer] = useState(mockEmployers[0]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedNSQF, setSelectedNSQF] = useState<string>('all');

  const filteredLearners = mockLearners.filter(learner => {
    const matchesSearch = learner.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         learner.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesNSQF = selectedNSQF === 'all' || learner.currentNSQFLevel === parseInt(selectedNSQF);
    return matchesSearch && matchesNSQF && learner.profileVisibility !== 'private';
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="mb-8 animate-fade-in">
          <div className="flex items-center gap-3 mb-2">
            <div className="text-4xl">{selectedEmployer.companyLogo}</div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold">{selectedEmployer.name}</h1>
              <p className="text-muted-foreground">Employer Portal</p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="animate-scale-in">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Verified Hires</p>
                  <p className="text-2xl font-bold">{selectedEmployer.verifiedHires}</p>
                </div>
                <div className="h-12 w-12 rounded-full bg-success/10 flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-success" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="animate-scale-in" style={{ animationDelay: '100ms' }}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Candidates Searched</p>
                  <p className="text-2xl font-bold">2,145</p>
                </div>
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Search className="h-6 w-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="animate-scale-in" style={{ animationDelay: '200ms' }}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Avg. NSQF Level</p>
                  <p className="text-2xl font-bold">6.2</p>
                </div>
                <div className="h-12 w-12 rounded-full bg-warning/10 flex items-center justify-center">
                  <Award className="h-6 w-6 text-warning" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="animate-scale-in" style={{ animationDelay: '300ms' }}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Success Rate</p>
                  <p className="text-2xl font-bold">94%</p>
                </div>
                <div className="h-12 w-12 rounded-full bg-accent flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-accent-foreground" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Search Section */}
        <Card className="mb-6 animate-fade-in">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Search className="h-5 w-5" />
              Search Verified Candidates
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <Input 
                  placeholder="Search by name, email, or skills..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full"
                />
              </div>
              <div className="flex gap-2">
                <Select value={selectedNSQF} onValueChange={setSelectedNSQF}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="NSQF Level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Levels</SelectItem>
                    {[1,2,3,4,5,6,7,8,9,10].map(level => (
                      <SelectItem key={level} value={level.toString()}>
                        Level {level}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Button variant="outline">
                  <Filter className="h-4 w-4 mr-2" />
                  More Filters
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Candidate Results */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">
              Verified Candidates ({filteredLearners.length})
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredLearners.map((learner, index) => {
              const learnerCreds = mockCredentials.filter(c => c.learnerId === learner.id && c.verificationStatus === 'verified');
              
              return (
                <Card key={learner.id} className="hover-lift animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-2xl">
                          {learner.profilePicture}
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">{learner.name}</h3>
                          <p className="text-sm text-muted-foreground">{learner.email}</p>
                        </div>
                      </div>
                      <Badge variant="outline">
                        Level {learner.currentNSQFLevel}
                      </Badge>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <Shield className="h-4 w-4 text-success" />
                        <span className="text-sm font-medium">DigiLocker Verified</span>
                      </div>

                      <div>
                        <p className="text-sm font-medium mb-2">Verified Credentials:</p>
                        <div className="flex flex-wrap gap-2">
                          {learnerCreds.slice(0, 3).map(cred => (
                            <Badge key={cred.id} variant="secondary" className="text-xs">
                              {cred.courseName}
                            </Badge>
                          ))}
                          {learnerCreds.length > 3 && (
                            <Badge variant="outline" className="text-xs">
                              +{learnerCreds.length - 3} more
                            </Badge>
                          )}
                        </div>
                      </div>

                      <div className="flex gap-2 pt-4 border-t">
                        <Button className="flex-1" size="sm">
                          <Shield className="h-4 w-4 mr-2" />
                          View Full Profile
                        </Button>
                        <Button variant="outline" size="sm">
                          <Download className="h-4 w-4 mr-2" />
                          Export PDF
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {filteredLearners.length === 0 && (
            <Card>
              <CardContent className="p-12 text-center">
                <Users className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">No Candidates Found</h3>
                <p className="text-muted-foreground">
                  Try adjusting your search criteria or filters
                </p>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Most In-Demand Skills */}
        <Card className="mt-8 animate-fade-in">
          <CardHeader>
            <CardTitle>Most In-Demand Skills</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { skill: 'AI & ML', count: 234, trend: '+12%' },
                { skill: 'Cloud Computing', count: 189, trend: '+8%' },
                { skill: 'Data Analytics', count: 156, trend: '+15%' },
                { skill: 'Python', count: 145, trend: '+6%' }
              ].map((item, index) => (
                <div key={index} className="p-4 rounded-lg border border-border">
                  <p className="font-semibold mb-1">{item.skill}</p>
                  <p className="text-2xl font-bold text-primary mb-1">{item.count}</p>
                  <p className="text-sm text-success">{item.trend} this month</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
};

export default EmployerPortal;
