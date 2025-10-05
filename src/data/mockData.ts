// Mock data for Skill Passport platform

export type UserRole = 'learner' | 'provider' | 'employer' | 'admin';

export type VerificationStatus = 'verified' | 'pending' | 'rejected';

export type NSQFLevel = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

export interface Credential {
  id: string;
  courseName: string;
  domain: string;
  nsqfLevel: NSQFLevel;
  providerId: string;
  providerName: string;
  providerLogo: string;
  issuedDate: string;
  verificationStatus: VerificationStatus;
  blockchainHash?: string;
  digiLockerVerified: boolean;
  learnerId: string;
}

export interface Learner {
  id: string;
  name: string;
  email: string;
  phone: string;
  digiLockerId: string;
  profilePicture: string;
  currentNSQFLevel: NSQFLevel;
  credentials: Credential[];
  profileVisibility: 'public' | 'employers-only' | 'private';
}

export interface Provider {
  id: string;
  name: string;
  email: string;
  logo: string;
  apiKey: string;
  status: 'approved' | 'pending' | 'rejected';
  totalCredentialsIssued: number;
  ncvetRecognized: boolean;
}

export interface Employer {
  id: string;
  name: string;
  email: string;
  companyLogo: string;
  verifiedHires: number;
}

// Mock Learners
export const mockLearners: Learner[] = [
  {
    id: 'L001',
    name: 'Priya Sharma',
    email: 'priya.sharma@example.com',
    phone: '+91 98765 43210',
    digiLockerId: 'DL-2024-001',
    profilePicture: '👩‍💼',
    currentNSQFLevel: 6,
    profileVisibility: 'public',
    credentials: []
  },
  {
    id: 'L002',
    name: 'Aarav Singh',
    email: 'aarav.singh@example.com',
    phone: '+91 98765 43211',
    digiLockerId: 'DL-2024-002',
    profilePicture: '👨‍💻',
    currentNSQFLevel: 5,
    profileVisibility: 'employers-only',
    credentials: []
  },
  {
    id: 'L003',
    name: 'Neha Verma',
    email: 'neha.verma@example.com',
    phone: '+91 98765 43212',
    digiLockerId: 'DL-2024-003',
    profilePicture: '👩‍🎓',
    currentNSQFLevel: 4,
    profileVisibility: 'public',
    credentials: []
  }
];

// Mock Providers
export const mockProviders: Provider[] = [
  {
    id: 'P001',
    name: 'NPTEL',
    email: 'contact@nptel.ac.in',
    logo: '🎓',
    apiKey: 'nptel_api_key_12345',
    status: 'approved',
    totalCredentialsIssued: 15420,
    ncvetRecognized: true
  },
  {
    id: 'P002',
    name: 'Coursera India',
    email: 'india@coursera.org',
    logo: '📚',
    apiKey: 'coursera_api_key_67890',
    status: 'approved',
    totalCredentialsIssued: 8932,
    ncvetRecognized: true
  },
  {
    id: 'P003',
    name: 'NSDC',
    email: 'info@nsdcindia.org',
    logo: '🏆',
    apiKey: 'nsdc_api_key_11223',
    status: 'approved',
    totalCredentialsIssued: 23456,
    ncvetRecognized: true
  }
];

// Mock Employers
export const mockEmployers: Employer[] = [
  {
    id: 'E001',
    name: 'Infosys',
    email: 'recruitment@infosys.com',
    companyLogo: '💼',
    verifiedHires: 342
  },
  {
    id: 'E002',
    name: 'TCS',
    email: 'talent@tcs.com',
    companyLogo: '🏢',
    verifiedHires: 428
  },
  {
    id: 'E003',
    name: 'Wipro',
    email: 'careers@wipro.com',
    companyLogo: '🌐',
    verifiedHires: 267
  }
];

// Mock Credentials
export const mockCredentials: Credential[] = [
  {
    id: 'C001',
    courseName: 'Python Basics',
    domain: 'Programming',
    nsqfLevel: 4,
    providerId: 'P001',
    providerName: 'NPTEL',
    providerLogo: '🎓',
    issuedDate: '2024-01-15',
    verificationStatus: 'verified',
    blockchainHash: '0x7a8f9b2c3d4e5f6a7b8c9d0e1f2a3b4c',
    digiLockerVerified: true,
    learnerId: 'L001'
  },
  {
    id: 'C002',
    courseName: 'Data Analytics',
    domain: 'Data Science',
    nsqfLevel: 5,
    providerId: 'P002',
    providerName: 'Coursera India',
    providerLogo: '📚',
    issuedDate: '2024-02-20',
    verificationStatus: 'verified',
    blockchainHash: '0x5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f',
    digiLockerVerified: true,
    learnerId: 'L001'
  },
  {
    id: 'C003',
    courseName: 'AI Fundamentals',
    domain: 'Artificial Intelligence',
    nsqfLevel: 6,
    providerId: 'P001',
    providerName: 'NPTEL',
    providerLogo: '🎓',
    issuedDate: '2024-03-10',
    verificationStatus: 'verified',
    blockchainHash: '0x1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d',
    digiLockerVerified: true,
    learnerId: 'L001'
  },
  {
    id: 'C004',
    courseName: 'Digital Marketing',
    domain: 'Marketing',
    nsqfLevel: 4,
    providerId: 'P003',
    providerName: 'NSDC',
    providerLogo: '🏆',
    issuedDate: '2024-01-25',
    verificationStatus: 'verified',
    blockchainHash: '0x9e8d7c6b5a4f3e2d1c0b9a8f7e6d5c4b',
    digiLockerVerified: true,
    learnerId: 'L002'
  },
  {
    id: 'C005',
    courseName: 'Cloud Computing',
    domain: 'Cloud Technology',
    nsqfLevel: 6,
    providerId: 'P002',
    providerName: 'Coursera India',
    providerLogo: '📚',
    issuedDate: '2024-03-05',
    verificationStatus: 'pending',
    digiLockerVerified: false,
    learnerId: 'L002'
  },
  {
    id: 'C006',
    courseName: 'Graphic Design',
    domain: 'Design',
    nsqfLevel: 3,
    providerId: 'P003',
    providerName: 'NSDC',
    providerLogo: '🏆',
    issuedDate: '2024-02-14',
    verificationStatus: 'verified',
    blockchainHash: '0x2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e',
    digiLockerVerified: true,
    learnerId: 'L003'
  }
];

// Assign credentials to learners
mockLearners[0].credentials = mockCredentials.filter(c => c.learnerId === 'L001');
mockLearners[1].credentials = mockCredentials.filter(c => c.learnerId === 'L002');
mockLearners[2].credentials = mockCredentials.filter(c => c.learnerId === 'L003');

// NSQF Level Descriptions
export const nsqfLevelDescriptions: Record<NSQFLevel, string> = {
  1: 'Certificate - Basic Skills',
  2: 'Certificate - Practical Skills',
  3: 'Certificate - Advanced Skills',
  4: 'Certificate - Technical Skills',
  5: 'Diploma - Advanced Technical',
  6: 'Advanced Diploma',
  7: 'Bachelor Degree',
  8: 'Postgraduate Diploma',
  9: 'Master Degree',
  10: 'Doctoral Degree'
};

// Platform Analytics (for Admin)
export const platformAnalytics = {
  totalLearners: 45623,
  totalProviders: 128,
  totalCredentials: 187452,
  verifiedCredentials: 156789,
  pendingCredentials: 28543,
  apiIntegrations: 94,
  blockchainTransactions: 156789,
  monthlyGrowth: 23.4
};
