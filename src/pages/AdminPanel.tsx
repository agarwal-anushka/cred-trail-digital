import { platformAnalytics, mockProviders } from '@/data/mockData';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Users, 
  Award, 
  Database, 
  TrendingUp, 
  CheckCircle, 
  Clock,
  Shield,
  Activity,
  Building2
} from 'lucide-react';

const AdminPanel = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="mb-8 animate-fade-in">
          <div className="flex items-center gap-3 mb-2">
            <div className="h-12 w-12 rounded-lg bg-primary text-primary-foreground flex items-center justify-center">
              <Shield className="h-6 w-6" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold">Admin Dashboard</h1>
              <p className="text-muted-foreground">NCVET / MSDE Regulator Panel</p>
            </div>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="animate-scale-in">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Total Learners</p>
                  <p className="text-3xl font-bold">{platformAnalytics.totalLearners.toLocaleString()}</p>
                  <p className="text-xs text-success mt-1">+{platformAnalytics.monthlyGrowth}% this month</p>
                </div>
                <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users className="h-7 w-7 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="animate-scale-in" style={{ animationDelay: '100ms' }}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Total Credentials</p>
                  <p className="text-3xl font-bold">{(platformAnalytics.totalCredentials / 1000).toFixed(0)}K</p>
                  <p className="text-xs text-muted-foreground mt-1">{platformAnalytics.verifiedCredentials.toLocaleString()} verified</p>
                </div>
                <div className="h-14 w-14 rounded-full bg-success/10 flex items-center justify-center">
                  <Award className="h-7 w-7 text-success" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="animate-scale-in" style={{ animationDelay: '200ms' }}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Partner Providers</p>
                  <p className="text-3xl font-bold">{platformAnalytics.totalProviders}</p>
                  <p className="text-xs text-muted-foreground mt-1">{platformAnalytics.apiIntegrations} API integrations</p>
                </div>
                <div className="h-14 w-14 rounded-full bg-warning/10 flex items-center justify-center">
                  <Building2 className="h-7 w-7 text-warning" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="animate-scale-in" style={{ animationDelay: '300ms' }}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Blockchain Records</p>
                  <p className="text-3xl font-bold">{(platformAnalytics.blockchainTransactions / 1000).toFixed(0)}K</p>
                  <p className="text-xs text-success mt-1">100% immutable</p>
                </div>
                <div className="h-14 w-14 rounded-full bg-accent flex items-center justify-center">
                  <Database className="h-7 w-7 text-accent-foreground" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Provider Approvals */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Provider Approval Queue</span>
                  <Badge variant="outline">{mockProviders.filter(p => p.status === 'pending').length} pending</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockProviders.map((provider, index) => (
                    <div key={provider.id} className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="text-3xl">{provider.logo}</div>
                        <div>
                          <h4 className="font-semibold">{provider.name}</h4>
                          <p className="text-sm text-muted-foreground">
                            {provider.totalCredentialsIssued.toLocaleString()} credentials issued
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        {provider.status === 'approved' ? (
                          <Badge className="verified-badge">
                            <CheckCircle className="h-3 w-3" />
                            Approved
                          </Badge>
                        ) : (
                          <>
                            <Button size="sm" variant="default">Approve</Button>
                            <Button size="sm" variant="outline">Reject</Button>
                          </>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* System Activity */}
            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="h-5 w-5" />
                  Recent System Activity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { action: 'New credential issued', provider: 'NPTEL', time: '2 mins ago', type: 'success' },
                    { action: 'Provider approved', provider: 'Coursera India', time: '15 mins ago', type: 'info' },
                    { action: 'Blockchain verification', provider: 'System', time: '23 mins ago', type: 'success' },
                    { action: 'API integration', provider: 'NSDC', time: '1 hour ago', type: 'info' },
                    { action: 'Credential verified', provider: 'DigiLocker', time: '2 hours ago', type: 'success' }
                  ].map((activity, index) => (
                    <div key={index} className="flex items-start gap-3 pb-3 border-b last:border-0">
                      <div className={`h-2 w-2 rounded-full mt-2 ${activity.type === 'success' ? 'bg-success' : 'bg-primary'}`} />
                      <div className="flex-1">
                        <p className="font-medium text-sm">{activity.action}</p>
                        <p className="text-xs text-muted-foreground">{activity.provider} • {activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* NSQF Mapping Summary */}
            <Card className="animate-scale-in">
              <CardHeader>
                <CardTitle className="text-lg">NSQF Level Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { level: 'Level 6-7', count: 42, color: 'bg-primary' },
                    { level: 'Level 4-5', count: 35, color: 'bg-success' },
                    { level: 'Level 8-9', count: 15, color: 'bg-warning' },
                    { level: 'Level 1-3', count: 8, color: 'bg-secondary' }
                  ].map(({ level, count, color }, index) => (
                    <div key={index}>
                      <div className="flex items-center justify-between text-sm mb-1">
                        <span className="font-medium">{level}</span>
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

            {/* Verification Status */}
            <Card className="animate-scale-in" style={{ animationDelay: '100ms' }}>
              <CardHeader>
                <CardTitle className="text-lg">Verification Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-success" />
                      <span className="text-sm font-medium">Verified</span>
                    </div>
                    <span className="text-2xl font-bold text-success">
                      {((platformAnalytics.verifiedCredentials / platformAnalytics.totalCredentials) * 100).toFixed(1)}%
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Clock className="h-5 w-5 text-warning" />
                      <span className="text-sm font-medium">Pending</span>
                    </div>
                    <span className="text-2xl font-bold text-warning">
                      {((platformAnalytics.pendingCredentials / platformAnalytics.totalCredentials) * 100).toFixed(1)}%
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Compliance */}
            <Card className="animate-scale-in" style={{ animationDelay: '200ms' }}>
              <CardHeader>
                <CardTitle className="text-lg">Compliance Status</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-success" />
                  <span>GDPR Compliant</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-success" />
                  <span>DPDP Act 2023 Compliant</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-success" />
                  <span>ISO 27001 Certified</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-success" />
                  <span>NCVET Approved</span>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="animate-scale-in" style={{ animationDelay: '300ms' }}>
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="outline" className="w-full justify-start">
                  <Database className="h-4 w-4 mr-2" />
                  Export System Data
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Activity className="h-4 w-4 mr-2" />
                  View Audit Logs
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <TrendingUp className="h-4 w-4 mr-2" />
                  Generate Reports
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AdminPanel;
