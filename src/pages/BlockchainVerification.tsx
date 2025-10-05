import { useState } from 'react';
import { mockCredentials } from '@/data/mockData';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Database, 
  Search, 
  CheckCircle, 
  Shield, 
  Lock,
  Clock,
  Hash
} from 'lucide-react';

const BlockchainVerification = () => {
  const [searchHash, setSearchHash] = useState('');
  const [selectedTransaction, setSelectedTransaction] = useState<typeof mockCredentials[0] | null>(null);

  const verifiedCredentials = mockCredentials.filter(c => c.blockchainHash);

  const handleSearch = () => {
    const found = verifiedCredentials.find(c => c.blockchainHash?.includes(searchHash));
    setSelectedTransaction(found || null);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="mb-8 animate-fade-in">
          <div className="flex items-center gap-3 mb-2">
            <div className="h-12 w-12 rounded-lg bg-primary text-primary-foreground flex items-center justify-center">
              <Database className="h-6 w-6" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold">Blockchain Verification</h1>
              <p className="text-muted-foreground">Immutable credential verification ledger</p>
            </div>
          </div>
        </div>

        {/* Search Section */}
        <Card className="mb-8 animate-scale-in">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Search className="h-5 w-5" />
              Verify Transaction
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-2">
              <Input 
                placeholder="Enter blockchain transaction hash..." 
                value={searchHash}
                onChange={(e) => setSearchHash(e.target.value)}
                className="flex-1"
              />
              <Button onClick={handleSearch}>
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
            </div>
            
            {selectedTransaction && (
              <div className="mt-6 p-6 rounded-lg border-2 border-success bg-success/5 animate-fade-in">
                <div className="flex items-start gap-3 mb-4">
                  <CheckCircle className="h-6 w-6 text-success mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Transaction Verified</h3>
                    <p className="text-sm text-muted-foreground">This credential has been verified on the blockchain</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Credential</p>
                      <p className="font-semibold">{selectedTransaction.courseName}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Provider</p>
                      <p className="font-semibold">{selectedTransaction.providerName}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Issue Date</p>
                      <p className="font-semibold">{new Date(selectedTransaction.issuedDate).toLocaleDateString('en-IN')}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">NSQF Level</p>
                      <p className="font-semibold">Level {selectedTransaction.nsqfLevel}</p>
                    </div>
                  </div>
                  
                  <div className="pt-3 border-t">
                    <p className="text-sm text-muted-foreground mb-1">Blockchain Hash</p>
                    <p className="font-mono text-sm break-all">{selectedTransaction.blockchainHash}</p>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="animate-scale-in">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Total Transactions</p>
                  <p className="text-2xl font-bold">{verifiedCredentials.length}</p>
                </div>
                <Database className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card className="animate-scale-in" style={{ animationDelay: '100ms' }}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Verified</p>
                  <p className="text-2xl font-bold text-success">{verifiedCredentials.length}</p>
                </div>
                <CheckCircle className="h-8 w-8 text-success" />
              </div>
            </CardContent>
          </Card>

          <Card className="animate-scale-in" style={{ animationDelay: '200ms' }}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Security Level</p>
                  <p className="text-2xl font-bold">100%</p>
                </div>
                <Shield className="h-8 w-8 text-warning" />
              </div>
            </CardContent>
          </Card>

          <Card className="animate-scale-in" style={{ animationDelay: '300ms' }}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Avg. Time</p>
                  <p className="text-2xl font-bold">2.3s</p>
                </div>
                <Clock className="h-8 w-8 text-accent-foreground" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Transaction Ledger */}
        <Card className="animate-fade-in">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lock className="h-5 w-5" />
              Immutable Transaction Ledger
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {verifiedCredentials.map((credential, index) => (
                <div 
                  key={credential.id} 
                  className="p-4 rounded-lg border border-border hover:bg-muted/50 transition-all cursor-pointer animate-slide-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                  onClick={() => setSelectedTransaction(credential)}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-semibold">{credential.courseName}</h4>
                        <Badge className="verified-badge">
                          <CheckCircle className="h-3 w-3" />
                          Verified
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {credential.providerName} • {new Date(credential.issuedDate).toLocaleDateString('en-IN')}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm">
                    <Hash className="h-4 w-4 text-muted-foreground" />
                    <span className="font-mono text-muted-foreground">
                      {credential.blockchainHash}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* How it Works */}
        <Card className="mt-8 bg-accent/50 border-accent animate-fade-in">
          <CardHeader>
            <CardTitle className="text-lg">How Blockchain Verification Works</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex gap-3">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Credential Issued</h4>
                  <p className="text-sm text-muted-foreground">
                    Provider issues credential and creates a unique digital signature
                  </p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-success text-success-foreground flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Blockchain Record</h4>
                  <p className="text-sm text-muted-foreground">
                    Transaction is recorded on immutable blockchain ledger
                  </p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-warning text-warning-foreground flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Permanent Verification</h4>
                  <p className="text-sm text-muted-foreground">
                    Anyone can verify authenticity using the blockchain hash
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
};

export default BlockchainVerification;
