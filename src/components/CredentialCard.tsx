import { Credential } from '@/data/mockData';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Clock, Shield } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface CredentialCardProps {
  credential: Credential;
}

const CredentialCard = ({ credential }: CredentialCardProps) => {
  const getStatusBadge = () => {
    if (credential.verificationStatus === 'verified') {
      return (
        <Badge className="verified-badge">
          <CheckCircle className="h-3 w-3" />
          Verified
        </Badge>
      );
    }
    return (
      <Badge className="pending-badge">
        <Clock className="h-3 w-3" />
        Pending
      </Badge>
    );
  };

  return (
    <Card className="hover-lift card-shadow animate-fade-in">
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="text-4xl">{credential.providerLogo}</div>
            <div>
              <h3 className="font-semibold text-lg">{credential.courseName}</h3>
              <p className="text-sm text-muted-foreground">{credential.providerName}</p>
            </div>
          </div>
          {getStatusBadge()}
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Domain:</span>
            <span className="font-medium">{credential.domain}</span>
          </div>
          
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">NSQF Level:</span>
            <Badge variant="outline" className="font-semibold">
              Level {credential.nsqfLevel}
            </Badge>
          </div>
          
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Issued Date:</span>
            <span>{new Date(credential.issuedDate).toLocaleDateString('en-IN')}</span>
          </div>

          {credential.verificationStatus === 'verified' && (
            <>
              <div className="pt-3 border-t border-border">
                <div className="flex items-center gap-2 text-sm text-success">
                  <Shield className="h-4 w-4" />
                  <span className="font-medium">Multi-Layer Verification</span>
                </div>
                <div className="mt-2 space-y-1 text-xs text-muted-foreground">
                  {credential.digiLockerVerified && (
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-3 w-3 text-success" />
                      Verified via DigiLocker
                    </div>
                  )}
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-3 w-3 text-success" />
                    NCVET Recognized Provider
                  </div>
                  {credential.blockchainHash && (
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-3 w-3 text-success" />
                      Blockchain: {credential.blockchainHash.substring(0, 16)}...
                    </div>
                  )}
                </div>
              </div>
            </>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default CredentialCard;
